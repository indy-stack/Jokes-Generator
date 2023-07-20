const btnEl = document.getElementById("btn");
const jokeResult = document.getElementById("joke");
const apiKey = "qIMeav8yHdFdhBrm6jPpmQ==Z3egrkOuajdNkHtS";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey
    }
};

async function getJoke() {
    try {
        jokeResult.innerText = "Loading joke...";
        btnEl.disabled = true;
        btnEl.innerText = "loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeResult.innerText = data[0].joke;
    } catch (error) {
        jokeResult.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }


}

btnEl.addEventListener("click", getJoke);