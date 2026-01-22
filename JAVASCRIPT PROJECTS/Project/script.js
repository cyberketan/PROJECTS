function addTask() {
  let task = document.getElementById("task").value;

  if (task === "") {
    alert("Please enter task");
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;

  li.onclick = function () {
    li.classList.toggle("done");
  };

  let del = document.createElement("span");
  del.innerText = " ❌";
  del.onclick = function () {
    li.remove();
  };

  li.appendChild(del);
  document.getElementById("list").appendChild(li);

  document.getElementById("task").value = "";
}
