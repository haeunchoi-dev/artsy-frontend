const throttle = (callback, delay = 100) => {
    let timerId;

    return () => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback();
            timerId = null;
        }, delay);
    };
};

export default throttle;
