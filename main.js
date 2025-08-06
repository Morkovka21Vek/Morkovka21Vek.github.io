import { Terminal } from "./js/terminal.js";

document.addEventListener("DOMContentLoaded", function () {
  // Определяем язык браузера
  const userLang = navigator.language || navigator.userLanguage;
  const isRussian = userLang.startsWith("ru");

  // Показываем/скрываем элементы в зависимости от языка
  document.querySelectorAll(".lang-en").forEach((el) => {
    if (isRussian) {
      el.style.display = "none";
    }
  });

  document.querySelectorAll(".lang-ru").forEach((el) => {
    if (!isRussian) {
      el.style.display = "none";
    }
  });

  const projectsBlocks = document.querySelectorAll(".projects-block");
  const blocks = [
    ...projectsBlocks,
    document.querySelector(".selection-pages"),
  ];

  const terminal = new Terminal(document.querySelector(".terminal"));

  /**
   * Проверяет видимость блоков на экране и обновляет их состояние.
   */
  function checkBlocksVisibility() {
    const windowHeight = window.innerHeight;

    blocks.forEach((block) => {
      const blockPosition = block.getBoundingClientRect().top;

      if (!block.classList.contains("opened-block") && blockPosition < windowHeight) {
        terminal.printLineForce("morkovka21vek:~$ ");
        terminal.printLine(`git clone https://github.com/Morkovka21Vek/${block.id}.git`);
        terminal.printLineForce("<br>");
        block.classList.add("opened-block");
      }
    });
  }

  /**
   * Инициализирует терминал с приветственным сообщением.
   */
  function initializeTerminal() {
    const terminalMessages = [
      { type: "force", content: "morkovka21vek:~$ " },
      { type: "normal", content: "python" },
      { type: "force", content: "<br>Python 3.11.1 <br>>>> " },
      { type: "normal", content: "from users import Morkovka21Vek" },
      { type: "force", content: "<br>>>> " },
      { type: "normal", content: "print(Morkovka21Vek.hello)" },
      {
        type: "force",
        content: "<br>Hi, I'm <u class='terminalLinkMorkovka21Vek'>Morkovka21Vek</u><br>>>> ",
      },
      { type: "normal", content: "print(Morkovka21Vek.data)" },
      {
        type: "force",
        content: '<br>{<br>"platform": "Ubuntu"<br>"country": "Russia/Moscow"<br>"time": "UTC +03:00"<br>}<br>',
      },
    ];

    terminalMessages.forEach((message, index) => {
      setTimeout(() => {
        if (message.type === "force") {
          terminal.printLineForce(message.content);
        } else {
          terminal.printLine(message.content);
        }
      }, index * 500); // Задержка между сообщениями
    });
  }

  // Добавляем обработчик прокрутки для проверки видимости блоков
  window.addEventListener("scroll", checkBlocksVisibility);

  // Инициализируем терминал с задержкой
  setTimeout(initializeTerminal, 3500);
});
