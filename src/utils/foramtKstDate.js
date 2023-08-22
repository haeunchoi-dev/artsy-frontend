const formatKstDate = (utc) => {
    utc = new Date(utc);
    const diff = 9 * 60 * 60 * 1000;
    return new Date(utc + diff);
};

export default formatKstDate;
