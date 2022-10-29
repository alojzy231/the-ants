const colors = {
    background: '#E6F7D1',
    black: '#101820FF',
    primary: '#92B370',
    secondary: '#C9EBA4',
  };
  
  export const fontSizes = {
    header1: '9.6rem',
    header2: '4.8rem',
    header3: '2.4rem',
    paragraphBig: '2.4rem',
    paragraphSmall: '1.3rem',
  };
  
  export const medias = {
    mobile: '(max-width: 890px)',
  };
  
 export const theme = {
    colors,
    fontSizes,
    medias,
  };

  export type ThemeType = typeof theme;
