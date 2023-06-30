function updateClock() {
	const timerElement = document.getElementById("timer");
	const now = new Date();
	const time = now.toLocaleTimeString();
	const date = now.toLocaleDateString();

	timerElement.textContent = `${date}, ${time}`;
}
updateClock();
setInterval(updateClock, 1000);