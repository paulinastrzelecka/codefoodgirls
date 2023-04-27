document.addEventListener("load", getRandomFood());

function getRandomFood() {
  const food = ["burger.jpg", "carbonara.jpg", "greek salad.jpg"];

  const img = document.getElementById("random-food");
  img.src = `./images/${food[Math.floor(Math.random() * food.length)]}`;
}

document.getElementById("button").addEventListener("click", function () {
  window.location.reload();
});
