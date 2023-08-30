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

const borderRadius = {
    small: '0.4rem',
    medium: '0.6rem',
    large: '0.8rem',
};

const media = {
    tablet: `@media all and (min-width: ${devicesSize.tablet})`,
    labtop: `@media all and (min-width: ${devicesSize.labtop})`,
};

const gradeColor = {
    darkSilver: '#848796',
    bronze: '#A69A89',
    silver: '#BCBCE4',
    gold: '#E8BC4E',
};
const mainColor = {
    blue: '#8B97FF',
    purple: '#A888FF',
    lightBlue: '#bec5ff',
    lightBlue: '#cdbbff',
};
const gray = {
    gray00: '#ffffff',
    gray05: '#f5f7ff',
    gray10: '#e6e9f3',
    gray15: '#d8dbe7',
    gray20: '#bcc0cf',
    gray30: '#a1a5b6',
    gray40: '#878c9e',
    gray50: '#6f7486',
    gray60: '#585d6e',
    gray70: '#424755',
    gray80: '#2e313d',
    gray85: '#1b1d25',
    gray90: '#121319',
    gray95: '#090a0d',
    gray100: '#000000',
};

const lightTheme = {
    colors: {
        point1: mainColor.blue,
        point2: mainColor.purple,
        sub1: mainColor.lightBlue, //point1 높은 채도 색상
        sub2: mainColor.lightPurple, //point2 높은 채도 색상
        black: gray.gray85,
        white: gray.gray00,
        font1: gray.gray85,
        font2: gray.gray85,
        font3: mainColor.blue, //point1 => sub1
        font4: mainColor.purple, //point2 => sub2
        font5: gray.gray40, //#909090
        font6: gray.gray60,
        font7: gray.gray70,
        font8: gray.gray05,
        background1: gray.gray00, //body
        background2: gray.gray00,
        background3: gray.gray00, //contents박스
        background4: gray.gray00, //버튼
        background5: gray.gray05, //grey바탕의 contents박스
        background6: gray.gray05,
        background7: gray.gray05,
        background8: gray.gray50,
        background9: gray.gray95,
        border1: mainColor.blue,
        border2: gray.gray20,
    },
    layer,
    fontSizes,
    devicesSize,
    media,
    borderRadius,
    gradeColor,
};
const darkTheme = {
    colors: {
        point1: mainColor.blue,
        point2: mainColor.purple,
        sub1: mainColor.lightBlue,
        sub2: mainColor.lightPurple,
        black: gray.gray00,
        white: gray.gray85,
        font1: gray.gray00,
        font2: gray.gray05,
        font3: mainColor.lightBlue, // sub1 =>point1
        font4: mainColor.lightPurple, // sub2 =>point2
        font5: gray.gray10,
        font6: gray.gray10,
        font7: gray.gray15,
        font8: gray.gray05,
        background1: gray.gray85,
        background2: gray.gray80,
        background3: gray.gray70,
        background4: gray.gray50,
        background5: gray.gray80,
        background6: gray.gray70,
        background7: gray.gray50,
        background8: gray.gray40,
        background9: gray.gray70,
        border1: gray.gray70,
        border2: gray.gray70,
    },
    layer,
    fontSizes,
    devicesSize,
    media,
    borderRadius,
    gradeColor,
};
export { lightTheme, darkTheme };
