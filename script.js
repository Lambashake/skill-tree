// Audio Framework Generation Blueprint Module
const SynthAudioModule = {
    audioCtx: null,

    init() {
        if (!this.audioCtx) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    triggerHoverSound() {
        this.init();
        let osc = this.audioCtx.createOscillator();
        let gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.03);
        gain.gain.setValueAtTime(0.02, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.03);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.03);
    },

    triggerCommitSound() {
        this.init();
        let osc = this.audioCtx.createOscillator();
        let gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime); // D5 chiptune ping
        osc.frequency.setValueAtTime(1174.66, this.audioCtx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.06, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.12);
    },

    triggerPurgeSound() {
        this.init();
        let osc = this.audioCtx.createOscillator();
        let gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(783.99, this.audioCtx.currentTime);
        osc.frequency.setValueAtTime(392.00, this.audioCtx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.15);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.15);
    },

    triggerEngraveSound() {
        this.init();
        let time = this.audioCtx.currentTime;
        [0, 0.04, 0.08].forEach((delay, index) => {
            let osc = this.audioCtx.createOscillator();
            let gain = this.audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(440 + (index * 220), time + delay);
            gain.gain.setValueAtTime(0.04, time + delay);
            gain.gain.exponentialRampToValueAtTime(0.001, time + delay + 0.06);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(time + delay);
            osc.stop(time + delay + 0.06);
        });
    }
};

// 18 Unique High-Tech Geometric Vector Formats for CSS Engine Masking
const MASK_GLYPHS = {
    // Sector 1 Symbols
    loop: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 12c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 6.74C4.46 8.23 4 9.57 4 11c0 4.42 3.58 8 8 8v3l4-4-4-4v3z'/></svg>")`,
    psych: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.79-2.79C10.09 18.66 11.03 19 12 19c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z'/></svg>")`,
    scarcity: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21 11H3c-.55 0-1 .45-1 1s.45 1 1 1h18c-.55 0 1-.45 1-1s-.45-1-1-1zm-9-7c-3.87 0-7 3.13-7 7h14c0-3.87-3.13-7-7-7zm0 14c-3.87 0-7-3.13-7-7h14c0 3.87-3.13 7-7 7z'/></svg>")`,
    collab: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z'/></svg>")`,
    asym: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M22 11h-4.18C17.4 7.31 14.39 4.44 10.5 4.07V2H8.5v2.07C4.61 4.44 1.6 7.31 1.18 11H0v2h1.18c.42 3.69 3.43 6.56 7.32 6.93V22h2v-2.07c3.89-.37 6.9-3.24 7.32-6.93H22v-2zm-11.5 7c-3.03 0-5.5-2.47-5.5-5.5S7.47 7 10.5 7s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z'/></svg>")`,
    hope: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v-2h2v2zm0-4h-2V9h2v3z'/></svg>")`,
    
    // Sector 2 Symbols
    research: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/></svg>")`,
    branch: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21 8c-1.1 0-2 .9-2 2v2H9V5h2c1.1 0 2-.9 2-2s-1-2-2-2H5c-1.1 0-2 .9-2 2s1 2 2 2h2v14h4v-2h8v2c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z'/></svg>")`,
    micro: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/></svg>")`,
    synth: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/></svg>")`,
    pacing: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 10.01 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z'/></svg>")`,
    mythos: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.2 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z'/></svg>")`,
    
    // Sector 3 Symbols (Updated mapping for Catalysts & Visions)
    rhythm: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'/></svg>")`,
    sprint: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z'/></svg>")`,
    biovessel: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>")`,
    facilitate: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z'/></svg>")`,
    reading: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.95 0-4.05.4-5.5 1.5v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 16.45 5.15 16 7 16c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.1-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.1.25.1.25 0 .5-.25.5-.5V6c-.6-.45-1.35-.75-2-1zM3 18.5V7c1.1-.35 2.3-.5 3.5-.5 1.7 0 3.35.3 4.5 1v11c-1.15-.7-2.8-1-4.5-1-1.2 0-2.4.15-3.5.5zm18 0c-1.1-.35-2.3-.5-3.5-.5-1.7 0-3.35.3-4.5 1v-11c1.15-.7 2.8-1 4.5-1 1.2 0 2.4.15 3.5.5v11.5z'/></svg>")`,
    poly: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-5l-10 5-10-5v5z'/></svg>")`
};

