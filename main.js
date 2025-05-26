let result = "";
let text = [
  ["morkovka21vek:~$ ", false],
  ["python", true],
  ["<br>Python 3.11.1 <br>>>> ", false],
  ["from users import Morkovka21Vek", true],
  ["<br>>>> ", false],
  ["print(Morkovka21Vek.hello)", true],
  [
    "<br>Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u><br>>>> ",
    false,
  ],
  ["print(Morkovka21Vek.data)", true],
  [
    '<br>{<br>"platform": "Ubuntu (Windows 10)"<br>"country": "Russia/Moscow"<br>"time": "UTC +03:00"<br>}<br>',
    false,
  ],
];

let new_result = "";
text.forEach((textElem) => {
  new_result += textElem[0];
});

let is_typing = false;
let mode = "python";

let text_new_result = [];
let prefix_new_result = [];
let canWriteStart = true;

document.addEventListener("DOMContentLoaded", function () {
  if (this.documentElement.clientWidth < 900) {
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

  let projectTrigger = document.querySelector(".MoveConsoleTrigger");
  let Console = document.querySelector(".console");

  function checkTriggerProjectsVisibility() {
    let windowHeight = window.innerHeight;

    let projectTriggerPosition = projectTrigger.getBoundingClientRect().top;
    if (projectTriggerPosition < windowHeight - 100) {
      Console.style.opacity = "0";
      if (mode == "python") {
        prefix_new_result.push(">>>");
        text_new_result.push("quit()");
        if (!is_typing) {
          is_typing = true;
          typeLineProjectsCount();
        }
        mode = "cmd";
      }
    } else {
      Console.style.opacity = "1";
    }
  }

  checkTriggerProjectsVisibility();

  const blocks = document.querySelectorAll(".projects-block");

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach((block) => {
      let blockPosition = block.getBoundingClientRect().top;
      if (block.className.indexOf("opened") == -1) {
        if (blockPosition < windowHeight - 350) {
          canWriteStart = false;
          block.style.opacity = "1";
          block.style.transform = "translateY(0)";
          prefix_new_result.push("morkovka21vek:~$ ");
          text_new_result.push(
            "git clone https://github.com/Morkovka21Vek/" + block.id + ".git"
          );
          if (!is_typing) {
            is_typing = true;
            typeLineProjectsCount();
          }
          block.className = block.className + " opened";
        }
      }
    });
  }

  checkBlocksVisibility();

  const block = document.querySelector(".selection-pages");
  function checkDemoVisibility() {
    let windowHeight = window.innerHeight;
    if (block.className.indexOf("opened") == -1) {
      let blockPosition = block.getBoundingClientRect().top;
      if (blockPosition < windowHeight - 350) {
        block.style.opacity = "1";
        prefix_new_result.push("morkovka21vek:~$ ");
        text_new_result.push(
          "git clone https://github.com/Morkovka21Vek/morkovka21vek.github.io.git"
        );
        if (!is_typing) {
          is_typing = true;
          typeLineProjectsCount();
        }
        block.className = block.className + " opened";
      }
    }
  }

  checkDemoVisibility();

  window.addEventListener("scroll", function () {
    checkBlocksVisibility();
    checkTriggerProjectsVisibility();
    checkDemoVisibility();
  });
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
    console.log(Img_Link);
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
        console.log(commitDate);
        let splitCommitDate = commitDate.split("-");
        let rightCommitDate =
          String(splitCommitDate[2]).split("T")[0] +
          "." +
          String(splitCommitDate[1]) +
          "." +
          splitCommitDate[0];
        let LastCommitDateOut = myH.id + rightCommitDate;
        console.log(LastCommitDateOut);
        myH.innerHTML = LastCommitDateOut;
      }
    };

    xhr.onerror = function () {
      console.log("Connection error");
    };
  });

  let line = 0;
  let count = 0;
  function typeLine() {
    let interval = setTimeout(() => {
      if (canWriteStart === false) {
        return true;
      }
      if (text[line][1] === true) {
        result += text[line][0][count];
        count++;
        if (count >= text[line][0].length) {
          count = 0;
          line++;
        }
      } else {
        result += text[line][0];
        line++;
      }
      document.querySelectorAll(".consoleText").forEach((consoleText) => {
        let consoleText_p = consoleText.querySelector("p");
        consoleText_p.innerHTML = result;
        consoleText_p.parentElement.scrollTop =
        consoleText_p.parentElement.scrollHeight;
      });
      if (line === text.length) {
        clearTimeout(interval);
        return true;
      }
      typeLine();
    }, 25);
  }
  setTimeout(() => {
    typeLine();
  }, 3500);

  let typeLineProjectsCountCount = 0;
  let my_new_string = null;
  function typeLineProjectsCount() {
    let interval = setTimeout(() => {
      if (my_new_string == null) {
        my_new_string = text_new_result.shift();
        new_result += prefix_new_result.shift();
      }
      new_result += my_new_string[typeLineProjectsCountCount];
      document.querySelectorAll(".consoleText").forEach((consoleText) => {
        let consoleText_p = consoleText.querySelector("p");
        consoleText_p.innerHTML = new_result;
        consoleText_p.parentElement.scrollTop =
        consoleText_p.parentElement.scrollHeight;
      });
      typeLineProjectsCountCount++;
      if (typeLineProjectsCountCount >= my_new_string.length) {
        typeLineProjectsCountCount = 0;
        new_result += "<br>";
        document.querySelectorAll(".consoleText").forEach((consoleText) => {
          let consoleText_p = consoleText.querySelector("p");
          consoleText_p.innerHTML = new_result;
          consoleText_p.parentElement.scrollTop =
          consoleText_p.parentElement.scrollHeight;
        });
        if (text_new_result.length == 0) {
          clearTimeout(interval);
          is_typing = false;
          my_new_string = null;
          return true;
        } else {
          my_new_string = text_new_result.shift();
          new_result += prefix_new_result.shift();
        }
      }
      typeLineProjectsCountCount();
    }, 25);
  }
});
