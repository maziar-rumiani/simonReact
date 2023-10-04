export const taskHighligher = (id) => {
  const newTask = document.getElementById(id);
  newTask.classList.add("highlight");
  newTask.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
  setTimeout(() => {
    newTask.classList.remove("highlight");
  }, 2000);
};
