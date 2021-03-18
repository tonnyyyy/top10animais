initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("active");
    activeTab = (index) => {
      tabContent.forEach((item) => {
        item.classList.remove("active");
      });
      tabContent[index].classList.add("active");
    };

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
};
initTabNav();

initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  accordionList[0].classList.add("active");
  accordionList[0].nextElementSibling.classList.add("active");
  function activeAccordion() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
};
initAccordion();
