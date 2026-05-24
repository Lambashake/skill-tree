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
        osc.frequency.setValueAtTime(587.33, this.audioCtx.currentTime);
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

// Re-Engineered Vector Glyphs with %22 Encoded XML attributes to fix modern engine mask drops
const MASK_GLYPHS = {
    loop: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 12c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z%22/%3E%3C/svg%3E")`,
    psych: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l2.79-2.79C10.09 18.66 11.03 19 12 19c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z%22/%3E%3C/svg%3E")`,
    scarcity: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M21 11H3c-.55 0-1 .45-1 1s.45 1 1 1h18c-.55 0 1-.45 1-1s-.45-1-1-1zm-9-7c-3.87 0-7 3.13-7 7h14c0-3.87-3.13-7-7-7zm0 14c-3.87 0-7-3.13-7-7h14c0 3.87-3.13 7-7 7z%22/%3E%3C/svg%3E")`,
    collab: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.01 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z%22/%3E%3C/svg%3E")`,
    asym: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M22 11h-4.18C17.4 7.31 14.39 4.44 10.5 4.07V2H8.5v2.07C4.61 4.44 1.6 7.31 1.18 11H0v2h1.18c.42 3.69 3.43 6.56 7.32 6.93V22h2v-2.07c3.89-.37 6.9-3.24 7.32-6.93H22v-2zm-11.5 7c-3.03 0-5.5-2.47-5.5-5.5S7.47 7 10.5 7s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5z%22/%3E%3C/svg%3E")`,
    hope: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM13 16h-2v-2h2v2zm0-4h-2V9h2v3z%22/%3E%3C/svg%3E")`,
    
    research: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z%22/%3E%3C/svg%3E")`,
    branch: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M21 8c-1.1 0-2 .9-2 2v2H9V5h2c1.1 0 2-.9 2-2s-1-2-2-2H5c-1.1 0-2 .9-2 2s1 2 2 2h2v14h4v-2h8v2c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z%22/%3E%3C/svg%3E")`,
    micro: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z%22/%3E%3C/svg%3E")`,
    synth: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z%22/%3E%3C/svg%3E")`,
    pacing: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M11.99 2C6.47 2 2 6.48 2 12s4.47 10 10.01 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z%22/%3E%3C/svg%3E")`,
    mythos: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.2 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z%22/%3E%3C/svg%3E")`,
    
    rhythm: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z%22/%3E%3C/svg%3E")`,
    sprint: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z%22/%3E%3C/svg%3E")`,
    biovessel: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z%22/%3E%3C/svg%3E")`,
    facilitate: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z%22/%3E%3C/svg%3E")`,
    reading: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5-1.95 0-4.05.4-5.5 1.5v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 16.45 5.15 16 7 16c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.1-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.1.25.1.25 0 .5-.25.5-.5V6c-.6-.45-1.35-.75-2-1zM3 18.5V7c1.1-.35 2.3-.5 3.5-.5 1.7 0 3.35.3 4.5 1v11c-1.15-.7-2.8-1-4.5-1-1.2 0-2.4.15-3.5.5zm18 0c-1.1-.35-2.3-.5-3.5-.5-1.7 0-3.35.3-4.5 1v-11c1.15-.7 2.8-1 4.5-1 1.2 0 2.4.15 3.5.5v11.5z%22/%3E%3C/svg%3E")`,
    poly: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-5l-10 5-10-5v5z%22/%3E%3C/svg%3E")`,
    generic: `url("data:image/svg+xml;utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22%3E%3Cpath d=%22M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%22/%3E%3C/svg%3E")`
};

// Architecture Blueprints Data Structure
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

const INITIAL_SECTOR_META = {
    crucible: { title: "THE CRUCIBLE", sub: "SYSTEMS & HOPE" },
    weave: { title: "THE WEAVE", sub: "WRITING & DIALECTICS" },
    wildcard: { title: "THE WILD CARD", sub: "CATALYSTS & VISIONS" }
};

