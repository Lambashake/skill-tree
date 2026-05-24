// 1. DYNAMIC SYSTEM REPOSITORY (Skeletal mapping with dependencies)
const INITIAL_TREES = {
    crucible: {
        color: "#d97706",
        tiers: {
            1: [{ id: "c_core", name: "Core Loop Architecture", rank: 0, maxRank: 3, prereqs: [] }],
            2: [
                { id: "c_psych", name: "Psychological Incentives", rank: 0, maxRank: 3, prereqs: ["c_core"] },
                { id: "c_flow", name: "Resource Flow & Economy", rank: 0, maxRank: 2, prereqs: ["c_core"] }
            ],
            3: [
                { id: "c_coauthor", name: "Co-Authorship Frameworks", rank: 0, maxRank: 3, prereqs: ["c_psych", "w_micro"] }, // Cross dependency
                { id: "c_asym", name: "Asymmetric Systems", rank: 0, maxRank: 2, prereqs: ["c_flow"] }
            ],
            4: [{ id: "c_hope", name: "Systems of Radical Hope", rank: 0, maxRank: 1, prereqs: ["c_coauthor", "wc_facilitate"] }] // Cross dependency
        }
    },
    weave: {
        color: "#10b981",
        tiers: {
            1: [{ id: "w_res", name: "Deep Research Routine", rank: 0, maxRank: 3, prereqs: [] }],
            2: [
                { id: "w_branch", name: "Branching Logic Development", rank: 0, maxRank: 3, prereqs: ["w_res"] },
                { id: "w_micro", name: "Micro-Narrative Craft", rank: 0, maxRank: 2, prereqs: ["w_res"] }
            ],
            3: [
                { id: "w_synth", name: "Science Synthesis Prose", rank: 0, maxRank: 3, prereqs: ["w_branch"] },
                { id: "w_pace", name: "Structural Pacing Frameworks", rank: 0, maxRank: 2, prereqs: ["w_branch", "c_psych"] } // Cross dependency
            ],
            4: [{ id: "w_mythos", name: "The Cosmic Mythos Execution", rank: 0, maxRank: 1, prereqs: ["w_synth"] }]
        }
    },
    wildcard: {
        color: "#06b6d4",
        tiers: {
            1: [{ id: "wc_rhythm", name: "Daily Rhythm Foundations", rank: 0, maxRank: 3, prereqs: [] }],
            2: [
                { id: "wc_sprint", name: "Deep Work Sprint Blocks", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"] },
                { id: "wc_optimize", name: "Biovessel Optimization (Diet/Gym)", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"] }
            ],
            3: [
                { id: "wc_facilitate", name: "Dynamic Room Facilitation", rank: 0, maxRank: 2, prereqs: ["wc_optimize"] },
                { id: "wc_acoustic", name: "Acoustic Landscapes (Audio)", rank: 0, maxRank: 3, prereqs: ["wc_sprint"] }
            ],
            4: [{ id: "wc_poly", name: "Total Polymathy Synthesis", rank: 0, maxRank: 1, prereqs: ["wc_facilitate", "wc_acoustic"] }]
        }
    }
};

// State Engine Hydration
let gameState = JSON.parse(localStorage.getItem('rpg_matrix_save_data')) || {
    profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 3 },
    streaks: { currentStreak: 0, lastLogDate: null },
    trees: INITIAL_TREES
};

// Flatten utility for validation routines
function findNodeById(nodeId) {
    for (let treeKey in gameState.trees) {
        for (let tierKey in gameState.trees[treeKey].tiers) {
            const node = gameState.trees[treeKey].tiers[tierKey].find(n => n.id === nodeId);
            if (node) return node;
        }
    }
    return null;
}

// 2. THE CHRONO LOGGING ENGINE (Tracks actions & calculates curves)
function logTask(description, difficulty) {
    let xpBase = difficulty * 100;
    const todayString = new Date().toDateString();
    
    if (gameState.streaks.lastLogDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (gameState.streaks.lastLogDate === yesterday.toDateString()) {
            gameState.streaks.currentStreak++;
            if (gameState.streaks.currentStreak === 3) xpBase += 50;
            if (gameState.streaks.currentStreak === 5) xpBase += 150;
            if (gameState.streaks.currentStreak >= 7 && gameState.streaks.currentStreak % 7 === 0) xpBase += 300;
        } else if (gameState.streaks.lastLogDate !== todayString) {
            gameState.streaks.currentStreak = 1;
        }
    } else {
        gameState.streaks.currentStreak = 1;
    }
    
    gameState.streaks.lastLogDate = todayString;
    gameState.profile.currentXp += xpBase;
    
    evaluateLevelUp();
    syncAndRender();
}

function evaluateLevelUp() {
    let targetXp = gameState.profile.level * 500;
    while (gameState.profile.currentXp >= targetXp) {
        gameState.profile.currentXp -= targetXp;
        gameState.profile.level++;
        gameState.profile.skillPoints++;
        targetXp = gameState.profile.level * 500;
    }
}

// 3. CORE ALLOCATION UTILITY (Purchases upgrades using RPG thresholds)
function purchaseNode(nodeId) {
    const node = findNodeById(nodeId);
    if (!node || gameState.profile.skillPoints < 1 || node.rank >= node.maxRank) return;
    
    // Evaluate cross-tree line alignments
    const dependenciesMet = node.prereqs.every(reqId => {
        const target = findNodeById(reqId);
        return target && target.rank > 0;
    });
    
    if (node.prereqs.length > 0 && !dependenciesMet) return;
    
    gameState.profile.skillPoints--;
    node.rank++;
    
    syncAndRender();
}

// 4. INTERFACE DOM BUILDER (Generates structural components)
function renderMatrixUI() {
    // HUD Data sync
    document.getElementById('hud-level').innerText = gameState.profile.level;
    document.getElementById('hud-points').innerText = gameState.profile.skillPoints;
    document.getElementById('hud-streak').innerText = gameState.streaks.currentStreak;
    document.getElementById('hud-xp-current').innerText = gameState.profile.currentXp;
    
    const neededXp = gameState.profile.level * 500;
    document.getElementById('hud-xp-needed').innerText = neededXp;
    document.getElementById('xp-bar-fill').style.width = `${(gameState.profile.currentXp / neededXp) * 100}%`;
    
    // Core Columns Generator loop
    for (let treeKey in gameState.trees) {
        const container = document.getElementById(`nodes-${treeKey}`);
        container.innerHTML = '';
        const tree = gameState.trees[treeKey];
        
        for (let tier = 1; tier <= 4; tier++) {
            const row = document.createElement('div');
            row.className = 'tier-row';
            
            tree.tiers[tier].forEach(node => {
                const button = document.createElement('div');
                
                // Track prerequisite validation status styles
                const depsMet = node.prereqs.every(reqId => findNodeById(reqId).rank > 0);
                let statusClass = '';
                if (node.rank >= node.maxRank) statusClass = 'maxed';
                else if (node.rank > 0) statusClass = 'unlocked';
                else if (node.prereqs.length === 0 || depsMet) statusClass = 'available';
                
                button.className = `skill-node ${statusClass}`;
                button.style.setProperty('--tree-color', tree.color);
                button.onclick = () => purchaseNode(node.id);
                
                button.innerHTML = `
                    <div class="node-name">${node.name}</div>
                    <div class="node-rank">${node.rank} / ${node.maxRank}</div>
                `;
                row.appendChild(button);
            });
            container.appendChild(row);
        }
    }
}

function handleFormSubmit() {
    const desc = document.getElementById('task-desc');
    const diff = document.getElementById('task-diff');
    logTask(desc.value, parseInt(diff.value));
    desc.value = '';
    diff.value = '1';
}

function syncAndRender() {
    localStorage.setItem('rpg_matrix_save_data', JSON.stringify(gameState));
    renderMatrixUI();
}

// Bootstrap Initiation Execution
window.onload = renderMatrixUI;
