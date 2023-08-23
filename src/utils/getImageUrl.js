const getIconUrl = (imageName) => {
    const url = new URL(`../assets/icons/`, import.meta.url).href;
    return `${url}/${imageName}.png`;
};

const getImageUrl = (imageName) => {
    const url = new URL(`../assets/images/`, import.meta.url).href;
    return `${url}/${imageName}.png`;
};

export { getIconUrl, getImageUrl };
