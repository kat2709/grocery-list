// add ids
const input = document.getElementsByClassName("input")[0];
const btn = document.getElementsByClassName("btn")[0];
const closeBtn = document.getElementsByClassName("btn_del")[0];

input.onkeydown = handleKeyDown;
btn.onclick = handleSubmit;
closeBtn.onclick = closeAllClick;

function handleKeyDown(event) {
  if (event.key !== "Enter") {
    return;
  }
  handleSubmit();
}

function handleSubmit() {
  if (!input.value.trim()) return;

  const item = createItem(input.value);
  const inputsBox = document.getElementsByClassName("items_box")[0];
  inputsBox.append(item);

  input.value = "";
}

function createItem(text) {
  const img = document.createElement("img");
  img.classList.add("close_icon");
  img.src =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAjklEQVRIie2Vyw2AIBQER3uQaIlarhwsRy+Y4AfCPuTmnEx0dwg+FH4MzIAz5FzIZlmAHfCixIXMHjqSDMAaHtyAqaD8nhnVQE4ilysSc3mJpLo8J/ms/CSeEH+7tozzK/GqpZX3FdKuInuh6Ra9vVDLYSwuT92TJSWjaJYocy5LLIdIkjT/XEPjH87PgwNng1K28QMLlAAAAABJRU5ErkJggg==";
  img.onclick = closeClick;

  const div = document.createElement("div");
  div.classList.add("item");
  div.innerText = text;

  div.append(img);
  return div;
}

function closeClick(event) {
  event.target.parentNode.remove();
}

function closeAllClick() {
  const items = document.querySelectorAll(".item");
  for (let i = 0; i < items.length; i++) {
    items[i].remove();
  }
}
