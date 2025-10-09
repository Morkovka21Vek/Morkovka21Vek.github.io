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

  for (const img of document.querySelectorAll(".projects-img")) {
    img.style = isSmallScreen ? projectsImgPhones : "";
  }

  for (const block of document.querySelectorAll(".text-projects-block")) {
    block.style = isSmallScreen ? textProjectsBlockPhones : "";
  }

  for (const element of document.querySelectorAll(".timelinePoint, .timelineArrow, .timelineArrowAfter")) {
    element.style = isSmallScreen ? "display: none" : "";
  }
}

// Выполняем настройку при загрузке страницы
adjustLayoutForScreenSize();

// Добавляем обработчик события resize
window.addEventListener("resize", adjustLayoutForScreenSize);
