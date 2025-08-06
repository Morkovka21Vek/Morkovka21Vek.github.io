function adjustLayoutForScreenSize() {
  const isSmallScreen = window.innerWidth < 900;

  const textProjectsBlockPhones = `
    margin-right: auto; 
    max-width: 700px; 
    width: calc(100vw - 25px);
  `;
  const projectsImgPhones = `
    left: 50%; 
    width: calc(100vw - 30px); 
    transform: translate(-50%, -2px); 
    position: relative;
  `;

  document.querySelectorAll(".projects-img").forEach((img) => {
    img.style = isSmallScreen ? projectsImgPhones : "";
  });

  document.querySelectorAll(".text-projects-block").forEach((block) => {
    block.style = isSmallScreen ? textProjectsBlockPhones : "";
  });

  document.querySelectorAll(".timelinePoint, .timelineArrow, .timelineArrowAfter").forEach((element) => {
    element.style = isSmallScreen ? "display: none" : "";
  });
}

// Выполняем настройку при загрузке страницы
adjustLayoutForScreenSize();

// Добавляем обработчик события resize
window.addEventListener("resize", adjustLayoutForScreenSize);