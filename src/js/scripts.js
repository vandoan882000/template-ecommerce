function createMenu({
  createMenuButton
}) {
  /**
   * @type {HTMLElement}
   */
  const navEl = document.querySelector(".nav-mobile");
  const menus = document.querySelectorAll(".menu-mobile");
  const menuOption = document.querySelector(".menu-mobile__option");
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
      for( menu of menus) {
        menu.style.display = "block";
      }
      menuOption.style.display = "flex";
      menuSearch.style.display = "flex";
      iconMenu.className = "fas fa-times"
    }
    else
    {
      for( menu of menus) {
        menu.style.display = "none";
      }
      menuOption.style.display = "none";
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
    iconBar.className = "fas fa-times"
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
  const menus = document.querySelectorAll(".menu-mobile");
  const buttonMenu = document.getElementById("btn-show");
  const menuOption = document.querySelector(".menu-mobile__option");
  const menuSearch = document.querySelector(".menu-mobile__search-container");
  function initMenu() {
    if(window.innerWidth < 1000)
    {
      buttonMenu.style.display = "block";
      for(menu of menus) {
        menu.style.display = "block";
      }
      menuOption.style.display = "flex";
      menuSearch.style.display = "flex";
      navEl.style.display = "none"
    }
    else
    {
      buttonMenu.style.display = "none";
      for(menu of menus) {
        menu.style.display = "none";
      }
      menuOption.style.display = "none";
      menuSearch.style.display = "none";
      navEl.style.display = "block";
    }
  }
  function resizeScreen(){
    if(window.innerWidth < 1000)
    {
      buttonMenu.style.display = "block";
      for(menu of menus) {
        menu.style.display = "block";
      }
      menuOption.style.display = "flex";
      menuSearch.style.display = "flex";
      navEl.style.display = "none"
    }
    else
    {
      buttonMenu.style.display = "none";
      for(menu of menus) {
        menu.style.display = "none";
      }
      menuOption.style.display = "none";
      menuSearch.style.display = "none";
      navEl.style.display = "block"
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
