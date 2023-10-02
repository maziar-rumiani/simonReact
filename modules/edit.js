document.addEventListener('click', (e) => {
  if (e.target.classList.contains("edit")) {
    const el = e.target;
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let task = tasks.find((task) => task.id === +el.id);
    const li_text = document.getElementById(el.id).firstChild;
    if (li_text.readOnly) {
      li_text.removeAttribute("readonly");
      li_text.focus();
      li_text.classList.add("onEdit");
      el.title = "Save";
      el.classList.remove("fa-check-square");
      el.classList.add("fa-save");
    } else {
      if(li_text.value.trim() === '') return alert('Input can not be empty!')
      task.task = li_text.value;
      li_text.classList.remove("onEdit");
      li_text.readOnly = true;
      el.title = "Edit";
      el.classList.remove("fa-save");
      el.classList.add("fa-check-square");
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
