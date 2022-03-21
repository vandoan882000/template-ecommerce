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


