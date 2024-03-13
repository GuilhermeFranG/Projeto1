var header = document.getElementById('header');
var navigation = document.getElementById('navigation');
var menu = document.getElementById('menu');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigation.style.marginLeft = '-75vw';
        navigation.style.animationName = 'showSidebar';
        menu.style.filter = 'blur(10px)';
    } else {
        navigation.style.marginLeft = '-150vw';
        navigation.style.animationName = 'closeSidebar';
        menu.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth >= 750 && showSidebar) {
        toggleSidebar();
    }

    // Redefine a posição do menu de navegação para a posição original //
    navigation.style.marginLeft = '';
});

document.getElementById("people").selectedIndex = 1;