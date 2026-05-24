// 1. IMPROVISATIONAL DATA INVENTORY (Odyssey mechanics interpreted via Basquiat themes)
const INITIAL_TREES = {
    crucible: {
        color: "#e11d48", 
        tiers: {
            1: [{ id: "c_core", name: "CORE LOOP ARCHITECTURE", glyph: "♽", rank: 0, maxRank: 3, prereqs: [], desc: "Hammer out basic mechanics. The continuous repetitive action that commands attention.", unlocks: ["c_psych", "c_flow"] }],
            2: [
                { id: "c_psych", name: "PSYCHOLOGICAL INCENTIVES", glyph: "🧠", rank: 0, maxRank: 3, prereqs: ["c_core"], desc: "Expose structural desires. Use behavioral triggers to drive looping feedback.", unlocks: ["c_coauthor", "w_pace"] },
                { id: "c_flow", name: "RESOURCE FLOW & SCARCITY", glyph: "⚖", rank: 0, maxRank: 2, prereqs: ["c_core"], desc: "Establish math structures. Control inputs, systemic leaks, and value metrics.", unlocks: ["c_asym"] }
            ],
            3: [
                { id: "c_coauthor", name: "CO-AUTHORSHIP FRAMEWORKS", glyph: "🤝", rank: 0, maxRank: 3, prereqs: ["c_psych", "w_micro"], desc: "Rip down design silos. Empower local youth or non-designers to author gameplay.", unlocks: ["c_hope"] },
                { id: "c_asym", name: "ASYMMETRIC POWER DYNAMICS", glyph: "⍋", rank: 0, maxRank: 2, prereqs: ["c_flow"], desc: "Build structural inequality into starting resources. Forcing alternative play styles.", unlocks: [] }
            ],
            4: [{ id: "c_hope", name: "SYSTEMS OF RADICAL HOPE", glyph: "👑", rank: 0, maxRank: 1, prereqs: ["c_coauthor", "wc_facilitate"], desc: "Capstone: Transform mechanics into structural engines that spawn collective real-world hope.", unlocks: [] }]
        }
    },
    weave: {
        color: "#eab308", 
        tiers: {
            1: [{ id: "w_res", name: "DEEP RESEARCH ROUTINE", glyph: "🕳", rank: 0, maxRank: 3, prereqs: [], desc: "Excavate raw source artifacts. Sift through archives and documents to feed themes.", unlocks: ["w_branch", "w_micro"] }],
            2: [
                { id: "w_branch", name: "BRANCHING LOGIC SYSTEMS", glyph: "🌿", rank: 0, maxRank: 3, prereqs: ["w_res"], desc: "Draft split scripts that flex seamlessly around messy user input.", unlocks: ["w_synth", "w_pace"] },
                { id: "w_micro", name: "MICRONARRATIVE CRAFT", glyph: "✍", rank: 0, maxRank: 2, prereqs: ["w_res"], desc: "Hone concise layout copy. Short, striking poetry applied directly to interactive spaces.", unlocks: ["c_coauthor"] }
            ],
            3: [
                { id: "w_synth", name: "SCIENCE SYNTHESIS PROSE", glyph: "⚛", rank: 0, maxRank: 3, prereqs: ["w_branch"], desc: "Expose hidden patterns. Turn astrophysics or complex data data bias into rhythmic language.", unlocks: ["w_mythos"] },
                { id: "w_pace", name: "STRUCTURAL PACING ARCS", glyph: "⎋", rank: 0, maxRank: 2, prereqs: ["w_branch", "c_psych"], desc: "Sync structural narrative tension exactly to the peak focus limits of mechanical play.", unlocks: [] }
            ],
            4: [{ id: "w_mythos", name: "THE COSMIC MYTHOS", glyph: "👁", rank: 0, maxRank: 1, prereqs: ["w_synth"], desc: "Capstone: Fuse sprawling historical narratives and raw human empathy into permanent texts.", unlocks: [] }]
        }
    },
    wildcard: {
        color: "#2563eb", 
        tiers: {
            1: [{ id: "wc_rhythm", name: "DAILY RHYTHM FOUNDATION", glyph: "⚡", rank: 0, maxRank: 3, prereqs: [], desc: "Set strict boundaries. Protect initial daily blocks to isolate essential focus channels.", unlocks: ["wc_sprint", "wc_optimize"] }],
            2: [
                { id: "wc_sprint", name: "DEEP WORK SPRINT BLOCKS", glyph: "⏱", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"], desc: "Isolate high-frequency generation phases without digital notification bleed.", unlocks: ["wc_acoustic"] },
                { id: "wc_optimize", name: "BIO-VESSEL OPTIMIZATION", glyph: "🫀", rank: 0, maxRank: 3, prereqs: ["wc_rhythm"], desc: "Prioritize foundational physical systems: functional movement, solid nutrition, and deep sleep cycles to boost life expectancy [L.E.].", unlocks: ["wc_facilitate"] }
            ],
            3: [
                { id: "wc_facilitate", name: "DYNAMIC ROOM FACILITATION", glyph: "📢", rank: 0, maxRank: 2, prereqs: ["wc_optimize"], desc: "Take control of collective settings. Direct attention and decipher structural friction loops.", unlocks: ["c_hope"] },
                { id: "wc_acoustic", name: "ACOUSTIC LANDSCAPES", glyph: "🎸", rank: 0, maxRank: 3, prereqs: ["wc_sprint"], desc: "Unpack musical scales or signal modulation to design immersive, atmospheric backdrops.", unlocks: ["wc_poly"] }
            ],
            4: [{ id: "wc_poly", name: "TOTAL POLYMATHY SYNTHESIS", glyph: "✶", rank: 0, maxRank: 1, prereqs: ["wc_facilitate", "wc_acoustic"], desc: "Capstone: Synthesize somatic health, sound layers, and mechanical logic into a single expressive practice.", unlocks: [] }]
        }
    }
};

// LocalStorage Hydration Layer
let gameState = JSON.parse(localStorage.getItem('rpg_basquiat_matrix_save')) || {
    profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 3 },
    streaks: { currentStreak: 0, lastLogDate: null },
    trees: JSON.parse(JSON.stringify(INITIAL_TREES))
};

