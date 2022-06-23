export interface Theme {
    breakpoints: {
      small: string
      medium: string
      large: string
    }
    color: {
      mainPalette: {
        neutral0: string
        green20: string
        green40: string
        green80: string
        coral10: string
        coral20: string
        coral60: string
      }
      extendedPalette: {
        lightNeutrals: {
          neutral0: string
          neutral20: string
          neutral40: string
        }
        darkNeutrals: {
          neutral50: string
          neutral60: string
        }
        green: {
          green20: string
          green40: string
          green60: string
          green80: string 
        }
        coral: {
          coral10: string
          coral20: string
          coral40: string
          coral60: string
          coral80: string
        }
      }
    }
    boxShadow: {
      downward: {
        large: string
        medium: string
        small: string
      }
      upward: {
        large: string
        medium: string
        small: string
      }
      left: {
        large: string
        medium: string
        small: string
      }
    }
    fontFamily: {
      playfairDisplay: string
      playfairDisplaySC: string
    }
  }
  
  export type Color =
    | 'neutral0'
    | 'green20'
    | 'green40'
    | 'green60'
    | 'green80'
    | 'coral10'
    | 'coral20'
    | 'coral40'
    | 'coral60'
    | 'coral80'
  
  export const breakpoints = {
    small: '600px',
    medium: '840px',
    large: '1440px',
  }
  
  export const color = {
    mainPalette: {
      neutral0: '#FFFFFF',
      green20: '#E1EADA',
      green40: '#A0B58A',
      green80: '#00340A',
      coral10: '#FCEEE9',
      coral20: '#F8D3C5',
      coral60: '#E47171',
    },
    extendedPalette: {
      lightNeutrals: {
        neutral0: '#FFFFFF',
        neutral20: '#F9FBFF',
        neutral30: '#E5E9F1',
        neutral40: '#DDE1EC',
      },
      darkNeutrals: {
        neutral50: '#A5B5D0',
        neutral60: '#72829D',
      },
      green: {
        green20: '#E1EADA',
        green40: '#A0B58A',
        green60: '#416C49',
        green80: '#00340A',
      },
      coral: {
        coral10: '#FCEEE9',
        coral20: '#F8D3C5',
        coral40: '#F79B8D',
        coral60: '#E47171',
        coral80: '#C65E5E',
      },
    },
  }
  
  export const boxShadow = {
    downward: {
      large: '0px 24px 40px rgba(26, 26, 26, 0.16);',
      medium: '0px 12px 32px rgba(26, 26, 26, 0.24);',
      small: '0px 4px 8px rgba(26, 26, 26, 0.2);',
    },
    upward: {
      large: '0px -24px 40px rgba(26, 26, 26, 0.16);',
      medium: '0px -12px 32px rgba(26, 26, 26, 0.24);',
      small: '0px -4px 8px rgba(26, 26, 26, 0.2);',
    },
    left: {
      large: '-24px 0px 40px rgba(26, 26, 26, 0.16);',
      medium: '-12px 0px 32px rgba(26, 26, 26, 0.24);',
      small: '-4px 0px 8px rgba(26, 26, 26, 0.2);',
    },
  }
  
  export const fontFamily = {
    playfairDisplay: `'Playfair Display', serif;`,
    playfairDisplaySC: `'Playfair Display SC', serif;`,
  }
  
  export const styledTheme: Theme = {
    breakpoints,
    color,
    boxShadow,
    fontFamily,
  }