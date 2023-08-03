function humanReadable(seconds) {
  if (seconds < 60) {
    return `00:00:${seconds}`;
  } else {
    let hours = Math.floor(seconds / 3600).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    let secondsRemaining = seconds % 3600; // ready to work out minutes
    let minutes = Math.floor(secondsRemaining / 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }); // minutes worked out
    secondsRemaining = (secondsRemaining % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return `${hours}:${minutes}:${secondsRemaining}`;
  }
}

module.exports = humanReadable;
