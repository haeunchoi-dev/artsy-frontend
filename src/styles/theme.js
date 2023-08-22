const colors = {
    point1: '#8B97FF',
    point2: '#A888FF',
    sub1: '#D373FA',
    sub2: '#FFC348',
    sub3: '#FFA888',
    black: '#1B1D21',
};

const gradeColor = {
    darkSilver: '#848796',
    bronze: '#A69A89',
    silver: '#BCBCE4',
    gold: '#E8BC4E',
};

const fontSizes = {
    h2: '6rem',
    h3: '4.8rem',
    h4: '3.4rem',
    h5: '2.4rem',
    h6: '2rem',
    body: '1.6rem',
    text: '1.4rem',
    subText: '1.2rem',
};

const devicesSize = {
    mobile: '390px',
    tablet: '768px',
    labtop: '1280px',
};

const media = {
    tablet: `@media all and (min-width: ${devicesSize.tablet})`,
    labtop: `@media all and (min-width: ${devicesSize.labtop})`,
};

const borderRadius = {
    small: '0.4rem',
    medium: '0.6rem',
    large: '0.8rem',
};

const layer = {
    layer1: 100,
    layer2: 200,
    layer3: 300,
    layer4: 400,
    layer5: 500,
    layer6: 600,
    layer7: 700,
    layer8: 800,
    layer9: 900,
    layer10: 1000,
};

const theme = {
    colors,
    fontSizes,
    devicesSize,
    media,
    gradeColor,
    borderRadius,
    layer,
};

export default theme;
