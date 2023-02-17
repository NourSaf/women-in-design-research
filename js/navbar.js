const navbar = document.querySelector(".leftnav");
const navbar2 = document.querySelector(".rightnav");

navbar2.addEventListener("click", () => {
        for (let i = 0; i < navbar.length; i++){
            navbar2.style.textDecoration = "none";
            console.log(i);

        }
    
        navbar2.style.textDecoration = "underline";
        
    })

    // navbar2.addEventListener("click", () => {
    //     for (let e = 0; e < navbar.length; e++){
    //         console.log(e);
    //         navbar2[e].classList.add = "active";

    //     }
    //     navbar2[e].classList.remove = "active";
        
    // })

