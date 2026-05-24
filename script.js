// Minimal unified geometric icon vectors replacing volatile emojis
const SVG_ICONS = {
    loop: `<svg viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 12c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 6.74C4.46 8.23 4 9.57 4 11c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>`,
    psych: `<svg viewBox="0 0 24 24"><path d="M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.79-2.79C10.09 18.66 11.03 19 12 19c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>`,
    scarcity: `<svg viewBox="0 0 24 24"><path d="M21 11H3c-.55 0-1 .45-1 1s.45 1 1 1h18c-.55 0 1-.45 1-1s-.45-1-1-1zm-9-7c-3.87 0-7 3.13-7 7h14c0-3.87-3.13-7-7-7zm0 14c-3.87 0-7-3.13-7-7h14c0 3.87-3.13 7-7 7z"/></svg>`,
    collab: `<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    asym: `<svg viewBox="0 0 24 24"><path d="M22 11h-4.18C17.4 7.31 14.39 4.44 10.5 4.07V2H8.5v2.07C4.61 4.44 1.6 7.31 1.18 11H0v2h1.18c.42 3.69 3.43 6.56 7.32 6.93V22h2v-2.07c3.89-.37 6.9-3.24 7.32-6.93H22v-2zm-11.5 7c-3.03 0-5.5-2.47-5.5-5.5S7.47 7 10.5 7s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z"/></svg>`,
    hope: `<svg viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v-2h2v2zm0-4h-2V9h2v3z"/></svg>`,
    research: `<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>`,
    branch: `<svg viewBox="0 0 24 24"><path d="M21 8c-1.1 0-2 .9-2 2v2H9V5h2c1.1 0 2-.9 2-2s-1-2-2-2H5c-1.1 0-2 .9-2 2s1 2 2 2h2v14h4v-2h8v2c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z"/></svg>`,
    micro: `<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`,
    synth: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
    pacing: `<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 10.01 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>`,
    mythos: `<svg viewBox="0 0 24 24"><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.2 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>`,
    rhythm: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,
    sprint: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>`,
    biovessel: `<svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
    facilitate: `<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>`,
    acoustic: `<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-4z"/></svg>`,
    poly: `<svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-5l-10 5-10-5v5z"/></svg>`
};

