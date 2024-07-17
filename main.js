String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/any_hash_number/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };

  let result = '???> ';
  let text = [
    'python',
    'Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.',
    'from users import Morkovka21Vek',
    'print(Morkovka21Vek.hello)',
    "Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u>",
    'print(Morkovka21Vek.data)',
];

new_result = '???> python<br>Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>>from users import Morkovka21Vek<br>print(Morkovka21Vek.hello)<br>'+"Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u><br>"+'print(Morkovka21Vek.data)<br>{<br>"platform": "Windows 10"<br>"country": "Russia/Moskow"<br>"time": "UTC +03:00"<br>}<br>'

is_typing = false
mode = "python"
// new_result = '???> python<br>Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>>from users import Morkovka21Vek<br>print(Morkovka21Vek.hello)<br>'+"Hi, I'm <u class='consoleLinkMorkovka21Vek'>Morkovka21Vek</u><br>"+'print(Morkovka21Vek.data)<br>{<br>"platform": "Windows 10"<br>"country": "Russia/Moskow"<br>"time": "UTC +03:00"<br>}<br>'

document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.progects-block');
 
    // alert(blocks)
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
            if (block.id.indexOf('opened') == -1 && is_typing == false){
                if (blockPosition < windowHeight - 350) {
                    text = []
                    block.style.opacity = "1";
                    block.style.transform = "translateY(0)";
                    // typeLineProgects("img.show(imgs/"+block.id+")");
                    is_typing = true
                    typeLineProgects("git clone https://github.com/Morkovka21Vek/"+block.id+".git");
                    block.id = block.id+"-opened";
                }
            }
        });
    }
 
    checkBlocksVisibility();

    let progectTrigger = document.querySelector('.MoveConsoleTrigger');
    let Console = document.querySelector('.console');
    let bottomConsol = document.querySelector('.bottomConsol');
 
    function checkTriggerProgectsVisibility() {
        let windowHeight = window.innerHeight;
 
        /* position: fixed; */
        let progectTriggerPosition = progectTrigger.getBoundingClientRect().top;
        if (progectTriggerPosition < windowHeight - 100) {
            bottomConsol.style.transform = "translateY(0)";
            bottomConsol.style.opacity = "1";
            Console.style.opacity = "0";

            // bottomConsol.style.position = "fixed";
            // bottomConsol.style.top = "auto";
            bottomConsol.style.bottom = "0";
            // Console.style.transform = "translate(-50%, "+(2000 - bottomConsolPosition)+"px)";
            // Console.style.bottom = "0";
            if (mode == "python") {
                is_typing = true
                typeLineProgects("quit()");
                mode = "cmd"
            }
        } else {
            bottomConsol.style.transform = "translateY(-150%)";
            bottomConsol.style.opacity = "0";
            Console.style.opacity = "1";
        }
    }
 
    checkTriggerProgectsVisibility();

    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
        checkTriggerProgectsVisibility();
    });

    // addLink = (url) => ``
    let imgs = document.querySelectorAll('.progects-img');
    var date = new Date();
    imgs.forEach(img => {
        var Img_Link = img.src.format(String(date.getFullYear())+date.getMonth()+date.getDate()+date.getHours())
        // alert(String(date.getFullYear())+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes())
        // alert(Img_Link)
        // const Img_Link = "https://opengraph.githubassets.com/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes()+"/Morkovka21Vek/AI_Font_Generator"
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
    
    // <div class='consoleLinkMorkovka21VekDiv' onmouseover='changeItem()' onmouseout='rechangeItem()'></div>
    // <div id='consoleLinkMorkovka21VekDiv' onmouseover='changeItem()' onmouseout='rechangeItem()'></div>
    let line = 0;
    let count = 0;
    // let result = 'Python 3.11.1 (tags/v3.11.1:a7a450f, Dec  6 2022, 19:58:39) [MSC v.1934 64 bit (AMD64)] on win32<br>Type "help", "copyright", "credits" or "license" for more information.<br>>>> ';
    function typeLine() {
        if (text == []){
            return true
        }
        let interval = setTimeout(
        () => {
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
    function typeLineProgects(text_new_result) {
        let interval = setTimeout(
        () => {
        new_result += text_new_result[typeLineProgectsCount];
        document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
            consolePtext.innerHTML = new_result;
        })
        document.querySelectorAll('.consoleText').forEach(consoletext => {
            consoletext.scrollTop = consoletext.scrollHeight;
        })
        typeLineProgectsCount++;
        if (typeLineProgectsCount >= text_new_result.length) {
            typeLineProgectsCount = 0;
            new_result += "<br>";
            document.querySelectorAll('.consoleTextP').forEach(consolePtext => {
                consolePtext.innerHTML = new_result;
            })
            document.querySelectorAll('.consoleText').forEach(consoletext => {
                consoletext.scrollTop = consoletext.scrollHeight;
            })
            clearTimeout(interval);
            is_typing = false
            return true;
        }
        typeLineProgects(text_new_result);
            }, 25)
        }
});

// function changeItem() {
//     document.getElementById('consoleLinkMorkovka21VekDiv').style.display = "block";
//     // alert("hello")
// }
// function rechangeItem() {
//     document.getElementById('consoleLinkMorkovka21VekDiv').style.display = "none";
// }

// const AI_Font_Generator_Img = document.getElementById('AI_Font_Generator_Img');
// var date = new Date();
// alert(AI_Font_Generator_Img_Link)
// const AI_Font_Generator_Img_Link = "https://opengraph.githubassets.com/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes()+"/Morkovka21Vek/AI_Font_Generator"
// // alert(strLink)
// AI_Font_Generator_Img.setAttribute("src", AI_Font_Generator_Img_Link);