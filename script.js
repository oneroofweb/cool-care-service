
// ======================== FAQ Section =======================
  document.getElementById("loadMoreFaq").addEventListener("click", function () {
    let hiddenFaqs = document.querySelectorAll(".faq-item.d-none");

    hiddenFaqs.forEach(function (item) {
      item.classList.remove("d-none");
    });

    this.style.display = "none"; // button hide after click
  });

  
