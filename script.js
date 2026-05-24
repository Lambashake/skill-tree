function updateSkillState(skillId, currentPoints) {
    const skillElement = document.querySelector(`[data-skill="${skillId}"]`);
    if (skillElement) {
        const pointsDisplay = skillElement.querySelector('.skill-points');
        const maxPoints = pointsDisplay.textContent.split('/').pop().trim();
        pointsDisplay.textContent = `${currentPoints} / ${maxPoints}`;

        if (currentPoints > 0) {
            skillElement.classList.add('active');
        } else {
            skillElement.classList.remove('active');
        }
    }
}
