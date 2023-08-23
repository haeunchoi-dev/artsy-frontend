const getIconUrl = (imageName) => {
    return new URL(`../assets/icons/${imageName}.png`, import.meta.url).href;
};

const getImageUrl = (imageName) => {
    return new URL(`../assets/images/${imageName}.png`, import.meta.url).href;
};

export { getIconUrl, getImageUrl };
