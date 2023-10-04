export const addBtnVisibilityHandler = () => {
  const inputElement = document.querySelector(".input");
  const addBtnELement = document.querySelector(".addbtn");
  let inputValue = "";
  inputElement.addEventListener("input", (e) => {
    inputValue = e.target.value.trim();
    if (inputValue !== "") addBtnELement.style.visibility = "visible";
  });
  if (inputValue === "") addBtnELement.style.visibility = "hidden";
};
