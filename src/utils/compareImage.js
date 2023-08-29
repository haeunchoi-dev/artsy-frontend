const compareImage = (width, height) => {
    if (width > height) return 'width';
    else return 'height';
};

export default compareImage;
