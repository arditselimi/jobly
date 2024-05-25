export function timeSincePost(postTime) {
  const now = new Date();
  const timeDiff = now - new Date(postTime);

  const minutes = Math.floor(timeDiff / 60000);
  const hours = Math.floor(timeDiff / 3600000);
  const days = Math.floor(timeDiff / 86400000);

  if (hours < 1) {
    return `${minutes}m`;
  } else if (days < 1) {
    return `${hours}h`;
  } else {
    return `${days}d`;
  }
}
