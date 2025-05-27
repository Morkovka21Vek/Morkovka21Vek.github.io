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

const imgs = document.querySelectorAll(".projects-img");
const date = new Date();
imgs.forEach((img) => {
  const imgLink = `https://opengraph.githubassets.com/${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}/Morkovka21Vek/${img.parentElement.id}`;
  img.setAttribute("src", imgLink);
});

document.querySelectorAll(".projects-last-commit").forEach((commitElement) => {
  const repoId = commitElement.parentElement.parentElement.id;

  fetch(`https://api.github.com/repos/Morkovka21Vek/${repoId}/branches/main`)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch commit data");
      return response.json();
    })
    .then((data) => {
      const commitDate = new Date(data.commit.commit.committer.date);
      const formattedDate = commitDate.toLocaleDateString("ru-RU");
      commitElement.textContent = `Last Commit: ${formattedDate}`;
    })
    .catch((error) => {
      console.error("Error fetching commit data:", error);
      commitElement.textContent = "Error fetching commit data";
    });
});
