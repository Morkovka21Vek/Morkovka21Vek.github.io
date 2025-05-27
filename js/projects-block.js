if (window.innerWidth < 900) {
  let text_projects_block_phones = `margin-right: auto; max-width: 700px; width: calc(100vw - 25px);`;
  let projects_img_phones = `left: 50%; width: calc(100vw - 30px); transform: translate(-50%, -2px); position: relative;`;
  document.querySelectorAll(".projects-img").forEach((projects_img) => {
    projects_img.style = projects_img_phones;
  });
  document.querySelectorAll(".timelinePoint").forEach((timelinePoint) => {
    timelinePoint.parentNode.removeChild(timelinePoint);
  });
  document
    .querySelectorAll(".text-projects-block")
    .forEach((text_projects_block) => {
      text_projects_block.style = text_projects_block_phones;
    });
  document.querySelectorAll(".timelineArrow").forEach((timelineArrow) => {
    timelineArrow.parentNode.removeChild(timelineArrow);
  });
  document
    .querySelectorAll(".timelineArrowAfter")
    .forEach((timelineArrowAfter) => {
      timelineArrowAfter.parentNode.removeChild(timelineArrowAfter);
    });
}

let imgs = document.querySelectorAll(".projects-img");
let date = new Date();
imgs.forEach((img) => {
  let Img_Link =
    "https://opengraph.githubassets.com/" +
    String(date.getFullYear()) +
    date.getMonth() +
    date.getDate() +
    date.getHours() +
    "/Morkovka21Vek/" +
    img.parentElement.id;
  img.setAttribute("src", Img_Link);
});

let lastCommitsH = document.querySelectorAll(".projects-last-commit");
lastCommitsH.forEach((myH) => {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.github.com/repos/Morkovka21Vek/${myH.parentElement.parentElement.id}/branches/main`
  );
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      let json = JSON.parse(xhr.response);
      let commitDate = String(json.commit.commit.committer.date);
      let splitCommitDate = commitDate.split("-");
      let rightCommitDate =
        String(splitCommitDate[2]).split("T")[0] +
        "." +
        String(splitCommitDate[1]) +
        "." +
        splitCommitDate[0];
      let LastCommitDateOut = myH.id + rightCommitDate;
      myH.innerHTML = LastCommitDateOut;
    }
  };
});
