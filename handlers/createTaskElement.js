export const createTaskElement = ({ id, input, date, status }) => {
  const li = document.createElement("li");
  li.id = id;
  li.className = 'task';

  const li_text = document.createElement("input");
  li_text.className = `li_text ${status}`;
  li_text.readOnly = "readOnly";
  li_text.value = input;
  li_text.id = id;

  const li_str = document.createElement("i");
  li_str.className = "strikethrough far fa-circle";
  li_str.title = status === "done" ? "Undone" : "Done";
  li_str.className =
    status === "done"
      ? "strikethrough fas fa-check-square"
      : "strikethrough far fa-circle";
  li_str.id = id;

  const li_edit = document.createElement("i");
  li_edit.className = "edit fas fa-edit";
  li_edit.title = "Edit";
  li_edit.id = id;

  const li_delete = document.createElement("i");
  li_delete.className = "delete fas fa-trash-alt";
  li_delete.title = "Delete";
  li_delete.id = id;

  const li_date = document.createElement("p");
  li_date.className = "createdDate";
  li_date.innerText = date;

  const li_info = document.createElement("div");
  li_info.id = id;
  li_info.className = "li_info";
  li_info.append(li_date, li_str, li_edit, li_delete);
  li.append(li_text, li_info);
  document.querySelector(".tasks").appendChild(li);
};
