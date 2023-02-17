let designers = 
[
  {
    "name":"Maria Sibylla Merian",
    "activeperiod":"17th Century",
    "mainfield":"Documentation",
    "specification": "Botany",
    
  },

  {
    "name":"Ada Lovelace",
    "activeperiod":"19th Century",
    "mainfield":"Science",
    "specification":"Technology",
    "pioner":"pioner"
    },

  {
    "name":"Alice Urbach",
    "activeperiod":"20th Century",
    "mainfield":"Documentation",
    "specification":"Visual Systems",
  },
 
  {
    "name":"Anna Atkins",
    "activeperiod":"19th Century",
    "mainfield":"Documentation",
    "specification":"Botany",
  },

  {
    "name":"Deborah Sussman",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Emma Willard",
    "activeperiod":"19th Century",
    "mainfield":"Design",
    "specification": "Cartography",
  },

  {
    "name":"Federica Fragapane",
    "activeperiod":"21th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },
  
  {
    "name":"Florence Nightingale",
    "activeperiod":"19th Century",
    "mainfield":"Science",
    "specification": "Data Visualization",
  },

  {
    "name":"Giorgia Lupi",
    "activeperiod":"21th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },

  {
    "name":"Jane Davis Doggett",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Jane Davis Doggett",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Luna Maurer",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Technology",
  },

 
  {
    "name":"Marie Neurath",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },

  {
    "name":"Marie Tharp",
    "activeperiod":"20th Century",
    "mainfield":"Science",
    "specification": "Cartography",
  },

  {
    "name":"Muriel Cooper",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Technology",
  },

  {
    "name":"Sandra Rendgen",
    "activeperiod":"21th Century",
    "mainfield":"Documentation",
    "specification": "Data Visualization",

  },

  {
    "name":"Stefanie Posavec",
    "activeperiod":"21th Century",
    "mainfield":"Design",
    "specification": "Data Visualization",
  },

  {
    "name":"Susan Kare",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
  },

  {
    "name":"Sylvia Harris",
    "activeperiod":"20th Century",
    "mainfield":"Design",
    "specification": "Visual Systems",
    
  },

];


let designerList = designers;
// Map
// const specificationUniqueList = designers.map(function(e){
//   return e.specifications
// });
const activeperiodUniqueList = [...(new Set(designers.map((e) => e.activeperiod)))];
const specificationUniqueList = [...(new Set(designers.map((e) => e.specification)))];
const mainfieldUniqueList = [...(new Set(designers.map((e) => e.mainfield)))];
console.log(specificationUniqueList)
console.log(activeperiodUniqueList)
// console.log(mainFieldUniqueList)

const itemWrapper = document.querySelector("#itemWrapper");
const filterBtnContainer = document.querySelector("#filterbtn");
const btngrid = document.querySelector(".btngrid");


//all btn
const buttonAll = document.createElement("button");
buttonAll.classList.add("btn01");

buttonAll.innerText = "all";

buttonAll.addEventListener("click", (e) => {
  designerList = designers;
  onUnCliked()
  buttonAll.classList.remove("unCliked");
  buttonAll.classList.add("cliked");
  itemBoxfuction()
})

const allbtn = document.createElement("div");
allbtn.classList.add("btn01");
allbtn.appendChild(buttonAll);
filterBtnContainer.appendChild(allbtn);



for(let i = 0; i < activeperiodUniqueList.length; i++){
 
  const button = document.createElement("button");
  button.innerText = activeperiodUniqueList[i];
  button.classList.add("filterbtnA");

  button.addEventListener("click",(e) => {
    onUnCliked();
    //all btn reset
    buttonAll.classList.add("unCliked");
    buttonAll.classList.remove("cliked");

    // button event
    button.classList.remove("unCliked");
    button.classList.add("cliked");

    designerList = designers.filter((newE) => newE.activeperiod === e.target.innerText)
    itemBoxfuction()
  })
  
  btngrid.appendChild(button);
}
 

for(let i = 0; i < specificationUniqueList.length; i++){
  const button = document.createElement("button");
  button.innerText = specificationUniqueList[i];
  button.classList.add("filterbtnS");

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

  filterBtnContainer.appendChild(btngrid);
  btngrid.appendChild(button);
}

for(let i = 0; i < mainfieldUniqueList.length; i++){
  const button = document.createElement("button");
  button.innerText = mainfieldUniqueList[i];
  button.classList.add("filterbtnM")

  button.addEventListener("click",(e) => {
    onUnCliked();
    //all btn reset
    buttonAll.classList.add("unCliked");
    buttonAll.classList.remove("cliked");

    // button event
    button.classList.remove("unCliked");
    button.classList.add("cliked");

    designerList = designers.filter((newE) => newE.mainfield === e.target.innerText);
    itemBoxfuction()
  })

  filterBtnContainer.appendChild(btngrid);
  btngrid.appendChild(button);}

// uncliked
function onUnCliked(){
  const buttons = document.querySelectorAll(".filterbtnI")
  console.log(buttons);

  for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.add("unCliked"); 
    buttons[i].classList.remove("cliked");
  }
}


// ItemBox
function itemBoxfuction(){
  itemWrapper.innerHTML = "" //reset container
  for(let i = 0; i < designerList.length; i++){
    //create Div
    const div = document.createElement("div");
    const title = document.createElement("div");
    const activeperiod = document.createElement("p");
    activeperiod.classList.add("tagsp");
    
    //title
    title.innerText = `${designerList[i].name}`;
    activeperiod.innerText = `${designerList[i].activeperiod + "  " + designerList[i].specification + " " + designerList[i].mainfield}`;
  
    //div
    div.classList.add("boxItem");
    div.appendChild(title);
    div.appendChild(activeperiod);
    itemWrapper.appendChild(div);
  }
}

itemBoxfuction();

