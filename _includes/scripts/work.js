(() => {
  const gallery = () => {
    const dots = [...document.querySelectorAll('.dots span')];

    dots.map(dot =>{
      dot.addEventListener("click", function () {
        if (!this.classList.contains("active")) {
          const imgNo = this.innerHTML;
          document.querySelectorAll(".dots .active")[0].classList.remove("active");
          this.classList.add("active");

          document.querySelectorAll(".gallery .preview .visible")[0].classList.remove("visible");
          document.querySelectorAll(".gallery .preview img")[imgNo -1].classList.add("visible");
        }
      });
    });
  }

  gallery();
})();
