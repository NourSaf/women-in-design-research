let designers = 
[
  {
    "name":"Ada Lovelace",
    "time":"Historical",
    "mainfield":"Science",
    "specification":"Technology",
  },

  {
    "name":"Alice Urbach",
    "time":"Contemporary",
    "mainfield":"Documentation",
    "specification":"Visual Systems",
  },
 
  {
    "name":"Anna Atkins",
    "time":"Historical",
    "mainfield":"Documentation",
    "specification":"Botany",
  },

  {
    "name":"Deborah Sussman",
    "time":"Contemporary",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Emma Willard",
    "time":"Historical",
    "mainfield":"Design",
    "specification": "Cartography",
  },

];


let designerList = designers;
// Map
// const specificationUniqueList = designers.map(function(e){
//   return e.specifications
// });
const specificationUniqueList = [...(new Set(designers.map((e) => e.specification)))];
console.log(specificationUniqueList)

const itemWrapper = document.querySelector("#itemWrapper");
const filterBtnContainer = document.querySelector("#filterbtn");

//all btn
const buttonAll = document.createElement("button");
buttonAll.innerText = "all";


buttonAll.addEventListener("click", (e) => {
  designerList = designers;
  onUnCliked()
  buttonAll.classList.remove("unCliked");
  buttonAll.classList.add("cliked");
  itemBoxfuction()
})
filterBtnContainer.appendChild(buttonAll);


for(let i = 0; i < specificationUniqueList.length; i++){
  const button = document.createElement("button");
  button.innerText = specificationUniqueList[i];
  button.classList.add("filterbtnI")

  button.addEventListener("click",(e) => {
    onUnCliked();
    //all btn reset
    buttonAll.classList.add("unCliked")
    buttonAll.classList.remove("cliked")

    // button event
    button.classList.remove("unCliked");
    button.classList.add("cliked");

    designerList = designers.filter((newE) => newE.specification === e.target.innerText)
    itemBoxfuction()
  })


  filterBtnContainer.appendChild(button);
}

// uncliked
function onUnCliked(){
  const buttons = document.querySelectorAll(".filterbtnI")
  console.log(buttons)

  for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.add("unCliked")
    buttons[i].classList.remove("cliked")
  }
}


// ItemBox
function itemBoxfuction(){
  itemWrapper.innerHTML = "" //reset container
  for(let i = 0; i < designerList.length; i++){
    //create Div
    const div = document.createElement("div");
    const title = document.createElement("div");
    
    //title
    title.innerText = `${designerList[i].name}`;
  
    //div
    div.classList.add("boxItem")
    div.appendChild(title)
    itemWrapper.appendChild(div)
  }
}

itemBoxfuction();

