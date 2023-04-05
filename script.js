function showHome() {
    hideAllPages();
    document.getElementById("home").style.display = "block";
  }
  
  function showAbout() {
    hideAllPages();
    document.getElementById("about").style.display = "block";
  }
  
  function showJoke() {
    hideAllPages();
    document.getElementById("joke").style.display = "block";
  }
  
  function hideAllPages() {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";
    }
  }