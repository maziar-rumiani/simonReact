document.addEventListener("click", (e) => {
  document.querySelectorAll(".li_info").forEach((element) => {
    element.style.display = "none";
  });
  if (e.target.closest(".task")){
    e.target.closest(".task").querySelector(".li_info").style.display = "flex";
    };
});
