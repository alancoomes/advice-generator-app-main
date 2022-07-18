//eventhandler for fetching advice api data on load or triggered by button

const fetchAnimals = () => {
fetch("https://api.adviceslip.com/advice")
.then(res => res.json())
.then(data => displayAdvice(data))
.catch(err => alert("Something went wrong"))
}
function displayAdvice(data) {
    let adviceText = document.getElementById("advice-text")
    let adviceId = document.getElementById("advice-id")
    adviceText.innerText = `"${data.advice}"`
    adviceId.innerText = `Advice #${data.slip_id}`
}