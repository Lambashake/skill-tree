/**
 * Updates a skill's numeric text representation and toggles color active states.
 * @param {string} skillId - The precise unique ID corresponding to data-skill.
 * @param {number} currentPoints - Total points currently allocated to this skill.
 */
function updateSkillState(skillId, currentPoints) {
    // Select the target skill item via its data token attribute
    const skillElement = document.querySelector(`[data-skill="${skillId}"]`);
    
    if (skillElement) {
        const pointsDisplay = skillElement.querySelector('.skill-points');
        
        // Grab max limits right out of the text content securely
        const maxPoints = pointsDisplay.textContent.split('/').pop().trim();
        pointsDisplay.textContent = `${currentPoints} / ${maxPoints}`;

        // Add class modifiers to shift icons between grey and vibrant styles
        if (currentPoints > 0) {
            skillElement.classList.add('active');
        } else {
            skillElement.classList.remove('active');
        }
    }
}
