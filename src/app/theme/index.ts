import {extendTheme} from 'native-base';
import {colors} from './variables';

export const theme = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: {
        bg: 'main.100',
        backgroundColor: 'main.100',
        size: 'md',
        colorScheme: 'primary',
        rounded: '2xl',
        _text: {
          color: 'white.100',
        },
      },
      defaultProps: {
        _text: {
          fontSize: '2xl',
        },
      },
      variants: {
        secondary: {
          bg: 'white.100',
          backgroundColor: 'white.100',
          borderWidth: 1,
          borderColor: 'white.100',
          _text: {
            color: 'main.100',
          },
        },
      },
      sizes: {
        md: {
          height: '66px',
          rounded: '2xl',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'black.100',
      },
      defaultProps: {
        size: 'md',
        fontFamily: 'Poppins-Regular',
      },
      sizes: {
        '2xs': {fontSize: 10},
        xs: {fontSize: 12},
        sm: {fontSize: 14},
        md: {fontSize: 16},
        lg: {fontSize: 18},
        xl: {fontSize: 20},
        '2xl': {fontSize: 22},
        '3xl': {fontSize: 24},
        '4xl': {fontSize: 26},
        '5xl': {fontSize: 28},
        '6xl': {fontSize: 30},
        '7xl': {fontSize: 32},
        '8xl': {fontSize: 34},
        '9xl': {fontSize: 36},
      },
    },
    Input: {
      baseStyle: {
        rounded: 'lg',
        height: '56px',
        borderColor: 'gray.50',
        invalidOutlineColor: 'red.100',
        paddingLeft: '24px',
        paddingRight: '24px',
        _input: {
          fontSize: 'lg',
          color: 'gray.50',
          fontFamily: 'Poppins-Regular',
          textTransform: 'lowercase',
        },
        _focus: {
          borderColor: 'main.100',
          backgroundColor: 'transparent',
          _icon: {color: 'main.100'},
          _input: {
            color: 'main.100',
          },
        },
      },
      defaultProps: {
        borderWidth: '2px',
      },
    },
    Link: {
      baseStyle: {
        _text: {
          _light: {
            color: 'dark.100',
            fontWeight: 600,
            fontSize: 'sm',
          },
          color: 'dark.100',
          fontWeight: 600,
          fontSize: 'sm',
        },
      },
      defaultProps: {
        isUnderlined: false,
      },
    },
    Badge: {
      defaultProps: {
        padding: '6px',
        paddingRight: '12px',
        paddingLeft: '12px',
        borderRadius: '8px',
        _text: {
          fontSize: 'sm',
          fontWeight: '600',
        },
      },
      variants: {
        done: {
          bg: 'green.200',
          backgroundColor: 'green.100',
          _text: {
            color: '#219653',
          },
        },
        warning: {
          bg: '#DF8F1633',
          backgroundColor: '#DF8F1633',
          _text: {
            color: '#F2994A',
          },
        },
        error: {
          bg: 'blue.50',
          backgroundColor: 'red.50',
          _text: {
            color: 'red.400',
          },
        },
        delivering: {
          bg: 'blue.50',
          backgroundColor: 'blue.50',
          _text: {
            color: 'blue.400',
          },
        },
      },
    },
    Toast: {
      baseStyle: {
        bg: 'error.500',
        rounded: 'lg',
        p: '2',
        _title: {
          fontWeight: '500',
        },
      },
      defaultProps: {
        paddingLeft: '4',
        paddingRight: '4',
        _title: {
          fontSize: 'sm',
        },
      },
    },
  },
  fonts: {
    heading: 'Poppins-Bold',
    body: 'Poppins-Regular',
    mono: 'Poppins-Regular',
    semibold: 'Poppins-SemiBold',
  },
});
