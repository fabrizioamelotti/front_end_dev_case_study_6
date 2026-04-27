'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        background: {
            default: "#f8fafc",
            paper: "#ffffff",
        },
        primary: {
            main: "#1FAAA0",
            contrastText: "#ffffff",
        },
        text: {
            primary: "#171717",
            secondary: "#5f6b76",
        },
        grey: {
            300: "#d6dce1",
            500: "#8e98a2",
        },
    },
    shape: {
        borderRadius: 3,
    },
    typography: {
        fontFamily: "Arial, Helvetica, sans-serif",
        h6: {
            fontSize: "1.125rem",
            fontWeight: 700,
        },
        button: {
            fontSize: "0.7rem",
            fontWeight: 700,
            textTransform: "uppercase",
        },
    },
});

export default theme;
