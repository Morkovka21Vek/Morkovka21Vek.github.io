String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/any_hash_number/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };

document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.progects-block');
 
    // alert(blocks)
    function checkBlocksVisibility() {
        let windowHeight = window.innerHeight;
 
        blocks.forEach(block => {
            let blockPosition = block.getBoundingClientRect().top;
 
            if (blockPosition < windowHeight - 200) {
                block.style.opacity = "1";
                block.style.transform = "translateY(0)";
            }
        });
    }
 
    checkBlocksVisibility();
 
    window.addEventListener('scroll', function() {
        checkBlocksVisibility();
    });


    // addLink = (url) => ``
    let imgs = document.querySelectorAll('.progects-img');
    var date = new Date();
    imgs.forEach(img => {
        var Img_Link = img.src.format(String(date.getFullYear())+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes())
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
                myH.innerHTML = LastCommitDateOut
        }
          };
          
        xhr.onerror = function() {
        console.log('Connection error');
        };
    })
    
});


// const AI_Font_Generator_Img = document.getElementById('AI_Font_Generator_Img');
// var date = new Date();
// alert(AI_Font_Generator_Img_Link)
// const AI_Font_Generator_Img_Link = "https://opengraph.githubassets.com/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes()+"/Morkovka21Vek/AI_Font_Generator"
// // alert(strLink)
// AI_Font_Generator_Img.setAttribute("src", AI_Font_Generator_Img_Link);