const joke = document.getElementById("joke");

document.getElementById("get_joke").addEventListener("click", getJoke);
function getJoke() {
  joke.innerHTML = "Loading...";
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      joke.innerHTML = data.joke;
    })
    .catch((err) => {
      console.error(err);
    });
}
