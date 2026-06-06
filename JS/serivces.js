document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const panel = accordionItem.querySelector(".accordion-panel");

    //ตรวจสอบว่าเมนูนี้เปิดอยู่ ?
    const isActive = accordionItem.classList.contains("active");

    //ปิดเมนูอื่นๆที่เปิดอยู่ก่อนหน้า
    document.querySelectorAll(".accordion-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".accordion-panel").style.maxHeight = null;
    });

    if (!isActive) {
      accordionItem.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
