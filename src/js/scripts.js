function createMenu({
  createMenuButton
}) {
  /**
   * @type {HTMLElement}
   */
  const navEl = document.querySelector(".nav-mobile");
  const menu = document.querySelector(".menu-mobile");
  const menuSearch = document.querySelector(".menu-mobile__search-container");
  /**
   * @type {HTMLUListElement}
   */
  const buttonShowMenu = createMenuButton();
  function renderMenuButton() {
    navEl.appendChild(buttonShowMenu);
  }
  function handleButtonClick() {
    const iconMenu = buttonShowMenu.children[0];
    if( iconMenu.className == "fa-solid fa-bars") {
      menu.style.display = "block";
      menuSearch.style.display = "flex";
      iconMenu.className = "fas fa-times"
    }
    else
    {
      menu.style.display = "none";
      menuSearch.style.display = "none";
      iconMenu.className = "fa-solid fa-bars";
    }

  }
  function handleButton() {
    buttonShowMenu.addEventListener("click", handleButtonClick);
  }



  function init() {
    renderMenuButton();
    handleButton();
  }

  init();
}
createMenu({
  createMenuButton() {
    const buttonShowMenu = document.createElement("button");
    buttonShowMenu.className = "btn-show";
    buttonShowMenu.id = "btn-show";
    const iconBar = document.createElement("i");
    iconBar.className = "fa-solid fa-bars"
    buttonShowMenu.appendChild(iconBar);
    return buttonShowMenu;
  },

});

function sizeScreen() {
  // const nav = document.getElementById("nav");
  /**
   * @type {HTMLElement}
   */
  const navEl = document.querySelector(".nav");
  const navElMobile = document.querySelector(".nav-mobile");
  const menu1 = document.querySelector(".menu-mobile--1");
  const menu2 = document.querySelector(".menu-mobile");
  const buttonMenu = document.getElementById("btn-show");
  const menuSearch = document.querySelector(".menu-mobile__search-container");
  function initMenu() {
    if(window.innerWidth < 1000)
    {
      buttonMenu.style.display = "block";
      menu1.style.display = "flex";
      menu2.style.display = "none";
      menuSearch.style.display = "none";
      navEl.style.display = "none"
      navElMobile.style.display = "block";
    }
    else
    {
      buttonMenu.style.display = "none";
      menu1.style.display = "none";
      menu2.style.display = "none";
      menuSearch.style.display = "none";
      navEl.style.display = "block";
      navElMobile.style.display = "none"
    }
  }
  function resizeScreen(){
    if(window.innerWidth < 1000)
    {
      buttonMenu.style.display = "block";
      menu1.style.display = "flex";
      menu2.style.display = "none";
      menuSearch.style.display = "none";
      navEl.style.display = "none"
      navElMobile.style.display = "block";
    }
    else
    {
      buttonMenu.style.display = "none";
      menu1.style.display = "none";
      menu2.style.display = "none";
      menuSearch.style.display = "none";
      navEl.style.display = "block"
      navElMobile.style.display = "none"
    }
  }
  function init() {
    initMenu();
    window.addEventListener('resize', resizeScreen );
    // console.log(buttonMenu);
  }
  init();
}

sizeScreen();


function reverseNumber( number ) {
  if(Number(number) === number) {
    const num = number + '';
    return num.split('').reverse().join('');
  }
  else {
    console.log("Khong phai so");
  }

}
console.log(reverseNumber(123));

function generateString( string ) {
  let s = [];
  for(let i = 0; i < string.length; i++) {
    for(let j = i + 1; j < string.length; j++) {

    }
  }
}

// function sortString( string ) {
//   const s = string.split('');
//   return s.sort().join('');
// }
function sortString( string ) {
  const s = string.split('');
  for(let i = 0;i < s.length; i++) {
    for(let j = i + 1; j < s.length; j++) {
      let temp ;
      if(s[i] > s[j]) {
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
      }
    }
  }
  return s.join('');
}
console.log(sortString("fdcbea"));

function upperCaseStr( str ) {
  const s = str.split(' ');
  for(let i = 0; i < s.length; i++) {
    let temp = s[i].split('');
    temp[0] = temp[0].toUpperCase();
    s[i] = temp.join('');
  }
  return s.join(' ');
}
console.log(upperCaseStr("abc def ghi"));

function findLength( str ) {
  const s = str.split(' ');
  let max = s[0];
  for(let i = 1; i < s.length; i++) {
    if(s[i].length > max.length) {
      max = s[i];
    }
  }
  return max;
}
console.log(findLength("Web Development Tutorial"));
function handleInputValue(event) {
  console.log(event.target.value);
}

const inputEl = document.querySelector("input");
inputEl.addEventListener("change", handleInputValue)
