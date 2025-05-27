export class Terminal {
  constructor(element) {
    this.element = element;
    this.lineList = [];
    this.typing = false;
    this.mode = "python";
  }

  printLine(str) {
    this.lineList.push([str, true]);
    if (!this.typing) {
      this.typeText();
    }
  }

  printLineForce(str) {
    this.lineList.push([str, false]);
    if (!this.typing) {
      this.typeText();
    }
  }

  typeText() {
    this.typing = true;
    let interval = setTimeout(() => {
      if (this.lineList.length === 0) {
        clearTimeout(interval);
        this.typing = false;
        return;
      }

      if (this.lineList[0][0].length === 0) {
        this.lineList.splice(0, 1);
      } else {
        let printStr = "";
        if (this.lineList[0][1]) {
          printStr = this.lineList[0][0][0];
          this.lineList[0][0] = this.lineList[0][0].slice(1);
        } else {
          printStr = this.lineList[0][0];
          this.lineList.splice(0, 1);
        }

        this.element.querySelector("p").innerHTML += printStr;
        this.element.querySelector(".terminalText").scrollTop =
          this.element.querySelector(".terminalText").scrollHeight;
      }

      this.typeText();
    }, 25);
  }
}
