var header = document.getElementById('header');
var navigation = document.getElementById('navigation');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigation.style.marginLeft = '-85vw';
        navigation.style.animationName = 'showSidebar';
    } else {
        navigation.style.marginLeft = '-120vw';
        navigation.style.animationName = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 663 && showSidebar) {
        toggleSidebar();
    }
});