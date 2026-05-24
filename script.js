// 1. DATA INVENTORY (Contains unique glyph symbols and hover descriptive documentation strings)
const INITIAL_TREES = {
    crucible: {
        color: "#e11d48", // Basquiat Red
        tiers: {
            1: [{ id: "c_core", name: "Core Loop Architecture", glyph: "♽", rank: 0, maxRank: 3, prereqs: [], desc: "Design second-to-second interactive loops that grip focus.", unlocks: ["c_psych", "c_flow"] }],
            2: [
                { id: "c_psych", name: "Psychological Incentives", glyph: "🧠", rank: 0, maxRank: 3, prereqs: ["c_core"], desc: "Engineer intrinsic rewards to shape user behavior naturally.", unlocks: ["c_coauthor", "w_pace"] },
                { id: "c_flow", name: "Resource Flow & Economy", glyph: "⚖", rank: 0, maxRank: 2, prereqs: ["c_core"], desc: "Balance mathematical input, output, and scarcity engines.", unlocks: ["c_asym"] }
            ],
            3: [
                { id: "c_coauthor", name: "Co-Authorship Frameworks", glyph: "🤝", rank: 0, maxRank: 3, prereqs: ["c_psych", "w_micro"], desc: "Empower non-designers or local youth to co-create systems.", unlocks: ["c_hope"] },
                { id: "c_asym", name: "Asymmetric Systems", glyph: "⍋", rank: 0, maxRank: 2, prereqs: ["c_flow"], desc: "Balance interactions where players start with unequal resources.", unlocks: [] }
            ],
            4: [{ id: "c_hope", name: "Systems of Radical Hope", glyph: "👑", rank: 0, maxRank: 1, prereqs: ["c_coauthor", "wc_facilitate"], desc: "Capstone: Deploy systemic play that drives community action and solidarity.", unlocks: [] }]
        }
    },
    weave: {
        color: "#eab308", // Basquiat Yellow
        tiers: {
            1: [{ id: "w_res", name: "Deep Research Routine", glyph: "🕳", rank: 0, maxRank: 3, prereqs: [], desc: "Sift historical files and scientific papers to extract thematic foundations.", unlocks: ["w_branch", "w_micro"] }],
            2: [
                { id: "w_branch", name: "Branching Logic Scripting", glyph: "🌿", rank: 0, maxRank: 3, prereqs: ["w_res"], desc: "Write narrative trees that react smoothly to divergent human paths.", unlocks: ["w_synth", "w_pace"] },
                { id: "w_micro", name: "Micro-Narrative Craft", glyph: "✍", rank: 0, maxRank: 2, prereqs: ["w_res"], desc: "Craft punchy card layouts or precise minimalist text copy.", unlocks: ["c_coauthor"] }
            ],
            3: [
                { id: "w_synth", name: "Science Synthesis Prose", glyph: "⚛", rank: 0, maxRank: 3, prereqs: ["w_branch"], desc: "Translate complex astrophysics or data bias into poetic, human lines.", unlocks: ["w_mythos"] },
                { id: "w_pace", name: "Structural Pacing Arcs", glyph: "⎋", rank: 0, maxRank: 2, prereqs: ["w_branch", "c_psych"], desc: "Align narrative tension beats to hit exactly when mechanical focus peaks.", unlocks: [] }
            ],
            4: [{ id: "w_mythos", name: "The Cosmic Mythos", glyph: "👁", rank: 0, maxRank: 1, prereqs: ["w_synth"], desc: "Capstone: Weave deep data history and raw empathy into unforgettable immersive text.", unlocks: [] }]
        }
    },
    wildcard: {
        color: "#2563eb", // Basquiat Blue
        tiers: {
            1: [{ id: "wc_rhythm", name: "Daily Rhythm Foundations", glyph: "⚡", rank: 0, maxRank: 3, prereqs: [], desc: "Lock down steady personal time boundaries to insulate your baseline energy.", unlocks: ["wc_sprint", "wc_optimize"] }],
            2: [
                { id: "wc_sprint", name: "Deep Work Sprint Blocks", glyph: "⏱", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"], desc: "Trigger long, hyper-focused execution blocks without device distraction.", unlocks: ["wc_acoustic"] },
                { id: "wc_optimize", name: "Biovessel Optimization", glyph: "🫀", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"], desc: "Maintain physical health engine: life expectancy benchmarks, functional movement, and deep sleep cycles.", unlocks: ["wc_facilitate"] }
            ],
            3: [
                { id: "wc_facilitate", name: "Dynamic Room Facilitation", glyph: "📢", rank: 0, maxRank: 2, prereqs: ["wc_optimize"], desc: "Manage live group energy, speak clearly, and read room behavior.", unlocks: ["c_hope"] },
                { id: "wc_acoustic", name: "Acoustic Landscapes", glyph: "🎸", rank: 0, maxRank: 3, prereqs: ["wc_sprint"], desc: "Learn instruments or sound design to construct rich environmental atmospheres.", unlocks: ["wc_poly"] }
            ],
            4: [{ id: "wc_poly", name: "Total Polymathy Synthesis", glyph: "✶", rank: 0, maxRank: 1, prereqs: ["wc_facilitate", "wc_acoustic"], desc: "Capstone: Achieve a fluid life rhythm where health, music, and focus feed directly into your art.", unlocks: [] }]
        }
    }
};

// State Engine Hydration
let gameState = JSON.parse(localStorage.getItem('rpg_basquiat_matrix_save')) || {
    profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 3 },
    streaks: { currentStreak: 0, lastLogDate: null },
    trees: JSON.parse(JSON.stringify(INITIAL_TREES))
};

// Tree Flat Search Helper
function findNodeById(nodeId) {
    for (let treeKey in gameState.trees) {
        for (let tierKey in gameState.trees[treeKey].tiers) {
            const node = gameState.trees[treeKey].tiers[tierKey].find(n => n.id === nodeId);
            if (node) return node;
        }
    }
    return null;
}

// Global Validation Scan: Are any upper skills actively locking the target node?
function hasActiveDependents(parentNodeId) {
    for (let treeKey in gameState.trees) {
        for (let tierKey in gameState.trees[treeKey].tiers) {
            const rowNodes = gameState.trees[treeKey].tiers[tierKey];
            for (let targetNode of rowNodes) {
                if (targetNode.prereqs.includes(parentNodeId) && targetNode.rank > 0) {
                    return true; 
                }
            }
        }
    }
    return false;
}

// 2. XP CORE COMPILATION
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

// 3. LEFT CLICK ACQUISITION MATRIX
function purchaseNode(nodeId) {
    const node = findNodeById(nodeId);
    if (!node || gameState.profile.skillPoints < 1 || node.rank >= node.maxRank) return;
    
    const dependenciesMet = node.prereqs.every(reqId => {
        const target = findNodeById(reqId);
        return target && target.rank > 0;
    });
    
    if (node.prereqs.length > 0 && !dependenciesMet) return;
    
    gameState.profile.skillPoints--;
    node.rank++;
    
    syncAndRender();
}

// 4. RIGHT CLICK REFUND CONTROLLER
function refundNodePoint(nodeId) {
    const node = findNodeById(nodeId);
    if (!node || node.rank <= 0) return;
    
    if (hasActiveDependents(nodeId)) {
        console.warn(`REFUND LOCKED: Skills further up the system depend on ${node.name}.`);
        return;
    }
    
    node.rank--;
    gameState.profile.skillPoints++;
    
    syncAndRender();
}

// 5. INTENTIONAL DESTRUCTION RESET TERMINAL
function triggerSystemReset() {
    const message = "🚨 ARE YOU ABSOLUTELY SURE?\n\nTHIS WILL WIPE YOUR RECORD ENTIRELY, RESEED ALL TRACKED RANKS, AND DESTROY YOUR LOGGED HISTORY FOREVER.";
    if (confirm(message)) {
        gameState = {
            profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 3 },
            streaks: { currentStreak: 0, lastLogDate: null },
            trees: JSON.parse(JSON.stringify(INITIAL_TREES))
        };
        syncAndRender();
    }
}

