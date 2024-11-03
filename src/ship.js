function ship(length) {
    let timesHit = 0;
    let sunk = false;

    const hit = () => timesHit += 1;
    const isSunk = () => {
        if (length - timesHit <= 0) {
            return sunk = true;
        } else {
            return sunk = false;
        }
    }

    return { hit, isSunk };
}

export { ship };