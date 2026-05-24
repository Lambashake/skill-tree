/**
 * Updates a skill's visual look, number tally, and color signature.
 * @param {string} skillId - The identifier matching the data-skill attribute.
 * @param {number} currentPoints - Current point allocation value.
 */
function updateSkillState(skillId, currentPoints) {
    // Locate target container using its key binding
    const skillElement = document.querySelector(`[data-skill="${skillId}"]`);
    
    if (skillElement) {
        const pointsDisplay = skillElement.querySelector('.skill-points');
        
        // Isolate maximum limit boundary directly out of existing element string data
        const maxPoints = pointsDisplay.textContent.split('/').pop().trim();
        pointsDisplay.textContent = `${currentPoints} / ${maxPoints}`;

        // Switch color profiles depending on active point thresholds
        if (currentPoints > 0) {
            skillElement.classList.add('active');
        } else {
            skillElement.classList.remove('active');
        }
    }
}

// Global execution test call (Remove or comment out when linking live systems):
// updateSkillState('heavy-impact', 2);