// 1. GAME DATA ARCHITECTURE (5 possible ability points per node max rank)
const INITIAL_TREES = {
    crucible: {
        color: "#ffcc00", 
        tiers: {
            1: [{ id: "c_core", name: "CORE LOOP ARCHITECTURE", glyph: SVG_ICONS.loop, rank: 0, maxRank: 5, prereqs: [], desc: "Architect structural design interactions. The base engine that governs player behavior.", unlocks: ["c_psych", "c_flow"] }],
            2: [
                { id: "c_psych", name: "PSYCHOLOGICAL INCENTIVES", glyph: SVG_ICONS.psych, rank: 0, maxRank: 5, prereqs: ["c_core"], desc: "Incorporate intrinsic motivation systems and feedback mechanisms into layouts.", unlocks: ["c_coauthor", "w_pace"] },
                { id: "c_flow", name: "RESOURCE FLOW & SCARCITY", glyph: SVG_ICONS.scarcity, rank: 0, maxRank: 5, prereqs: ["c_core"], desc: "Balance economic loops, balancing system leaks, inflation curves, and point scarcity.", unlocks: ["c_asym"] }
            ],
            3: [
                { id: "c_coauthor", name: "CO-AUTHORSHIP FRAMEWORKS", glyph: SVG_ICONS.collab, rank: 0, maxRank: 5, prereqs: ["c_psych", "w_micro"], desc: "Empower non-traditional creators or community units to natively co-author design spaces.", unlocks: ["c_hope"] },
                { id: "c_asym", name: "ASYMMETRIC POWER DYNAMICS", glyph: SVG_ICONS.asym, rank: 0, maxRank: 5, prereqs: ["c_flow"], desc: "Introduce structural asymmetry into starting systems, driving specialized strategic loops.", unlocks: [] }
            ],
            4: [{ id: "c_hope", name: "SYSTEMS OF RADICAL HOPE", glyph: SVG_ICONS.hope, rank: 0, maxRank: 5, prereqs: ["c_coauthor", "wc_facilitate"], desc: "Capstone: Channel raw mechanical interaction loops into structures that generate collective hope.", unlocks: [] }]
        }
    },
    weave: {
        color: "#e5c158", 
        tiers: {
            1: [{ id: "w_res", name: "DEEP RESEARCH ROUTINE", glyph: SVG_ICONS.research, rank: 0, maxRank: 5, prereqs: [], desc: "Excavate raw source artifacts. Sift through archives and academic contexts to build structural backdrops.", unlocks: ["w_branch", "w_micro"] }],
            2: [
                { id: "w_branch", name: "BRANCHING LOGIC SYSTEMS", glyph: SVG_ICONS.branch, rank: 0, maxRank: 5, prereqs: ["w_res"], desc: "Construct flexible content flows that branch gracefully around complex user interactions.", unlocks: ["w_synth", "w_pace"] },
                { id: "w_micro", name: "MICRONARRATIVE CRAFT", glyph: SVG_ICONS.micro, rank: 0, maxRank: 5, prereqs: ["w_res"], desc: "Distill massive atmospheric details into minimalist, hard-hitting interface prose.", unlocks: ["c_coauthor"] }
            ],
            3: [
                { id: "w_synth", name: "SCIENCE SYNTHESIS PROSE", glyph: SVG_ICONS.synth, rank: 0, maxRank: 5, prereqs: ["w_branch"], desc: "Translate complex system concepts, data behaviors, or algorithmic bias into accessible narratives.", unlocks: ["w_mythos"] },
                { id: "w_pace", name: "STRUCTURAL PACING ARCS", glyph: SVG_ICONS.pacing, rank: 0, maxRank: 5, prereqs: ["w_branch", "c_psych"], desc: "Calibrate structural storytelling beats with mechanical tension over sustained periods.", unlocks: [] }
            ],
            4: [{ id: "w_mythos", name: "THE COSMIC MYTHOS", glyph: SVG_ICONS.mythos, rank: 0, maxRank: 5, prereqs: ["w_synth"], desc: "Capstone: Integrate grand thematic perspectives with deep empathy to generate eternal texts.", unlocks: [] }]
        }
    },
    wildcard: {
        color: "#c5a059", 
        tiers: {
            1: [{ id: "wc_rhythm", name: "DAILY RHYTHM FOUNDATION", glyph: SVG_ICONS.rhythm, rank: 0, maxRank: 5, prereqs: [], desc: "Establish rigid structural time limits. Quarantine morning focus windows from modern communication leaks.", unlocks: ["wc_sprint", "wc_optimize"] }],
            2: [
                { id: "wc_sprint", name: "DEEP WORK SPRINT BLOCKS", glyph: SVG_ICONS.sprint, rank: 0, maxRank: 5, prereqs: ["wc_rhythm"], desc: "Isolate uninterrupted execution periods to complete complex mechanical goals.", unlocks: ["wc_acoustic"] },
                { id: "wc_optimize", name: "BIO-VESSEL OPTIMIZATION", glyph: SVG_ICONS.biovessel, rank: 0, maxRank: 5, prereqs: ["wc_rhythm"], desc: "Systematically calibrate foundational physiological habits—sleep cycles, mobility patterns, and fuel vectors to maximize life expectancy [L.E.].", unlocks: ["wc_facilitate"] }
            ],
            3: [
                { id: "wc_facilitate", name: "DYNAMIC ROOM FACILITATION", glyph: SVG_ICONS.facilitate, rank: 0, maxRank: 5, prereqs: ["wc_optimize"], desc: "Control group attention dynamics, analyze real-time friction points, and manage live social workshops.", unlocks: ["c_hope"] },
                { id: "wc_acoustic", name: "ACOUSTIC LANDSCAPES", glyph: SVG_ICONS.acoustic, rank: 0, maxRank: 5, prereqs: ["wc_sprint"], desc: "Deconstruct frequency manipulation and composition principles to construct rich acoustic tapestries.", unlocks: ["wc_poly"] }
            ],
            4: [{ id: "wc_poly", name: "TOTAL POLYMATHY SYNTHESIS", glyph: SVG_ICONS.poly, rank: 0, maxRank: 5, prereqs: ["wc_facilitate", "wc_acoustic"], desc: "Capstone: Fuse biological longevity, somatic performance, sound logic, and system theory into an ultimate life practice.", unlocks: [] }]
        }
    }
};

// State Persistence Controller - Hydrating profile with 8 starting points instead of 3
let gameState = JSON.parse(localStorage.getItem('odyssey_skill_tree_save')) || {
    profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 8 },
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

// 5. ABILITY NUKE CONTROLLER (Resets back to baseline 8 starting points)
function triggerSystemReset() {
    const message = "⚠️ RESET ABILITIES?\n\nThis will return all invested Ability Points and clear your progress trees completely.";
    if (confirm(message)) {
        gameState = {
            profile: { name: "SYSTEM ARCHETYPE", level: 1, currentXp: 0, skillPoints: 8 },
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
                
                button.onclick = () => purchaseNode(node.id);
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
