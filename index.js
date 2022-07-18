//eventhandler for fetching advice api data on load or triggered by button

fetch ("https://api.adviceslip.com/advice")
.then(res => res.json())
.then(data => displayAdvice(data))


