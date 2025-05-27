import { Terminal } from "./js/terminal.js";

document.addEventListener("DOMContentLoaded", function () {
  // let projectTrigger = document.querySelector(".MoveTerminalTrigger");

  // function checkTriggerProjectsVisibility() {
  //   let windowHeight = window.innerHeight;

  //   let projectTriggerPosition = projectTrigger.getBoundingClientRect().top;
  //   if (projectTriggerPosition < windowHeight - 100) {

  // }

  const projectsBlocks = document.querySelectorAll(".projects-block");
  const blocks = [
    ...projectsBlocks,
    document.querySelector(".selection-pages"),
  ];

  function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach((block) => {
      let blockPosition = block.getBoundingClientRect().top;
      if (block.className.indexOf("opened-block") === -1) {
        if (blockPosition < windowHeight) {
          // - 350) {
          terminal.printLineForce("morkovka21vek:~$ ");
          terminal.printLine(
            "git clone https://github.com/Morkovka21Vek/" + block.id + ".git"
          );
          terminal.printLineForce("<br>");
          block.className = block.className + " opened-block";
        }
      }
    });
  }

  window.addEventListener("scroll", function () {
    checkBlocksVisibility();
  });

  let terminal = new Terminal(document.querySelector(".terminal"));

  setTimeout(() => {
    terminal.printLineForce("morkovka21vek:~$ ");
    terminal.printLine("python");
    terminal.printLineForce("<br>Python 3.11.1 <br>>>> ");
    terminal.printLine("from users import Morkovka21Vek");
    terminal.printLineForce("<br>>>> ");
    terminal.printLine("print(Morkovka21Vek.hello)");
    terminal.printLineForce(
      "<br>Hi, I'm <u class='terminalLinkMorkovka21Vek'>Morkovka21Vek</u><br>>>> "
    );
    terminal.printLine("print(Morkovka21Vek.data)");
    terminal.printLineForce(
      '<br>{<br>"platform": "Ubuntu (Windows 10)"<br>"country": "Russia/Moscow"<br>"time": "UTC +03:00"<br>}<br>'
    );
  }, 3500);
});
