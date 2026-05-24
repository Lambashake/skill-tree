// Native 8-Bit Web Audio API Sound Generation Module (No Assets Needed)
const AudioEngine = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    playHover() {
        this.init();
        let osc = this.ctx.createOscillator();
        let gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.04);
    },

    playInvestment() {
        this.init();
        let osc = this.ctx.createOscillator();
        let gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(400, this.ctx.currentTime);
        osc.frequency.setValueAtTime(800, this.ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    },

    playRefund() {
        this.init();
        let osc = this.ctx.createOscillator();
        let gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.setValueAtTime(250, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.18);
    },

    playEngrave() {
        this.init();
        let now = this.ctx.currentTime;
        [0, 0.06, 0.12].forEach((delay, idx) => {
            let osc = this.ctx.createOscillator();
            let gain = this.ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(300 + (idx * 200), now + delay);
            gain.gain.setValueAtTime(0.1, now + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now + delay);
            osc.stop(now + delay + 0.08);
        });
    }
};

// Unified Minimalist Non-Emoji Design Language Vector Objects
const GLYPHS = {
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

// Flat Accessible Architecture Model (Prereq Requirements Completely Purged)
const FLAT_TREES = {
    crucible: [
        { id: "c_core", name: "CORE LOOP ARCHITECTURE", glyph: GLYPHS.loop, rank: 0, maxRank: 5, desc: "Architect structural design interactions. The base engine that governs player behavior." },
        { id: "c_psych", name: "PSYCHOLOGICAL INCENTIVES", glyph: GLYPHS.psych, rank: 0, maxRank: 5, desc: "Incorporate intrinsic motivation systems and feedback mechanisms into layouts." },
        { id: "c_flow", name: "RESOURCE FLOW & SCARCITY", glyph: GLYPHS.scarcity, rank: 0, maxRank: 5, desc: "Balance economic loops, balancing system leaks, inflation curves, and point scarcity." },
        { id: "c_coauthor", name: "CO-AUTHORSHIP FRAMEWORKS", glyph: GLYPHS.collab, rank: 0, maxRank: 5, desc: "Empower non-traditional creators or community units to natively co-author design spaces." },
        { id: "c_asym", name: "ASYMMETRIC POWER DYNAMICS", glyph: GLYPHS.asym, rank: 0, maxRank: 5, desc: "Introduce structural asymmetry into starting systems, driving specialized strategic loops." },
        { id: "c_hope", name: "SYSTEMS OF RADICAL HOPE", glyph: GLYPHS.hope, rank: 0, maxRank: 5, desc: "Capstone: Channel raw mechanical interaction loops into structures that generate collective hope." }
    ],
    weave: [
        { id: "w_res", name: "DEEP RESEARCH ROUTINE", glyph: GLYPHS.research, rank: 0, maxRank: 5, desc: "Excavate raw source artifacts. Sift through archives and academic contexts to build structural backdrops." },
        { id: "w_branch", name: "BRANCHING LOGIC SYSTEMS", glyph: GLYPHS.branch, rank: 0, maxRank: 5, desc: "Construct flexible content flows that branch gracefully around complex user interactions." },
        { id: "w_micro", name: "MICRONARRATIVE CRAFT", glyph: GLYPHS.micro, rank: 0, maxRank: 5, desc: "Distill massive atmospheric details into minimalist, hard-hitting interface prose." },
        { id: "w_synth", name: "SCIENCE SYNTHESIS PROSE", glyph: GLYPHS.synth, rank: 0, maxRank: 5, desc: "Translate complex system concepts, data behaviors, or algorithmic bias into accessible narratives." },
        { id: "w_pace", name: "STRUCTURAL PACING ARCS", glyph: GLYPHS.pacing, rank: 0, maxRank: 5, desc: "Calibrate structural storytelling beats with mechanical tension over sustained periods." },
        { id: "w_mythos", name: "THE COSMIC MYTHOS", glyph: GLYPHS.mythos, rank: 0, maxRank: 5, desc: "Capstone: Integrate grand thematic perspectives with deep empathy to generate eternal texts." }
    ],
    wildcard: [
        { id: "wc_rhythm", name: "DAILY RHYTHM FOUNDATION", glyph: GLYPHS.rhythm, rank: 0, maxRank: 5, desc: "Establish rigid structural time limits. Quarantine morning focus windows from modern communication leaks." },
        { id: "wc_sprint", name: "DEEP WORK SPRINT BLOCKS", glyph: GLYPHS.sprint, rank: 0, maxRank: 5, desc: "Isolate uninterrupted execution periods to complete complex mechanical goals." },
        { id: "wc_optimize", name: "BIO-VESSEL OPTIMIZATION", glyph: GLYPHS.biovessel, rank: 0, maxRank: 5, desc: "Systematically calibrate foundational physiological habits—sleep cycles, mobility patterns, and fuel vectors to maximize life expectancy [L.E.]." },
        { id: "wc_facilitate", name: "DYNAMIC ROOM FACILITATION", glyph: GLYPHS.facilitate, rank: 0, maxRank: 5, desc: "Control group attention dynamics, analyze real-time friction points, and manage live social workshops." },
        { id: "wc_acoustic", name: "ACOUSTIC LANDSCAPES", glyph: GLYPHS.acoustic, rank: 0, maxRank: 5, desc: "Deconstruct frequency manipulation and composition principles to construct rich acoustic tapestries." },
        { id: "wc_poly", name: "TOTAL POLYMATHY SYNTHESIS", glyph: GLYPHS.poly, rank: 0, maxRank: 5, desc: "Capstone: Fuse biological longevity, somatic performance, sound logic, and system theory into an ultimate life practice." }
    ]
};

// Initial State Blueprint (Starts natively with 8 Ability Points)
let gameState = JSON.parse(localStorage.getItem('retro_arcade_tree_save')) || {
    profile: { level: 1, currentXp: 0, skillPoints: 8 },
    streaks: { currentStreak: 0, lastLogDate: null },
    trees: JSON.parse(JSON.stringify(FLAT_TREES))
};

function findNodeById(nodeId) {
    for (let key in gameState.trees) {
        const node = gameState.trees[key].find(n => n.id === nodeId);
        if (node) return node;
    }
    return null;
}

// XP Logging Calculations
function logTask(description, difficulty) {
    let xpGain = difficulty * 100;
    const today = new Date().toDateString();
    
    if (gameState.streaks.lastLogDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (gameState.streaks.lastLogDate === yesterday.toDateString()) {
            gameState.streaks.currentStreak++;
        } else if (gameState.streaks.lastLogDate !== today) {
            gameState.streaks.currentStreak = 1;
        }
    } else {
        gameState.streaks.currentStreak = 1;
    }
    
    gameState.streaks.lastLogDate = today;
    gameState.profile.currentXp += xpGain;
    
    // Evaluate Levels
    let target = gameState.profile.level * 500;
    while (gameState.profile.currentXp >= target) {
        gameState.profile.currentXp -= target;
        gameState.profile.level++;
        gameState.profile.skillPoints++;
        target = gameState.profile.level * 500;
    }
    
    AudioEngine.playEngrave();
    syncAndRender();
}

// Point Allocation Engines
function investPoint(nodeId) {
    const node = findNodeById(nodeId);
    if (!node || gameState.profile.skillPoints < 1 || node.rank >= node.maxRank) return;
    
    gameState.profile.skillPoints--;
    node.rank++;
    
    AudioEngine.playInvestment();
    syncAndRender();
    updateTooltip(node);
}

function refundPoint(nodeId) {
    const node = findNodeById(nodeId);
    if (!node || node.rank <= 0) return;
    
    node.rank--;
    gameState.profile.skillPoints++;
    
    AudioEngine.playRefund();
    syncAndRender();
    updateTooltip(node);
}

// Viewport-Fixed Non-Overlapping Tooltip Pipeline
function updateTooltip(node) {
    const header = document.getElementById('tt-name');
    const body = document.getElementById('tt-desc');
    const footer = document.getElementById('tt-action');
    const panel = document.getElementById('fixed-global-tooltip');
    
    if (!node) {
        header.innerText = "SYSTEM CONSOLE ACTIVE";
        body.innerText = "Hover over any modular ability block to parse its baseline blueprint configuration data.";
        footer.innerText = "READY FOR SELECTION";
        panel.style.borderColor = "#1f293a";
        return;
    }
    
    header.innerText = node.name;
    body.innerText = node.desc;
    
    if (node.rank >= node.maxRank) {
        footer.innerText = "👑 ABILITY CONSTELLATION FULLY MASTERED";
    } else {
        footer.innerText = `[LEFT-CLICK] TO ALLOCATE POINT // [RIGHT-CLICK] TO PURGE (${node.rank}/${node.maxRank})`;
    }
    
    // Dynamically colour-match terminal boundaries based on current target tree column context
    if (node.id.startsWith('c_')) panel.style.borderColor = "#00ff66";
    else if (node.id.startsWith('w_')) panel.style.borderColor = "#ff0055";
    else if (node.id.startsWith('wc_')) panel.style.borderColor = "#00e1ff";
}

function triggerSystemReset() {
    if (confirm("⚠️ RUN FACTORY SYSTEM FORMAT?\n\nThis will purge all logs and restore terminal matrix to 8 baseline points.")) {
        gameState = {
            profile: { level: 1, currentXp: 0, skillPoints: 8 },
            streaks: { currentStreak: 0, lastLogDate: null },
            trees: JSON.parse(JSON.stringify(FLAT_TREES))
        };
        syncAndRender();
        updateTooltip(null);
    }
}

// Rendering Logic
function renderConsole() {
    document.getElementById('hud-level').innerText = gameState.profile.level;
    document.getElementById('hud-points').innerText = gameState.profile.skillPoints;
    document.getElementById('hud-streak').innerText = gameState.streaks.currentStreak;
    document.getElementById('hud-xp-current').innerText = gameState.profile.currentXp;
    
    const targetXp = gameState.profile.level * 500;
    document.getElementById('hud-xp-needed').innerText = targetXp;
    document.getElementById('xp-fill').style.width = `${(gameState.profile.currentXp / targetXp) * 100}%`;
    
    for (let key in gameState.trees) {
        const container = document.getElementById(`nodes-${key}`);
        if (!container) continue;
        container.innerHTML = '';
        
        gameState.trees[key].forEach(node => {
            const block = document.createElement('div');
            
            let stateClass = '';
            if (node.rank >= node.maxRank) stateClass = 'maxed';
            else if (node.rank > 0) stateClass = 'has-points';
            
            block.className = `retro-node-bar ${stateClass}`;
            
            block.onclick = () => investPoint(node.id);
            block.oncontextmenu = (e) => { e.preventDefault(); refundPoint(node.id); };
            
            block.onmouseenter = () => {
                AudioEngine.playHover();
                updateTooltip(node);
            };
            block.onmouseleave = () => {
                updateTooltip(null);
            };
            
            block.innerHTML = `
                <div class="node-meta-left">
                    <div class="retro-glyph-box">${node.glyph}</div>
                    <span class="node-title-string">${node.name}</span>
                </div>
                <div class="node-pip-counter">${node.rank}/${node.maxRank}</div>
            `;
            
            container.appendChild(block);
        });
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
    localStorage.setItem('retro_arcade_tree_save', JSON.stringify(gameState));
    renderConsole();
}

window.onload = () => {
    renderConsole();
    updateTooltip(null);
};