// Architecture Blueprints (Completely unlocked open sandbox layout mapping)
const INITIAL_MAPS = {
    crucible: [
        { id: "c_core", name: "CORE LOOP ARCHITECTURE", mask: MASK_GLYPHS.loop, rank: 0, maxRank: 5, desc: "Architect structural design interactions. The base engine that governs player behavior." },
        { id: "c_psych", name: "PSYCHOLOGICAL INCENTIVES", mask: MASK_GLYPHS.psych, rank: 0, maxRank: 5, desc: "Incorporate intrinsic motivation systems and feedback mechanisms into layouts." },
        { id: "c_flow", name: "RESOURCE FLOW & SCARCITY", mask: MASK_GLYPHS.scarcity, rank: 0, maxRank: 5, desc: "Balance economic loops, balancing system leaks, inflation curves, and point scarcity." },
        { id: "c_coauthor", name: "CO-AUTHORSHIP FRAMEWORKS", mask: MASK_GLYPHS.collab, rank: 0, maxRank: 5, desc: "Empower non-traditional creators or community units to natively co-author design spaces." },
        { id: "c_asym", name: "ASYMMETRIC POWER DYNAMICS", mask: MASK_GLYPHS.asym, rank: 0, maxRank: 5, desc: "Introduce structural asymmetry into starting systems, driving specialized strategic loops." },
        { id: "c_hope", name: "SYSTEMS OF RADICAL HOPE", mask: MASK_GLYPHS.hope, rank: 0, maxRank: 5, desc: "Capstone: Channel raw mechanical interaction loops into structures that generate collective hope." }
    ],
    weave: [
        { id: "w_res", name: "DEEP RESEARCH ROUTINE", mask: MASK_GLYPHS.research, rank: 0, maxRank: 5, desc: "Excavate raw source artifacts. Sift through archives and academic contexts to build structural backdrops." },
        { id: "w_branch", name: "BRANCHING LOGIC SYSTEMS", mask: MASK_GLYPHS.branch, rank: 0, maxRank: 5, desc: "Construct flexible content flows that branch gracefully around complex user interactions." },
        { id: "w_micro", name: "MICRONARRATIVE CRAFT", mask: MASK_GLYPHS.micro, rank: 0, maxRank: 5, desc: "Distill massive atmospheric details into minimalist, hard-hitting interface prose." },
        { id: "w_synth", name: "SCIENCE SYNTHESIS PROSE", mask: MASK_GLYPHS.synth, rank: 0, maxRank: 5, desc: "Translate complex system concepts, data behaviors, or algorithmic bias into accessible narratives." },
        { id: "w_pace", name: "STRUCTURAL PACING ARCS", mask: MASK_GLYPHS.pacing, rank: 0, maxRank: 5, desc: "Calibrate structural storytelling beats with mechanical tension over sustained periods." },
        { id: "w_mythos", name: "THE COSMIC MYTHOS", mask: MASK_GLYPHS.mythos, rank: 0, maxRank: 5, desc: "Capstone: Integrate grand thematic perspectives with deep empathy to generate eternal texts." }
    ],
    wildcard: [
        { id: "wc_rhythm", name: "DAILY RHYTHM FOUNDATION", mask: MASK_GLYPHS.rhythm, rank: 0, maxRank: 5, desc: "Establish rigid structural time limits. Quarantine morning focus windows from modern communication leaks." },
        { id: "wc_sprint", name: "DEEP WORK SPRINT BLOCKS", mask: MASK_GLYPHS.sprint, rank: 0, maxRank: 5, desc: "Isolate uninterrupted execution periods to complete complex mechanical goals." },
        { id: "wc_optimize", name: "BIO-VESSEL OPTIMIZATION", mask: MASK_GLYPHS.biovessel, rank: 0, maxRank: 5, desc: "Systematically calibrate foundational physiological habits—sleep cycles, mobility patterns, and fuel vectors to maximize life expectancy [L.E.]." },
        { id: "wc_facilitate", name: "DYNAMIC ROOM FACILITATION", mask: MASK_GLYPHS.facilitate, rank: 0, maxRank: 5, desc: "Control group attention dynamics, analyze real-time friction points, and manage live social workshops." },
        { id: "wc_reading", name: "THE READ PROTOCOL", mask: MASK_GLYPHS.reading, rank: 0, maxRank: 5, desc: "Engage deeply with long-form literature, systemic reports, and historical essays to continually fortify the conceptual baseline." },
        { id: "wc_poly", name: "TOTAL POLYMATHY SYNTHESIS", mask: MASK_GLYPHS.poly, rank: 0, maxRank: 5, desc: "Capstone: Fuse biological longevity, somatic performance, deep textual comprehension, and system theory into an ultimate life practice." }
    ]
};