// State Synchronization Core Engine
let gridState = JSON.parse(localStorage.getItem('tron_grid_save_matrix_v3')) || {
    profile: { level: 1, currentXp: 0, skillPoints: 8 },
    streaks: { currentStreak: 0, lastLogDate: null },
    currentTheme: "cyan",
    sectorMeta: JSON.parse(JSON.stringify(INITIAL_SECTOR_META)),
    trees: JSON.parse(JSON.stringify(INITIAL_MAPS))
};

// Retroactive state expansion check for update transitions
if (!gridState.sectorMeta) {
    gridState.sectorMeta = JSON.parse(JSON.stringify(INITIAL_SECTOR_META));
}

function changeGridTheme(themeValue) {
    document.body.setAttribute('data-theme', themeValue);
    gridState.currentTheme = themeValue;
    saveAndFlush();
}

function locateNode(nodeId) {
    for (let sector in gridState.trees) {
        const item = gridState.trees[sector].find(n => n.id === nodeId);
        if (item) return { node: item, sector: sector };
    }
    return null;
}

// Memory Allocation Modifiers
function allocatePoint(nodeId) {
    const data = locateNode(nodeId);
    if (!data || gridState.profile.skillPoints < 1 || data.node.rank >= data.node.maxRank) return;
    
    gridState.profile.skillPoints--;
    data.node.rank++;
    
    SynthAudioModule.triggerCommitSound();
    saveAndFlush();
    refreshTooltipText(data.node);
}

function purgePoint(nodeId) {
    const data = locateNode(nodeId);
    if (!data || data.node.rank <= 0) return;
    
    data.node.rank--;
    gridState.profile.skillPoints++;
    
    SynthAudioModule.triggerPurgeSound();
    saveAndFlush();
    refreshTooltipText(data.node);
}

// Dynamic Injection Engine Route
function toggleInjectorDeck(sectorId) {
    const deck = document.getElementById(`form-deck-${sectorId}`);
    deck.classList.toggle('active');
}

function injectCustomNode(sectorId) {
    const nameInput = document.getElementById(`add-name-${sectorId}`);
    const descInput = document.getElementById(`add-desc-${sectorId}`);
    const maxInput = document.getElementById(`add-max-${sectorId}`);
    
    if (!nameInput.value.trim() || !descInput.value.trim()) {
        alert("CRITICAL ERROR: Vector instantiation requires valid title and description blocks.");
        return;
    }
    
    const uniqueId = `custom_${sectorId}_${Date.now()}`;
    const newNode = {
        id: uniqueId,
        name: nameInput.value.trim().toUpperCase(),
        mask: MASK_GLYPHS.generic,
        rank: 0,
        maxRank: parseInt(maxInput.value) || 5,
        desc: descInput.value.trim()
    };
    
    gridState.trees[sectorId].push(newNode);
    
    nameInput.value = '';
    descInput.value = '';
    maxInput.value = '5';
    document.getElementById(`form-deck-${sectorId}`).classList.remove('active');
    
    SynthAudioModule.triggerEngraveSound();
    saveAndFlush();
}

// In-Line Core Deck Editing Module Matrix
function openNodeEditorMatrix(event, nodeId) {
    event.stopPropagation(); 
    const data = locateNode(nodeId);
    if (!data) return;
    
    document.getElementById('edit-node-target-id').value = data.node.id;
    document.getElementById('edit-node-name').value = data.node.name;
    document.getElementById('edit-node-desc').value = data.node.desc;
    document.getElementById('edit-node-max').value = data.node.maxRank;
    
    document.getElementById('mainframe-node-editor-modal').classList.add('active');
}

// Processing Matrix Experience Increments
function handleFormSubmit() {
    const descInput = document.getElementById('task-desc');
    const diffSelect = document.getElementById('task-diff');
    if (!descInput.value.trim()) return;

    logTask(descInput.value.trim(), parseInt(diffSelect.value));
    descInput.value = '';
}

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
    let didLevelUp = false;

    while (gridState.profile.currentXp >= boundary) {
        gridState.profile.currentXp -= boundary;
        gridState.profile.level++;
        gridState.profile.skillPoints++;
        boundary = gridState.profile.level * 500;
        didLevelUp = true;
    }
    
    // Trigger Level Up System Alert Window Panel if threshold is crossed
    if (didLevelUp) {
        const levelUpPopup = document.getElementById('level-up-popup');
        if (levelUpPopup) {
            levelUpPopup.classList.add('active');
        }
    }
    
    SynthAudioModule.triggerEngraveSound();
    saveAndFlush();
}

