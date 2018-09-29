import siteConfig from '../site-config'

// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
// https://github.com/grommet/grommet/tree/NEXT/src/js/themes
export const siteTheme = {
  global: {
    font: {
      family: siteConfig.font
    },
    colors: {
      brand: siteConfig.brandColor
    }
  },
  heading: {
    font: {
      family: siteConfig.fontHeadings
    }
  }
}
