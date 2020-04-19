document.querySelector(".get-jokes").addEventListener("click", getJokes);
function getJokes(e) {
  const number = document.querySelector("input[type='number']").value;

  const xhr = new XMLHttpRequest();

  // request, src, async
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let result = "";

      if (response.type === "success") {
        // this API returns the array in value, others might return in the object itself
        response.value.forEach(function (joke) {
          result += `<li>${joke.joke}</li>`;
        });
      } else {
        result += `<li>Something went wrong</li>`;
      }
      document.querySelector(".jokes").innerHTML = result;
    }
  };

  xhr.send();

  e.preventDefault();
}

// document.querySelector(".get-jokes").addEventListener("click", getJokes);
// function getJokes(e) {
//   const number = document.querySelector("input[type='number']").value;

//   console.log(number);
//   e.preventDefault();
// }
