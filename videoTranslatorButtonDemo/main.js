// setTimeout(() => {

function mousemoveEvent(e, curentButton) {
  videoRect = curentButton.pathToVideo.getBoundingClientRect();
  buttonRect = curentButton.getBoundingClientRect();
  let newX = e.clientX - videoRect.left - curentButton.posCursorInButton[0];
  let newY = e.clientY - videoRect.top - curentButton.posCursorInButton[1];

  if (newX < videoRect.left) newX = videoRect.left;
  else if (newX + buttonRect.width > videoRect.right)
    newX = videoRect.right - buttonRect.width;

  if (newY < videoRect.top) newY = videoRect.top;
  else if (newY + buttonRect.height > videoRect.bottom)
    newY = videoRect.bottom - buttonRect.height;

  curentButton.style.left = `${newX}px`;
  curentButton.style.top = `${newY}px`;
}

function mouseupEvent(
  e,
  curentButton,
  mousemoveEventWithButton,
  mouseupEventWithButton
) {
  document.removeEventListener("mousemove", mousemoveEventWithButton);
  document.removeEventListener("mouseup", mouseupEventWithButton);
  curentButton.posCursorInButton = [0, 0];
  console.warn("mouseUp!");
  document.body.style.cursor = "default";
}

function addButton(video) {
  let id = (Math.random() + 1).toString(36).substring(7);
  video.button_id = id;

  let button = document.createElement("button");
  button.className = "video_translator_button";
  button.innerHTML = "перевести";
  button.id = id; // (Math.random() + 1).toString(36).substring(7);
  button.pathToVideo = video;
  button.style =
    "position: fixed; background-color: #fff; padding: 10px; border: 1px solid #000; border-radius: 5px; cursor: move; color: red;";
  document.body.append(button);

  video.pathToButton = button;

  let buttonRect = button.getBoundingClientRect();
  button.posCursorInButton = [0, 0];

  let videoRect = video.getBoundingClientRect();

  button.style.left = `${videoRect.left + 10}px`;
  button.style.top = `${videoRect.top + 10}px`;

  button.addEventListener("mousedown", (e) => {
    document.body.style.cursor = "move";

    videoRect = e.target.pathToVideo.getBoundingClientRect();
    buttonRect = button.getBoundingClientRect();
    e.target.posCursorInButton = [
      e.clientX - videoRect.left - buttonRect.left,
      e.clientY - videoRect.top - buttonRect.top,
    ];

    const mousemoveEventWithButton = (event) => mousemoveEvent(event, e.target);
    document.addEventListener("mousemove", mousemoveEventWithButton);

    const mouseupEventWithButton = (event) =>
      mouseupEvent(
        event,
        e.target,
        mousemoveEventWithButton,
        mouseupEventWithButton
      );
    document.addEventListener("mouseup", mouseupEventWithButton);
  });
  return video;
}

document.querySelectorAll("video").forEach((video) => {
  video = addButton(video);
});

window.addEventListener("scroll", function () {
  // this.document.querySelectorAll(".video_translator_button").forEach((but) => {
  //   let videoRect = but.pathToVideo.getBoundingClientRect();
  //   let buttonRect = but.getBoundingClientRect();
  //   let newX = buttonRect.x;
  //   let newY = buttonRect.y;

  //   if (newX < videoRect.left) newX = videoRect.left;
  //   else if (newX + buttonRect.width > videoRect.right)
  //     newX = videoRect.right - buttonRect.width;

  //   if (newY < videoRect.top) newY = videoRect.top;
  //   else if (newY + buttonRect.height > videoRect.bottom)
  //     newY = videoRect.bottom - buttonRect.height;

  //   but.style.left = `${newX}px`;
  //   but.style.top = `${newY}px`;
  // });
  document.querySelectorAll("video").forEach((video) => {
    let videoRect = video.getBoundingClientRect();
    let buttonRect = video.pathToButton.getBoundingClientRect();
    let newX = buttonRect.x;
    let newY = buttonRect.y;

    if (newX < videoRect.left) newX = videoRect.left;
    else if (newX + buttonRect.width > videoRect.right)
      newX = videoRect.right - buttonRect.width;

    if (newY < videoRect.top) newY = videoRect.top;
    else if (newY + buttonRect.height > videoRect.bottom)
      newY = videoRect.bottom - buttonRect.height;

    video.pathToButton.style.left = `${newX}px`;
    video.pathToButton.style.top = `${newY}px`;
  });
});

const observer = new MutationObserver(() => {
  document.querySelectorAll("video").forEach((video) => {
    // if (!video.hasAttribute('button_id')) {
    if (video.button_id === undefined) {
      console.log("Add button");
      addButton(video);
    }
  });
  document.querySelectorAll(".video_translator_button").forEach((but) => {
    if (
      but.pathToVideo === undefined ||
      !document.body.contains(but.pathToVideo)
    ) {
      console.log("Delete button");
      but.parentNode.removeChild(but);
    }
  });
});

observer.observe(document, {
  childList: true,
  subtree: true,
});

// }, 5500);
