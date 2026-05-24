// 1. GAME DATA ARCHITECTURE (Sleek, integrated Odyssey-tier values)
const INITIAL_TREES = {
    crucible: {
        color: "#ffcc00", 
        tiers: {
            1: [{ id: "c_core", name: "CORE LOOP ARCHITECTURE", glyph: "♽", rank: 0, maxRank: 3, prereqs: [], desc: "Architect structural design interactions. The base engine that governs player behavior.", unlocks: ["c_psych", "c_flow"] }],
            2: [
                { id: "c_psych", name: "PSYCHOLOGICAL INCENTIVES", glyph: "🧠", rank: 0, maxRank: 3, prereqs: ["c_core"], desc: "Incorporate intrinsic motivation systems and feedback mechanisms into layouts.", unlocks: ["c_coauthor", "w_pace"] },
                { id: "c_flow", name: "RESOURCE FLOW & SCARCITY", glyph: "⚖", rank: 0, maxRank: 2, prereqs: ["c_core"], desc: "Balance economic loops, balancing system leaks, inflation curves, and point scarcity.", unlocks: ["c_asym"] }
            ],
            3: [
                { id: "c_coauthor", name: "CO-AUTHORSHIP FRAMEWORKS", glyph: "🤝", rank: 0, maxRank: 3, prereqs: ["c_psych", "w_micro"], desc: "Empower non-traditional creators or community units to natively co-author design spaces.", unlocks: ["c_hope"] },
                { id: "c_asym", name: "ASYMMETRIC POWER DYNAMICS", glyph: "⍋", rank: 0, maxRank: 2, prereqs: ["c_flow"], desc: "Introduce structural asymmetry into starting systems, driving specialized strategic loops.", unlocks: [] }
            ],
            4: [{ id: "c_hope", name: "SYSTEMS OF RADICAL HOPE", glyph: "🔱", rank: 0, maxRank: 1, prereqs: ["c_coauthor", "wc_facilitate"], desc: "Capstone: Channel raw mechanical interaction loops into structures that generate collective hope.", unlocks: [] }]
        }
    },
    weave: {
        color: "#e5c158", 
        tiers: {
            1: [{ id: "w_res", name: "DEEP RESEARCH ROUTINE", glyph: "🕳", rank: 0, maxRank: 3, prereqs: [], desc: "Excavate raw source artifacts. Sift through archives and academic contexts to build structural backdrops.", unlocks: ["w_branch", "w_micro"] }],
            2: [
                { id: "w_branch", name: "BRANCHING LOGIC SYSTEMS", glyph: "🌿", rank: 0, maxRank: 3, prereqs: ["w_res"], desc: "Construct flexible content flows that branch gracefully around complex user interactions.", unlocks: ["w_synth", "w_pace"] },
                { id: "w_micro", name: "MICRONARRATIVE CRAFT", glyph: "✍", rank: 0, maxRank: 2, prereqs: ["w_res"], desc: "Distill massive atmospheric details into minimalist, hard-hitting interface prose.", unlocks: ["c_coauthor"] }
            ],
            3: [
                { id: "w_synth", name: "SCIENCE SYNTHESIS PROSE", glyph: "⚛", rank: 0, maxRank: 3, prereqs: ["w_branch"], desc: "Translate complex system concepts, data behaviors, or algorithmic bias into accessible narratives.", unlocks: ["w_mythos"] },
                { id: "w_pace", name: "STRUCTURAL PACING ARCS", glyph: "⎋", rank: 0, maxRank: 2, prereqs: ["w_branch", "c_psych"], desc: "Calibrate structural storytelling beats with mechanical tension over sustained periods.", unlocks: [] }
            ],
            4: [{ id: "w_mythos", name: "THE COSMIC MYTHOS", glyph: "🦅", rank: 0, maxRank: 1, prereqs: ["w_synth"], desc: "Capstone: Integrate grand thematic perspectives with deep empathy to generate eternal texts.", unlocks: [] }]
        }
    },
    wildcard: {
        color: "#c5a059", 
        tiers: {
            1: [{ id: "wc_rhythm", name: "DAILY RHYTHM FOUNDATION", glyph: "⚡", rank: 0, maxRank: 3, prereqs: [], desc: "Establish rigid structural time limits. Quarantine morning focus windows from modern communication leaks.", unlocks: ["wc_sprint", "wc_optimize"] }],
            2: [
                { id: "wc_sprint", name: "DEEP WORK SPRINT BLOCKS", glyph: "⏱", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"], desc: "Isolate uninterrupted execution periods to complete complex mechanical goals.", unlocks: ["wc_acoustic"] },
                { id: "wc_optimize", name: "BIO-VESSEL OPTIMIZATION", glyph: "🫀", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"], desc: "Systematically calibrate foundational physiological habits—sleep cycles, mobility patterns, and fuel vectors to maximize life expectancy [L.E.].", unlocks: ["wc_facilitate"] }
            ],
            3: [
                { id: "wc_facilitate", name: "DYNAMIC ROOM FACILITATION", glyph: "📢", rank: 0, maxRank: 2, prereqs: ["wc_optimize"], desc: "Control group attention dynamics, analyze real-time friction points, and manage live social workshops.", unlocks: ["c_hope"] },
                { id: "wc_acoustic", name: "ACOUSTIC LANDSCAPES", glyph: "🎸", rank: 0, maxRank: 3, prereqs: ["wc_sprint"], desc: "Deconstruct frequency manipulation and composition principles to construct rich acoustic tapestries.", unlocks: ["wc_poly"] }
            ],
            4: [{ id: "wc_poly", name: "TOTAL POLYMATHY SYNTHESIS", glyph: "⚔", rank: 0, maxRank: 1, prereqs: ["wc_facilitate", "wc_acoustic"], desc: "Capstone: Fuse biological longevity, somatic performance, sound logic, and system theory into an ultimate life practice.", unlocks: [] }]
        }
    }
};

// State Persistence Controller
let gameState = JSON.parse(localStorage.getItem('odyssey_skill_tree_save')) || {
    profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 3 },
    streaks: { currentStreak: 0, lastLogDate: null },
    trees: JSON.parse(JSON.stringify(INITIAL_TREES))
};

// Deep Search Utilities
function findNodeById(nodeId) {
    for (let treeKey in gameState.trees) {
        for (let tierKey in gameState.trees[treeKey].tiers) {
            const node = gameState.trees[treeKey].tiers[tierKey].find(n => n.id === nodeId);
            if (node) return node;
        }
    }
    return null;
}

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

// 2. XP & STREAK CALCULATOR ENGINE
function logTask(description, difficulty) {
    let xpBase = difficulty * 100;
    const todayString = new Date().toDateString();
    
    if (gameState.streaks.lastLogDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (gameState.streaks.lastLogDate === yesterday.toDateString()) {
            gameState.streaks.currentStreak++;
            // Milestones multipliers based on epic performance curves
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

// 3. SKILL INVESTMENT RUNTIME (LEFT CLICK)
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

// 4. POINT REFUND ENGINE (RIGHT CLICK COOLDOWN INTERCEPT)
function refundNodePoint(nodeId) {
    const node = findNodeById(nodeId);
    if (!node || node.rank <= 0) return;
    
    if (hasActiveDependents(nodeId)) {
        console.warn(`🔒 REFUND LOCKED // HIGHER CONSTELLATIONS RELY ON THIS ABILITY`);
        return;
    }
    
    node.rank--;
    gameState.profile.skillPoints++;
    
    syncAndRender();
}

// 5. ABILITY NUKE CONTROLLER
function triggerSystemReset() {
    const message = "⚠️ RESET ABILITIES?\n\nThis will return all invested Ability Points and clear your progress trees completely.";
    if (confirm(message)) {
        gameState = {
            profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 3 },
            streaks: { currentStreak: 0, lastLogDate: null },
            trees: JSON.parse(JSON.stringify(INITIAL_TREES))
        };
        syncAndRender();
    }
}

// 6. EPIC RENDER MATRIX
function renderMatrixUI() {
    document.getElementById('hud-level').innerText = gameState.profile.level;
    document.getElementById('hud-points').innerText = gameState.profile.skillPoints;
    document.getElementById('hud-streak').innerText = gameState.streaks.currentStreak;
    document.getElementById('hud-xp-current').innerText = gameState.profile.currentXp;
    
    const neededXp = gameState.profile.level * 500;
    document.getElementById('hud-xp-needed').innerText = neededXp;
    
    // Dynamically expand progress bar width
    document.getElementById('xp-fill').style.width = `${(gameState.profile.currentXp / neededXp) * 100}%`;
    
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
                button.style.setProperty('--pillar-gold', tree.color);
                
                // Left Click Assignment
                button.onclick = () => purchaseNode(node.id);
                
                // Right Click Allocation Shift
                button.oncontextmenu = (e) => {
                    e.preventDefault(); 
                    refundNodePoint(node.id);
                };
                
                let actionNotice = "⚡ CLICK TO ACQUIRE ABILITY";
                if (node.rank >= node.maxRank) actionNotice = "👑 ABILITY FULLY MASTERED";
                else if (node.rank > 0 && !hasActiveDependents(node.id)) actionNotice = "⚡ CLICK TO UPGRADE // [RIGHT-CLICK] TO REFUND POINT";
                else if (node.rank > 0 && hasActiveDependents(node.id)) actionNotice = "🔒 LOCKED // HIGHER SKILLS REQUIRE THIS UNLOCK";
                else if (statusClass === '') actionNotice = "🔒 LOCKED // PATHWAY NOT YET REACHED";
                
                button.innerHTML = `
                    <div class="node-display-glyph">${node.glyph}</div>
                    <div class="node-rank-raw">${node.rank}/${node.maxRank}</div>
                    <div class="node-tooltip-raw">
                        <strong>${node.name}</strong>
                        <div class="node-tooltip-desc">${node.desc}</div>
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
    localStorage.setItem('odyssey_skill_tree_save', JSON.stringify(gameState));
    renderMatrixUI();
}

window.onload = renderMatrixUI;
