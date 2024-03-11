
var button = document.createElement("button");

button.innerHTML = "Откликнуться";

button.addEventListener("click", function() {
  alert("Вы откликнулись!");
});


var containers = document.getElementsByClassName("buttonContainer");

// Перебираем все найденные контейнеры
for (var i = 0; i < containers.length; i++) {
  var container = containers[i];
  // Добавляем кнопку в текущий контейнер
  container.appendChild(button.cloneNode(true)); // используем cloneNode, чтобы добавить копию кнопки
}