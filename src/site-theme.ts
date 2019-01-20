import siteConfig from '../site-config';

// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
// https://github.com/grommet/grommet/tree/NEXT/src/js/themes
export default {
  global: {
    font: {
      family: siteConfig.font
    },
    colors: {
      brand: siteConfig.brandColor
    },
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 1000
      },
      medium: {
        value: 1200
      },
      middle: {
        value: 3000
      }
    }
  },
  heading: {
    font: {
      family: siteConfig.fontHeadings
    }
  }
};