// State Core Configuration Engine
let gridState = JSON.parse(localStorage.getItem('tron_grid_save_matrix')) || {
    profile: { level: 1, currentXp: 0, skillPoints: 8 },
    streaks: { currentStreak: 0, lastLogDate: null },
    currentTheme: "cyan",
    trees: JSON.parse(JSON.stringify(INITIAL_MAPS))
};

// Check for legacy datasets to ensure clean migrations
if (gridState.trees && gridState.trees.wildcard) {
    const hasAcoustic = gridState.trees.wildcard.some(n => n.id === "wc_acoustic");
    if (hasAcoustic) {
        gridState.trees = JSON.parse(JSON.stringify(INITIAL_MAPS));
        localStorage.setItem('tron_grid_save_matrix', JSON.stringify(gridState));
    }
}

function changeGridTheme(themeValue) {
    document.body.setAttribute('data-theme', themeValue);
    gridState.currentTheme = themeValue;
    localStorage.setItem('tron_grid_save_matrix', JSON.stringify(gridState));
}

function locateNode(nodeId) {
    for (let sector in gridState.trees) {
        const item = gridState.trees[sector].find(n => n.id === nodeId);
        if (item) return item;
    }
    return null;
}

// Processing Matrix Experience Increments
function logTask(desc, difficulty) {
    let energyGain = difficulty * 100;
    const rightNow = new Date().toDateString();
    
    if (gridState.streaks.lastLogDate) {
        const pastDay = new Date();
        pastDay.setDate(pastDay.getDate() - 1);
        
        if (gridState.streaks.lastLogDate === pastDay.toDateString()) {
            gridState.streaks.currentStreak++;
        } else if (gridState.streaks.lastLogDate !== rightNow) {
            gridState.streaks.currentStreak = 1;
        }
    } else {
        gridState.streaks.currentStreak = 1;
    }
    
    gridState.streaks.lastLogDate = rightNow;
    gridState.profile.currentXp += energyGain;
    
    let boundary = gridState.profile.level * 500;
    while (gridState.profile.currentXp >= boundary) {
        gridState.profile.currentXp -= boundary;
        gridState.profile.level++;
        gridState.profile.skillPoints++;
        boundary = gridState.profile.level * 500;
    }
    
    SynthAudioModule.triggerEngraveSound();
    saveAndFlush();
}

// Memory Allocation Modifiers
function allocatePoint(nodeId) {
    const target = locateNode(nodeId);
    if (!target || gridState.profile.skillPoints < 1 || target.rank >= target.maxRank) return;
    
    gridState.profile.skillPoints--;
    target.rank++;
    
    SynthAudioModule.triggerCommitSound();
    saveAndFlush();
    refreshTooltipText(target);
}

function purgePoint(nodeId) {
    const target = locateNode(nodeId);
    if (!target || target.rank <= 0) return;
    
    target.rank--;
    gridState.profile.skillPoints++;
    
    SynthAudioModule.triggerPurgeSound();
    saveAndFlush();
    refreshTooltipText(target);
}

