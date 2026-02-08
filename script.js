
// ======================== FAQ Section =======================
  document.getElementById("loadMoreFaq").addEventListener("click", function () {
    let hiddenFaqs = document.querySelectorAll(".faq-item.d-none");

    hiddenFaqs.forEach(function (item) {
      item.classList.remove("d-none");
    });

    this.style.display = "none"; // button hide after click
  });

  //  ================= NAVBAR LOAD master ===================
document.addEventListener("DOMContentLoaded", function () {
  const navbarDiv = document.getElementById("navbar");

  if (navbarDiv) {
    fetch("./navbar.html")
      .then((response) => response.text())
      .then((data) => {
        navbarDiv.innerHTML = data;
      })
      .catch((error) => {
        console.error("Navbar load error:", error);
      });
  }
});

  