function closeNodeEditorMatrix() {
    document.getElementById('mainframe-node-editor-modal').classList.remove('active');
}

function commitNodeModifications() {
    const id = document.getElementById('edit-node-target-id').value;
    const name = document.getElementById('edit-node-name').value.trim().toUpperCase();
    const desc = document.getElementById('edit-node-desc').value.trim();
    const max = parseInt(document.getElementById('edit-node-max').value) || 5;
    
    const data = locateNode(id);
    if (data) {
        data.node.name = name;
        data.node.desc = desc;
        data.node.maxRank = max;
        if (data.node.rank > max) {
            gridState.profile.skillPoints += (data.node.rank - max);
            data.node.rank = max;
        }
    }
    
    closeNodeEditorMatrix();
    SynthAudioModule.triggerCommitSound();
    saveAndFlush();
}

function deleteTargetNode() {
    const id = document.getElementById('edit-node-target-id').value;
    const data = locateNode(id);
    if (!data) return;
    
    if (confirm(`PURGE TARGET NODE: ${data.node.name}?\n\nThis will permanently sever this node line from the column stack.`)) {
        gridState.profile.skillPoints += data.node.rank; 
        gridState.trees[data.sector] = gridState.trees[data.sector].filter(n => n.id !== id);
        
        closeNodeEditorMatrix();
        SynthAudioModule.triggerPurgeSound();
        saveAndFlush();
        refreshTooltipText(null);
    }
}

// Sector Customizer Module Engine Channels
function openSectorEditorMatrix(sectorId) {
    const meta = gridState.sectorMeta[sectorId] || INITIAL_SECTOR_META[sectorId];
    document.getElementById('edit-sector-target-id').value = sectorId;
    document.getElementById('edit-sector-title').value = meta.title;
    document.getElementById('edit-sector-sub').value = meta.sub;
    
    document.getElementById('mainframe-sector-editor-modal').classList.add('active');
}

// Processing Sector Updates
function closeSectorEditorMatrix() {
    document.getElementById('mainframe-sector-editor-modal').classList.remove('active');
}

function commitSectorModifications() {
    const sectorId = document.getElementById('edit-sector-target-id').value;
    const nextTitle = document.getElementById('edit-sector-title').value.trim().toUpperCase();
    const nextSub = document.getElementById('edit-sector-sub').value.trim().toUpperCase();
    
    if (!nextTitle || !nextSub) {
        alert("CRITICAL ERROR: Tree identities cannot be empty code variables.");
        return;
    }
    
    gridState.sectorMeta[sectorId] = { title: nextTitle, sub: nextSub };
    
    closeSectorEditorMatrix();
    SynthAudioModule.triggerCommitSound();
    saveAndFlush();
}

// Isolated Static Tooltip Display
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
    status.innerText = `RANK: ${node.rank} / ${node.maxRank} // CLICK LEFT TO EXTEND, RIGHT TO RETRACT`;
}