// Isolated Static Tooltip Render Route (Zero layout mutations)
function refreshTooltipText(node) {
    const title = document.getElementById('tt-name');
    const body = document.getElementById('tt-desc');
    const status = document.getElementById('tt-action');
    
    if (!node) {
        title.innerText = "GRID CONSOLE ACTIVE";
        body.innerText = "Safely scan user nodes inside the vector matrix streams to extract node metadata blueprints.";
        status.innerText = "SECURE SECTOR ACCESS REGISTERED";
        return;
    }
    
    title.innerText = node.name;
    body.innerText = node.desc;
    
    if (node.rank >= node.maxRank) {
        status.innerText = "⚡ IDENTITY BLUEPRINT MAXIMUM CAPACITY ACHIEVED";
    } else {
        status.innerText = `[LEFT CLICK] CONSOLIDATE ENERGY // [RIGHT CLICK] DISCONNECT ENERGY (${node.rank}/${node.maxRank})`;
    }
}

function triggerSystemReset() {
    if (confirm("⚠️ WARNING: PURGE IDENTITY DISK MEMORY MATRIX?\n\nThis will scrub your sector trace configurations back to 8 unallocated points.")) {
        gridState = {
            profile: { level: 1, currentXp: 0, skillPoints: 8 },
            streaks: { currentStreak: 0, lastLogDate: null },
            currentTheme: document.getElementById('theme-select').value,
            trees: JSON.parse(JSON.stringify(INITIAL_MAPS))
        };
        saveAndFlush();
        refreshTooltipText(null);
    }
}

// Pure Interface Paint Pipeline
function paintGridUI() {
    document.getElementById('hud-level').innerText = gridState.profile.level;
    document.getElementById('hud-points').innerText = gridState.profile.skillPoints;
    document.getElementById('hud-streak').innerText = gridState.streaks.currentStreak;
    document.getElementById('hud-xp-current').innerText = gridState.profile.currentXp;
    
    const maxBound = gridState.profile.level * 500;
    document.getElementById('hud-xp-needed').innerText = maxBound;
    document.getElementById('xp-fill').style.width = `${(gridState.profile.currentXp / maxBound) * 100}%`;
    
    for (let sector in gridState.trees) {
        const rootStack = document.getElementById(`nodes-${sector}`);
        if (!rootStack) continue;
        rootStack.innerHTML = '';
        
        gridState.trees[sector].forEach(node => {
            const row = document.createElement('div');
            
            let modifier = '';
            if (node.rank >= node.maxRank) modifier = 'maxed';
            else if (node.rank > 0) modifier = 'has-points';
            
            row.className = `tron-node-row ${modifier}`;
            
            // Re-attached direct procedural execution routes
            row.addEventListener('click', () => allocatePoint(node.id));
            row.addEventListener('contextmenu', (e) => { e.preventDefault(); purgePoint(node.id); });
            
            row.addEventListener('mouseenter', () => {
                SynthAudioModule.triggerHoverSound();
                refreshTooltipText(node);
            });
            row.addEventListener('mouseleave', () => {
                refreshTooltipText(null);
            });
            
            row.innerHTML = `
                <div class="node-meta-left">
                    <div class="css-mask-icon" style="-webkit-mask-image: ${node.mask}; mask-image: ${node.mask};"></div>
                    <span class="node-string-title">${node.name}</span>
                </div>
                <div class="node-charge-pip">${node.rank}/${node.maxRank}</div>
            `;
            
            rootStack.appendChild(row);
        });
    }
}

function handleFormSubmit() {
    const note = document.getElementById('task-desc');
    const tier = document.getElementById('task-diff');
    logTask(note.value, parseInt(tier.value));
    note.value = '';
    tier.value = '1';
}

function saveAndFlush() {
    localStorage.setItem('tron_grid_save_matrix', JSON.stringify(gridState));
    paintGridUI();
}

window.onload = () => {
    document.getElementById('theme-select').value = gridState.currentTheme;
    changeGridTheme(gridState.currentTheme);
    paintGridUI();
    refreshTooltipText(null);
};
