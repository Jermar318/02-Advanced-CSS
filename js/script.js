document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.getElementById('projects');
})

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
}
