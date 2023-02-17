let imglist = [
    {
        src : "./Blurybackground/01_Blurr_Ada_Lovelace",
    },

    {
        src : "./Blurybackground/02_Blurr_Alice_Urbach",
    },
]

let img = document.querySelector(".mainbg");

function createimg(){
    for (i = 0; i < imglist.length; i++){
    
        let imgs = document.createElement("img");
        imgs.classList.add("img");
        imgs.src = `${myslides[i].src + ".png"}`;
        img.appendChild(imgs);
    }
}

createimg();