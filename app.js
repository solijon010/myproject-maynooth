const showSitenavBtn = document.querySelector(".click-btn");
const overlay = document.querySelector(".extra__sitenav-overlay");
const sitenav = document.querySelector(".extra-sitenav");
const closeBtn = document.querySelector(".extra__sitenav-btn");

const filterToggle = document.getElementById('filterToggle');
const filterPanel = document.getElementById('filterPanel');
const filterClose = document.getElementById('filterClose');



showSitenavBtn.addEventListener("click", function () {
  overlay.style.transform = "translate(0)";
  sitenav.style.transform = "translateX(0)";
});

overlay.addEventListener("click", function (e) {
  overlay.style.transform = "translate(100%)";
  sitenav.style.transform = "translateX(100%)";
});
closeBtn.addEventListener("click", function (e) {
  overlay.style.transform = "translate(100%)";
  sitenav.style.transform = "translateX(100%)";
});

filterToggle.addEventListener('click', () => {
    filterPanel.style.display = 'block';
});

filterClose.addEventListener('click', () => {
    filterPanel.style.display = 'none';
});
