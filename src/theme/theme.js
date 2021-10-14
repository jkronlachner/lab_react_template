export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                type: 'light',
                primary: {
                    main: '#D72323',
                },
                secondary: {
                    main: '#EEEEEE',
                },
            }
            : {
                type: 'dark',
                primary: {
                    main: '#D72323',
                },
                secondary: {
                    main: '#EEEEEE',
                },
                background: {
                    default: '#141414',
                    paper: '#1e1e1e',
                },
                text: {
                    primary: '#f3f3f3',
                }
            })
    },
    typography: {
        fontFamily: 'Lato',
        fontSize: 13,
        fontWeightLight: 500,
        fontWeightRegular: 600,
        fontWeightMedium: 700,
        fontWeightBold: 900,
    },
});

