const formatKstDate = (time) => {
    time = new Date(time);
    const offset = time.getTimezoneOffset() * 60000;

    return new Date(time.getTime() + offset);
};

export default formatKstDate;
