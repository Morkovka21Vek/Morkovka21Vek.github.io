  let result = '';
  let text = [
    ['Morkovka21Vek>', false],
    ['python', true],
    ['<br>Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>>', false],
    ['from users import Morkovka21Vek', true],
    ['<br>>>>', false],
    ['print(Morkovka21Vek.hello)', true],
    ["<br>Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u><br>>>>", false],
    ['print(Morkovka21Vek.data)', true],
    ['<br>{<br>"platform": "Windows 10"<br>"country": "Russia/Moskow"<br>"time": "UTC +03:00"<br>}<br>', false]
];

new_result = '';
text.forEach(textElem => {
    new_result+=textElem[0]
})

is_typing = false;
mode = "python";

text_new_result = [];
prefix_new_result = [];
canWriteStart = true

document.addEventListener('DOMContentLoaded', function() {

    if (this.documentElement.clientWidth < 900) {
        let text_progects_block_phones = `margin-right: auto; max-width: 700px; width: calc(100vw - 25px);`;
        let progects_img_phones = `left: 50%; width: calc(100vw - 30px); transform: translate(-50%, -2px); position: relative; border-top-left-radius: 0; border-top-right-radius: 0;`;
        document.querySelectorAll(".progects-img").forEach(progects_img => {progects_img.style = progects_img_phones;});
        document.querySelectorAll(".timelinePoint").forEach(timelinePoint => {timelinePoint.parentNode.removeChild(timelinePoint);});
        document.querySelectorAll(".text-progects-block").forEach(text_progects_block => {text_progects_block.style = text_progects_block_phones;});
        document.querySelectorAll(".timelineArrow").forEach(timelineArrow => {timelineArrow.parentNode.removeChild(timelineArrow);});
        document.querySelectorAll(".timelineArrowAfter").forEach(timelineArrowAfter => {timelineArrowAfter.parentNode.removeChild(timelineArrowAfter);});
    }

    // const menuButton = document.querySelector(".menuButton");
    // menuButton.addEventListener("click", function() {
    //     menuButton.classList.toggle("active");
    // });

    let progectTrigger = document.querySelector('.MoveConsoleTrigger');
    let Console = document.querySelector('.console');
    let bottomConsol = document.querySelector('.bottomConsol');
 
    function checkTriggerProgectsVisibility() {
        let windowHeight = window.innerHeight;

        let progectTriggerPosition = progectTrigger.getBoundingClientRect().top;
        if (progectTriggerPosition < windowHeight - 100) {
            // bottomConsol.style.visibility = "visible"
            bottomConsol.style.transform = "translateY(0)";
            bottomConsol.style.opacity = "1";
            Console.style.opacity = "0";
            bottomConsol.style.bottom = "0";
            if (mode == "python") {
                prefix_new_result.push(">>>")
                text_new_result.push("quit()");
                if (is_typing == false) {
                    is_typing = true;
                    typeLineProgects();
                }
                mode = "cmd"
            }
        } else {
            bottomConsol.style.transform = "translateY(-150%)";
            bottomConsol.style.opacity = "0";
            Console.style.opacity = "1";
            // bottomConsol.style.visibility = "hidden"
        }
    }
 
    checkTriggerProgectsVisibility();

    const blocks = document.querySelectorAll('.progects-block');
 
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
            if (block.className.indexOf('opened') == -1){
                if (blockPosition < windowHeight - 350) {
                    canWriteStart = false
                    block.style.opacity = "1";
                    block.style.transform = "translateY(0)";
                    prefix_new_result.push("Morkovka21Vek>")
                    text_new_result.push("git clone https://github.com/Morkovka21Vek/"+block.id+".git");
                    if (is_typing == false) {
                        is_typing = true;
                        typeLineProgects();
                    }
                    block.className = block.className+" opened";
                }
            }
        });
    }
 
    checkBlocksVisibility();

    const block = document.querySelector('.selection-online-demos');
    function checkDemoVisibility() {
        let windowHeight = window.innerHeight;
        if (block.className.indexOf('opened') == -1){
            let blockPosition = block.getBoundingClientRect().top;
            if (blockPosition < windowHeight - 350) {
                block.style.opacity = "1";
                prefix_new_result.push("Morkovka21Vek>")
                text_new_result.push("git clone https://github.com/Morkovka21Vek/morkovka21vek.github.io.git");
                if (is_typing == false) {
                    is_typing = true;
                    typeLineProgects();
                }
                block.className = block.className+" opened";
            }
        }
    }
 
    checkDemoVisibility();

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
        checkTriggerProgectsVisibility();
        checkDemoVisibility();
    });
    let imgs = document.querySelectorAll('.progects-img');
    var date = new Date();
    imgs.forEach(img => {
        // var Img_Link = img.src.format(String(date.getFullYear())+date.getMonth()+date.getDate()+date.getHours());
        var Img_Link = "https://opengraph.githubassets.com/" + String(date.getFullYear())+date.getMonth()+date.getDate()+date.getHours() + "/Morkovka21Vek/" + img.parentElement.id;
        console.log(Img_Link)
        img.setAttribute("src", Img_Link);
    })

    let lastCommitsH = document.querySelectorAll('.progects-last-commit');
    lastCommitsH.forEach(myH => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `https://api.github.com/repos/Morkovka21Vek/${myH.parentElement.parentElement.id}/branches/main`);
        xhr.send();
        xhr.onload = function() {
            if (xhr.status == 200) {
                var json = JSON.parse(xhr.response);
                var commitDate = String(json.commit.commit.committer.date);
                console.log(commitDate);
                var splitCommitDate = commitDate.split('-');
                var rightCommitDate = String(splitCommitDate[2]).split('T')[0] +'.'+ String(splitCommitDate[1]) +'.'+ splitCommitDate[0];
                var LastCommitDateOut = myH.id + rightCommitDate;
                console.log(LastCommitDateOut);
                myH.innerHTML = LastCommitDateOut;
        }
          };
          
        xhr.onerror = function() {
        console.log('Connection error');
        };
    })

    let line = 0;
    let count = 0;
    function typeLine() {
        let interval = setTimeout(
        () => {
            if (canWriteStart === false){
                return true
            }
            if (text[line][1] === true){
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
            document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
                consolePtext.innerHTML = result;
                consolePtext.parentElement.scrollTop = consolePtext.parentElement.scrollHeight;
            })
            if (line === text.length) {
                clearTimeout(interval);
                return true;
            }
            typeLine();
        }, 25);
        }
        setTimeout(() => { typeLine(); }, 3500);

    let typeLineProgectsCount = 0;
    let my_new_string = null;
    function typeLineProgects() {
        let interval = setTimeout(
        () => {
        if (my_new_string == null) {
            my_new_string = text_new_result.shift();
            new_result += prefix_new_result.shift();
        }
        new_result += my_new_string[typeLineProgectsCount];
        document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
            consolePtext.innerHTML = new_result;
            consolePtext.parentElement.scrollTop = consolePtext.parentElement.scrollHeight;
        })
        typeLineProgectsCount++;
        if (typeLineProgectsCount >= my_new_string.length) {
            typeLineProgectsCount = 0;
            new_result += "<br>";
            document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
                consolePtext.innerHTML = new_result;
                consolePtext.parentElement.scrollTop = consolePtext.parentElement.scrollHeight;
            })
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
        typeLineProgects();
            }, 25)
        }
});