// Tree Processing Utilities
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

// 2. BEBOP JAZZ RHYTHM COMPILER (XP / STREAK ENGINE)
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

// 3. LEFT-CLICK CHALK INVESTMENT RUNTIME
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

// 4. RIGHT-CLICK REFUND INTERCEPT LOOP
function refundNodePoint(nodeId) {
    const node = findNodeById(nodeId);
    if (!node || node.rank <= 0) return;
    
    if (hasActiveDependents(nodeId)) {
        console.warn(`🔒 REFUND DENIED // ACTIVE HIGHER DEPENDENCIES REQUIRE CONTEXT`);
        return;
    }
    
    node.rank--;
    gameState.profile.skillPoints++;
    
    syncAndRender();
}

// 5. DESTRUCTIVE SYSTEM ERASE TERMINAL
function triggerSystemReset() {
    const message = "🚨 C̶O̶N̶F̶I̶R̶M̶ ̶D̶E̶S̶T̶R̶U̶C̶T̶I̶O̶N̶ // ARE YOU ABSOLUTELY SURE?\n\nTHIS ATOMIZES CODES, WIPES INVESTED RANKS, AND ERASES TRACKED ACCUMULATION ENTIRELY.";
    if (confirm(message)) {
        gameState = {
            profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 3 },
            streaks: { currentStreak: 0, lastLogDate: null },
            trees: JSON.parse(JSON.stringify(INITIAL_TREES))
        };
        syncAndRender();
    }
}

// 6. ASYMMETRIC CANVAS RENDER MATRIX
function renderMatrixUI() {
    document.getElementById('hud-level').innerText = gameState.profile.level;
    document.getElementById('hud-points').innerText = gameState.profile.skillPoints;
    document.getElementById('hud-streak').innerText = gameState.streaks.currentStreak;
    document.getElementById('hud-xp-current').innerText = gameState.profile.currentXp;
    
    const neededXp = gameState.profile.level * 500;
    document.getElementById('hud-xp-needed').innerText = neededXp;
    
    // Smooth rendering anchor for progress line calculation
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
                
                // Left Click -> Invest
                button.onclick = () => purchaseNode(node.id);
                
                // Right Click -> Refund Context Menu Hijack
                button.oncontextmenu = (e) => {
                    e.preventDefault(); 
                    refundNodePoint(node.id);
                };
                
                let actionNotice = "✗ CLICK TO INVEST CHALK";
                if (node.rank >= node.maxRank) actionNotice = "👑 MASTERED // CROWN CONFERRED";
                else if (node.rank > 0 && !hasActiveDependents(node.id)) actionNotice = "✗ CLICK TO UPGRADE // ↩ RIGHT-CLICK TO REFUND POINT";
                else if (node.rank > 0 && hasActiveDependents(node.id)) actionNotice = "✗ LOCKED // DEEPER ROOTS DEPEND ON THIS POSITION";
                else if (statusClass === '') actionNotice = "🔒 CHANNELS CLOSED // REQUIRE LOWER TIER FULFILLMENT";
                
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
