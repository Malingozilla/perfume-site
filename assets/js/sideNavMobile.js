function openSideBar() {
document.getElementById("sideNavMobile").style.position = "absolute";
  document.getElementById("sideNavMobile").style.transform = "translateX(0%)";
    document.getElementById("sideNavMobile").style.display = "block";
}

function closeSideBar(){
    document.getElementById("sideNavMobile").style.position = "absolute";
    document.getElementById("sideNavMobile").style.transform = "translateX(-100%)";
}