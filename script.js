const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
const addClass = (elem, className) => {elem.classList.add(className)};
const removeClass = (elem, className) => {elem.classList.remove(className)};
const hide = (elem) => {addClass(elem, "hidden")};
const unhide = (elem) => {removeClass(elem, "hidden")};

// hi :) feel free to drop a line!


// console.log("%cTHIS CODE CPRYRIGHT 2022 BIG BALLS PRODUCTIONS", "color: #FF00FF; font-family: \"Comic Sans MS\"; font-size: 36px;");
Array.from($all(".front-page-button")).forEach(button => {
    button.addEventListener("click", clickEvent => {
        const theButton = clickEvent.target;
        console.error(theButton);
        
        const target = $(theButton.dataset.target);
        
        const prev = $(".loaded-menu-page")
        hide(prev);
        removeClass(prev, "loaded-menu-page");
        
        unhide(target);
        addClass(target, "loaded-menu-page");
    });
});
