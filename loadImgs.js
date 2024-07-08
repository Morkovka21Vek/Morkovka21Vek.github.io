String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };

document.addEventListener('DOMContentLoaded', function() {
    let imgs = document.querySelectorAll('.progects-img');
    var date = new Date();
    imgs.forEach(img => {
        const Img_Link = img.src.format(date.getFullYear()+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes())
        // const Img_Link = "https://opengraph.githubassets.com/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes()+"/Morkovka21Vek/AI_Font_Generator"
        console.log(Img_Link)
        img.setAttribute("src", Img_Link);
    })

});


// const AI_Font_Generator_Img = document.getElementById('AI_Font_Generator_Img');
// var date = new Date();
// alert(AI_Font_Generator_Img_Link)
// const AI_Font_Generator_Img_Link = "https://opengraph.githubassets.com/"+date.getFullYear()+date.getMonth()+date.getDate()+date.getHours()+date.getMinutes()+"/Morkovka21Vek/AI_Font_Generator"
// // alert(strLink)
// AI_Font_Generator_Img.setAttribute("src", AI_Font_Generator_Img_Link);