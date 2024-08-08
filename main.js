  let result = '???> ';
  let text = [
    'python',
    'Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.',
    'from users import Morkovka21Vek',
    'print(Morkovka21Vek.hello)',
    "Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u>",
    'print(Morkovka21Vek.data)',
];

new_result = '???> python<br>Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>>from users import Morkovka21Vek<br>print(Morkovka21Vek.hello)<br>'+"Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u><br>"+'print(Morkovka21Vek.data)<br>{<br>"platform": "Windows 10"<br>"country": "Russia/Moskow"<br>"time": "UTC +03:00"<br>}<br>';

is_typing = false;
mode = "python";

text_new_result = [];
prefix_new_result = [];

// new_result = '???> python<br>Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>>from users import Morkovka21Vek<br>print(Morkovka21Vek.hello)<br>'+"Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u><br>"+'print(Morkovka21Vek.data)<br>{<br>"platform": "Windows 10"<br>"country": "Russia/Moskow"<br>"time": "UTC +03:00"<br>}<br>'

document.addEventListener('DOMContentLoaded', function() {

    if (this.documentElement.clientWidth < 900) {
        const text_progects_blocks = document.querySelectorAll(".text-progects-block");
        const timelineArrowAfters = document.querySelectorAll(".timelineArrowAfter");
        const progects_imgs = document.querySelectorAll(".progects-img");
        const timelineArrows = document.querySelectorAll(".timelineArrow");
        const timelinePoints = document.querySelectorAll(".timelinePoint");
        let delBorder = `border: 0 solid transparent;`;
        let text_progects_block_phones = `margin-right: auto;\nmax-width: 700px;\nwidth: calc(100vw - 25px);`;
        let progects_img_phones = `left: 50%; width: calc(100vw - 30px); transform: translate(-50%, -2px); position: relative; border-top-left-radius: 0; border-top-right-radius: 0;`;
        progects_imgs.forEach(progects_img => {progects_img.style = progects_img_phones;});
        timelinePoints.forEach(timelinePoint => {timelinePoint.parentNode.removeChild(timelinePoint);});
        text_progects_blocks.forEach(text_progects_block => {text_progects_block.style = text_progects_block_phones;});
        timelineArrows.forEach(timelineArrow => {timelineArrow.parentNode.removeChild(timelineArrow);});
        timelineArrowAfters.forEach(timelineArrowAfter => {timelineArrowAfter.parentNode.removeChild(timelineArrowAfter);});
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
 
        /* position: fixed; */
        let progectTriggerPosition = progectTrigger.getBoundingClientRect().top;
        if (progectTriggerPosition < windowHeight - 100) {
            // bottomConsol.style.display = "block"
            bottomConsol.style.visibility = "visible"
            bottomConsol.style.transform = "translateY(0)";
            bottomConsol.style.opacity = "1";
            Console.style.opacity = "0";

            // bottomConsol.style.position = "fixed";
            // bottomConsol.style.top = "auto";
            bottomConsol.style.bottom = "0";
            // Console.style.transform = "translate(-50%, "+(2000 - bottomConsolPosition)+"px)";
            // Console.style.bottom = "0";
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
            // bottomConsol.style.display = "none"
            bottomConsol.style.transform = "translateY(-150%)";
            bottomConsol.style.opacity = "0";
            Console.style.opacity = "1";
            bottomConsol.style.visibility = "hidden"
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
                    text = []
                    block.style.opacity = "1";
                    block.style.transform = "translateY(0)";
                    // typeLineProgects("img.show(imgs/"+block.id+")");
                    prefix_new_result.push("???>")
                    text_new_result.push("git clone https://github.com/Morkovka21Vek/"+block.id+".git");
                    // console.log(text_new_result);
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
                // block.style.transform = "translateY(0)";
                prefix_new_result.push("???>")
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

    // addLink = (url) => ``
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
        xhr.open("GET", `https://api.github.com/repos/Morkovka21Vek/${myH.id}/branches/main`);
        xhr.send();
        // img.setAttribute("src", Img_Link);
        xhr.onload = function() {
            if (xhr.status == 200) {
                var json = JSON.parse(xhr.response);
                var commitDate = String(json.commit.commit.committer.date);
                console.log(commitDate);
                var splitCommitDate = commitDate.split('-');
                var rightCommitDate = String(splitCommitDate[2]).split('T')[0] +'.'+ String(splitCommitDate[1]) +'.'+ splitCommitDate[0];
                var LastCommitDateOut = "Last commit: "+rightCommitDate;
                console.log(LastCommitDateOut);
                // myH.setAttribute("innerHTML", LastCommitDateOut);
                myH.innerHTML = LastCommitDateOut;
        }
          };
          
        xhr.onerror = function() {
        console.log('Connection error');
        };
    })

    let line = 0;
    let count = 0;
    // let result = 'Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>> ';
    function typeLine() {
        if (text == []){
            return true
        }
        let interval = setTimeout(
        () => {
        if (text.length == 0) return true
        result += text[line][count];
        // alert(document.getElementById('pre123'))
        document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
            consolePtext.innerHTML = result;// + '|';
            // consolePtext.scrollTop = consolePtext.scrollHeight;
        })
        document.querySelectorAll('.consoleText').forEach(consoletext => {
            consoletext.scrollTop = consoletext.scrollHeight;
        })
        count++;
        if (count >= text[line].length) {
            count = 0;
            result += "<br>";
            line++;
        
        
        if (line == 1 || line == 4) {
            result += text[line];
            result += "<br>";
            line++;
        }

        if (line == 2 || line == 3 || line == 5) {
            result += ">>> ";
        }

        if (line == 6) {
            setTimeout(() => {
                result += '{<br>"platform": "Windows 10"<br>"country": "Russia/Moskow"<br>"time": "UTC +03:00"<br>}'
                document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
                    consolePtext.innerHTML = result;// + '|';
                    // consolePtext.scrollTop = consolePtext.scrollHeight;
                })
                document.querySelectorAll('.consoleText').forEach(consoletext => {
                    consoletext.scrollTop = consoletext.scrollHeight;
                })
                return true;
            }, 500);
        }

        if (line == text.length) {
            clearTimeout(interval);
            // document.getElementById('consoleTextP').innerHTML = result;
            return true;
        }
        }
        typeLine();
            }, 25)
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
        })
        document.querySelectorAll('.consoleText').forEach(consoletext => {
            consoletext.scrollTop = consoletext.scrollHeight;
        })
        typeLineProgectsCount++;
        if (typeLineProgectsCount >= my_new_string.length) {
            typeLineProgectsCount = 0;
            new_result += "<br>";
            document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
                consolePtext.innerHTML = new_result;
            })
            document.querySelectorAll('.consoleText').forEach(consoletext => {
                consoletext.scrollTop = consoletext.scrollHeight;
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
