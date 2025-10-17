// This append the current time in millisecond to the HTML documnet
const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    timeEl.textContent = `Current time (in milliseconds): ${Date.now()}`

}

updateTime()

// this updates the time at an interval of one second
setInterval(updateTime, 1000)