// Render DOM Interface Pipeline — Synchronized with HTML Dynamic Upgrades
function renderSystemInterface() {
    // HUD Sync
    document.getElementById('hud-level').innerText = gridState.profile.level;
    document.getElementById('hud-streak').innerText = gridState.streaks.currentStreak;
    
    // Updated to lock safely into the newly instantiated dynamic input field element
    const pointsInput = document.getElementById('hud-points-input');
    if (pointsInput && document.activeElement !== pointsInput) {
        pointsInput.value = gridState.profile.skillPoints;
    }
    
    const xpNeeded = gridState.profile.level * 500;
    document.getElementById('hud-xp-current').innerText = gridState.profile.currentXp;
    document.getElementById('hud-xp-needed').innerText = xpNeeded;
    
    const percent = Math.min(100, (gridState.profile.currentXp / xpNeeded) * 100);
    document.getElementById('xp-fill').style.width = `${percent}%`;
    
    // Theme Dropdown Sync
    document.getElementById('theme-select').value = gridState.currentTheme;
    document.body.setAttribute('data-theme', gridState.currentTheme);

    // Columns & Nodes Sync
    for (let sector in gridState.trees) {
        const meta = gridState.sectorMeta[sector];
        document.getElementById(`title-${sector}`).innerText = meta.title;
        document.getElementById(`sub-${sector}`).innerText = meta.sub;

        const container = document.getElementById(`nodes-${sector}`);
        container.innerHTML = '';

        gridState.trees[sector].forEach(node => {
            const isMaxed = node.rank === node.maxRank;
            const hasPoints = node.rank > 0;
            
            let structuralClasses = "tron-node-row";
            if (isMaxed) structuralClasses += " maxed";
            else if (hasPoints) structuralClasses += " has-points";

            const nodeEl = document.createElement('div');
            nodeEl.className = structuralClasses;
            
            nodeEl.addEventListener('mouseenter', () => {
                SynthAudioModule.triggerHoverSound();
                refreshTooltipText(node);
            });
            nodeEl.addEventListener('mouseleave', () => refreshTooltipText(null));
            
            nodeEl.addEventListener('click', () => allocatePoint(node.id));
            nodeEl.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                purgePoint(node.id);
            });

            nodeEl.innerHTML = `
                <div class="node-meta-left">
                    <div class="css-mask-icon" style="mask-image: ${node.mask}; -webkit-mask-image: ${node.mask};"></div>
                    <div class="node-string-title">${node.name}</div>
                </div>
                <div class="node-right-action-cluster">
                    <button class="node-config-gear-trigger" onclick="openNodeEditorMatrix(event, '${node.id}')">⋮</button>
                    <div class="node-charge-pip">${node.rank}/${node.maxRank}</div>
                </div>
            `;
            container.appendChild(nodeEl);
        });
    }
}

function saveAndFlush() {
    localStorage.setItem('tron_grid_save_matrix_v3', JSON.stringify(gridState));
    renderSystemInterface();
}

function triggerSystemReset() {
    if (confirm("WARNING: Proceeding will instantly clear your local data logs and revert your nodes to default specifications. Continue?")) {
        localStorage.removeItem('tron_grid_save_matrix_v3');
        gridState = {
            profile: { level: 1, currentXp: 0, skillPoints: 8 },
            streaks: { currentStreak: 0, lastLogDate: null },
            currentTheme: "cyan",
            sectorMeta: JSON.parse(JSON.stringify(INITIAL_SECTOR_META)),
            trees: JSON.parse(JSON.stringify(INITIAL_MAPS))
        };
        saveAndFlush();
    }
}

// Core Mainframe System Bootstrap Launch
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.querySelector('.archetype-input') || document.getElementById('user-archetype');
    if (nameInput) {
        const storedName = localStorage.getItem('tron_user_archetype_name');
        if (storedName) nameInput.value = storedName;
        
        nameInput.addEventListener('input', () => {
            localStorage.setItem('tron_user_archetype_name', nameInput.value);
        });
    }

    // Explicit state listener mapping to handle immediate direct input updates to point storage banks
    const pointsInput = document.getElementById('hud-points-input');
    if (pointsInput) {
        pointsInput.addEventListener('input', () => {
            let val = parseInt(pointsInput.value);
            if (isNaN(val) || val < 0) val = 0;
            gridState.profile.skillPoints = val;
            localStorage.setItem('tron_grid_save_matrix_v3', JSON.stringify(gridState));
            // Trigger downstream sub-component rendering passes without stripping focus away from the input
            for (let sector in gridState.trees) {
                gridState.trees[sector].forEach(node => {
                    const el = document.querySelector(`[onclick*="${node.id}"]`);
                    if (el) {
                        const row = el.closest('.tron-node-row');
                        if (row) {
                            const isMaxed = node.rank === node.maxRank;
                            const hasPoints = node.rank > 0;
                            row.className = "tron-node-row" + (isMaxed ? " maxed" : hasPoints ? " has-points" : "");
                        }
                    }
                });
            }
        });
    }

    renderSystemInterface();
    refreshTooltipText(null);
});
