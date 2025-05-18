import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize isDarkMode from localStorage or system preference
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") return true;
        if (storedTheme === "light") return false;

        // If no stored theme, use system preference
        return window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
            ? true
            : false;
    });

    useEffect(() => {
        // Add or remove 'dark' class on html element
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Save theme in localStorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
