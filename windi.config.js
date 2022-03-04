import formsPlugin from 'windicss/plugin/forms'
module.exports = {
    extract: {
        include: ['./**/*.html'],
    },
    darkMode: 'class',
    theme: {
        textColor: theme => theme('colors'),
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#FAAF19',
            'secondary': '#545AFA',
        }),
        borderColor: theme => ({
            ...theme('colors'),
             DEFAULT: theme('colors.gray.300', 'currentColor'),
            'primary': '#FAAF19',
            'secondary': '#545AFA',
            'base': 'rgb(226 241 255 / 33%)',
        }),
        extend: {
            textColor: {
            'base': '#FAAF19',
            'title': '#0C0C0C',
            'description': 'rgb(12 12 12 / 60%)',
            'primary': '#FAAF19',
            'secondary': '#545AFA',
            },
            fontFamily: {
                'poppins': ['Poppins'],
            },
            margin: {
                'auto1': '0 auto',
            },
            padding: {
                'half7': '7.5rem',
            },
            boxShadow: {
                DEFAULT: '0 0px 25px rgb(0 0 0 / 5%)',
            },
            // fontSize: {
            //     'xs': '.75rem',
            //     'sm': '.875rem',
            //     'tiny': '.875rem',
            //     'base': '1rem',
            //     'lg': '1.125rem',
            //     'xl': '1.25rem',
            //     '2xl': '1.5rem',
            //     '3xl': '1.875rem',
            //     '4xl': '2.25rem',
            //     '5xl': '3rem',
            //     '6xl': '4rem',
            //     '7xl': '5rem',
            // },
            lineHeight: {
                'title': '1.15',
                'title-2': '1.5',
            },
            container: {
                padding: '2rem',
                screens: {
                    sm: "100%",
                    md: "100%",
                    lg: "1024px",
                    xl: "1140px",
                    '2xl': "1200px"
                 }
            },
        }
    },
    variants: {
        extend: {}
    },
    plugins: [formsPlugin]
}