// 6. DOM RENDER CANVAS BUILDER
function renderMatrixUI() {
    document.getElementById('hud-level').innerText = gameState.profile.level;
    document.getElementById('hud-points').innerText = gameState.profile.skillPoints;
    document.getElementById('hud-streak').innerText = gameState.streaks.currentStreak;
    document.getElementById('hud-xp-current').innerText = gameState.profile.currentXp;
    
    const neededXp = gameState.profile.level * 500;
    document.getElementById('hud-xp-needed').innerText = neededXp;
    
    // FIXED: Element identity correctly matched to style sheet class hook
    document.getElementById('xp-fill-raw').style.width = `${(gameState.profile.currentXp / neededXp) * 100}%`;
    
    for (let treeKey in gameState.trees) {
        const container = document.getElementById(`nodes-${treeKey}`);
        if (!container) continue;
        
        container.innerHTML = '';
        const tree = gameState.trees[treeKey];
        
        for (let tier = 1; tier <= 4; tier++) {
            const row = document.createElement('div');
            row.className = 'tier-row-raw';
            
            if (!tree.tiers[tier]) continue;
            
            tree.tiers[tier].forEach(node => {
                const button = document.createElement('div');
                
                const depsMet = node.prereqs.every(reqId => {
                    const prereqNode = findNodeById(reqId);
                    return prereqNode && prereqNode.rank > 0;
                });
                
                let statusClass = '';
                if (node.rank >= node.maxRank) statusClass = 'maxed';
                else if (node.rank > 0) statusClass = 'unlocked';
                else if (node.prereqs.length === 0 || depsMet) statusClass = 'available';
                
                button.className = `skill-node-raw ${statusClass}`;
                button.style.setProperty('--accent-color', tree.color);
                
                // Left Click Handler
                button.onclick = () => purchaseNode(node.id);
                
                // Right Click Handler
                button.oncontextmenu = (e) => {
                    e.preventDefault(); 
                    refundNodePoint(node.id);
                };
                
                let actionNotice = "⚡ CLICK TO INVEST";
                if (node.rank >= node.maxRank) actionNotice = "👑 FULLY MASTERED";
                else if (node.rank > 0 && !hasActiveDependents(node.id)) actionNotice = "⚡ CLICK TO UPGRADE // ↩ RIGHT-CLICK TO REFUND";
                else if (node.rank > 0 && hasActiveDependents(node.id)) actionNotice = "⚡ CLICK TO UPGRADE // 🔒 REFUND LOCKED BY HIGHER TIER";
                else if (statusClass === '') actionNotice = "🔒 PREREQUISITE SKILLS REQUIRED";
                
                button.innerHTML = `
                    <div class="node-display-glyph">${node.glyph}</div>
                    <div class="node-title-raw">${node.name}</div>
                    <div class="node-rank-raw">${node.rank}/${node.maxRank}</div>
                    <div class="node-tooltip-raw">
                        <strong>${node.name}</strong><br><br>
                        ${node.desc}<br><br>
                        <div class="tooltip-action-alert">${actionNotice}</div>
                    </div>
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
    if (!desc || !diff) return;
    logTask(desc.value, parseInt(diff.value));
    desc.value = '';
    diff.value = '1';
}

function syncAndRender() {
    localStorage.setItem('rpg_basquiat_matrix_save', JSON.stringify(gameState));
    renderMatrixUI();
}

window.onload = renderMatrixUI;
