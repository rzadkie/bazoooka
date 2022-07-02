module.exports = {
    future: {
        removeDeprecatedGapUtilites: true
    },
    theme: {
        fill: (theme) => ({
            red: theme('colors.red.primary')
        }),
        colors: {
            white: {
                najs: '#fafafa',
                default: '#FFFFFF'
            },
            blue: {
                medium: '#0492C2',
                200: '#BFDBFE'
            },
            black: {
                light: '#0D0D0D',
                opaque_light: '#0D0D0D4D',
                faded: '#000059'
            },
            gray: {
                base: '#616161',
                primary: '#808080',
                background: '#404040',
                200: '#E5E7EB'
            },
            red: {
                primary: '#CC0000',
                500: '#EF4444',
            },
            yellow: {
                500: '#F59E0B'
            },
            pink: {
                500: '#EC4899'
            }
        },
        extend: {
            fontFamily: {
                code: [
                    'Bebas Neue',
                    'Fira Code'
                ]
            }
        }
    }
};