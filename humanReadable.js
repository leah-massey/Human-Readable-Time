function humanReadable(seconds) {
  if (seconds < 60) {
    return `00:00:${seconds}`;
  } else {
    let minutes = Math.floor(seconds / 60);
    let secondsLeft = seconds % 60;
    return `00:${minutes}:${secondsLeft}`;
  }
}

module.exports = humanReadable;
