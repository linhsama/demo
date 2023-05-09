window.addEventListener("load", function () {
  /* This code is responsible for saving and restoring the scroll position of a webpage using the HTML5
localStorage API. */
  var po = localStorage.getItem("position");
  window.scrollBy(0, po);
  window.onscroll = function () {
    var position = window.pageYOffset;
    if (typeof Storage !== "undefined") {
      localStorage.setItem("position", position);
    }
  };

  /* Setting a timeout of 10 milliseconds, and then calling the updateClock() function. */
  setTimeout(() => {
    updateClock();
    window.setInterval("updateClock()", 1);
  }, 10);


  /* Theme */
  let theme = localStorage.getItem("theme");
  if (theme && theme === "light") {
    document.body.classList.add("light");
    var checkbox_toggle = document.querySelector("#dark-light");
    checkbox_toggle.setAttribute('checked', true);
  }

  /* Theme */
  let sidebar_bar = localStorage.getItem("sidebar_bar");
  if (sidebar_bar && sidebar_bar === "hide") {
    document.body.classList.add("hide");
  }
  
});

/**
 * The function updates a clock on a webpage with the current date and time.
 */
Number.prototype.pad = function (n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function updateClock() {
  var now = new Date();
  var milliseconds = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  var tags = ["mon", "d", "y", "h", "m", "s"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}


var checkbox_toggle = document.querySelector("#dark-light");
checkbox_toggle.addEventListener("change", function () {

  let theme = localStorage.getItem("theme");
  if (theme && theme === "light") {
    localStorage.setItem("theme", "");
    document.body.classList.remove("light");
  } else {
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
  }

});



var sidebar_bar = document.querySelector(".sidebar_bar");
sidebar_bar.addEventListener("click", function () {

  let sidebar_bar = localStorage.getItem("sidebar_bar");
  if (sidebar_bar && sidebar_bar === "hide") {
    localStorage.setItem("sidebar_bar", "");
    document.body.classList.remove("hide");
  } else {
      localStorage.setItem("sidebar_bar", "hide");
      document.body.classList.add("hide");
  }
});