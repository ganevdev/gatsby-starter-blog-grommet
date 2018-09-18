import siteConfig from '../../../site-config'

// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
// https://github.com/grommet/grommet/tree/NEXT/src/js/themes
export const siteConfigTheme = {
  global: {
    font: {
      family: siteConfig.font,
    },
    heading: {
      font: {
        family: siteConfig.fontHeadings,
      },
    },
    colors: {
      brand: siteConfig.mainColor,
    },
  },
}
