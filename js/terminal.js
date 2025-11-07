export class Terminal {
  constructor(element) {
    this.element = element;
    this.lineList = [];
    this.typing = false;
    this.mode = "python";
  }

  printLine(content) {
    this.lineList.push({ content, type: "normal" });
    if (!this.typing) this.typeText();
  }

  printLineForce(content) {
    this.lineList.push({ content, type: "force" });
    if (!this.typing) this.typeText();
  }

  typeText() {
    if (this.lineList.length === 0) {
      this.typing = false;
      return;
    }

    this.typing = true;
    const { content, type } = this.lineList.shift();

    if (type === "force") {
      this.appendContent(content);
      this.typeText();
    } else {
      let index = 0;
      const interval = setInterval(() => {
        if (index < content.length) {
          this.appendContent(content[index]);
          index++;
        } else {
          clearInterval(interval);
          this.typeText();
        }
      }, 25);
    }
  }

  appendContent(content) {
    const terminalText = this.element.querySelector(".terminalText");
    terminalText.querySelector("p").innerHTML += content;
    terminalText.scrollTop = terminalText.scrollHeight;
  }
}

function updateClock() {
  const now = new Date();
  const utc3Time = new Date(
    now.getTime() + (3 * 60 + now.getTimezoneOffset()) * 60000,
  );

  const hours = String(utc3Time.getHours()).padStart(2, "0");
  const minutes = String(utc3Time.getMinutes()).padStart(2, "0");

  for (const el of document.querySelectorAll("#clock")) {
    el.textContent = `${hours}:${minutes}`;
  }
}

updateClock();
setInterval(updateClock, 6000);
