// Aligne une section vers la gauche en calculant le décalage nécessaire
function alignSectionLeft(sectionId, fixedWidth) {
    const section = document.getElementById(sectionId);
    if (section) {
      const viewportWidth = window.innerWidth;
      const offset = viewportWidth > fixedWidth ? (viewportWidth - fixedWidth) / 2 : 0;
      section.style.marginLeft = `-${offset}px`;
    }
  }
  
  // Aligne une section vers la droite en calculant le décalage nécessaire
  function alignSectionRight(sectionId, fixedWidth) {
    const section = document.getElementById(sectionId);
    if (section) {
      const viewportWidth = window.innerWidth;
      const offset = viewportWidth > fixedWidth ? (viewportWidth - fixedWidth) / 2 : 0;
      section.style.marginRight = `-${offset}px`;
    }
  }
  
  // Fonction globale d'alignement des sections
  function alignSections() {
    alignSectionRight('projects-wrapper', 850);
    alignSectionLeft('projects', 2050);
  }
  
  // Aligner dès le chargement et lors du redimensionnement
  window.addEventListener('load', alignSections);
  window.addEventListener('resize', alignSections);
  