const brown = '#735F18';
const darkBrown = '#50410B';
const white = '#FFF';
const black = '#000';
const lightYellow = '#FFEBA5';
const lighterYellow = '#F5F2E3';
const lightGreen = '#C3E679';
const lightGrey = '#BDBDBD';
const yellow = '#FFE074';
const beige = '#EBE6CE';

export const theme = {
  light: {
    id: 'T_001',
    name: 'Light',
    colors: {
      body: {
        primary: '#FFFFFF',
        secondary: '#F6F6F6',
        background: lighterYellow,
      },
      text: {
        primary: black,
        secondary: darkBrown,
        tertiary: white,
        muted: lightGrey,
      },
      buttons: {
        header: {
          background: brown,
          text: white,
        },
        post: {
          background: lightGreen,
          text: brown,
          disabledBackground: lightGrey,
          disabledColor: black,
        },
        tag: {
          background: lightYellow,
          text: darkBrown,
        },
      },
      button: {
        text: {
          primary: white,
          secondary: '#292929',
          disabled: '#A5A5A5',
        },
        background: {
          primary: '#292929',
          secondary: 'transparent',
          disabled: '#E5E5E5',
        },
      },
      question: {
        text: darkBrown,
        background: yellow,
      },
      questionHeader: {
        background: beige,
        text: darkBrown,
      },
      link: {
        text: 'teal',
      },
    },
    font: 'Space Grotesk',
  },
};
