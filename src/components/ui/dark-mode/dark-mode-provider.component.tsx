"use client"

import {
    Context,
    createContext,
    PropsWithChildren,
    ReactElement,
    useCallback,
    useContext,
    useEffect,
    useMemo, useState
} from "react";

interface DarkModeContextProps {
    darkTheme: boolean;
    setDarkTheme: (value: boolean) => void;
    toggle: () => void;
}

const DarkModeContext: Context<DarkModeContextProps | undefined> = createContext<DarkModeContextProps | undefined>(undefined);

export function useDarkModeContext(): DarkModeContextProps {
    const context: DarkModeContextProps | undefined = useContext(DarkModeContext);

    if (!context) {
        throw new Error("useDarkModeContext must be used within the DarkModeProvider");
    }

    return context;
}

export function DarkModeProvider(props: Readonly<PropsWithChildren>): ReactElement {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);

    useEffect(() => {
        setDarkTheme(localStorage.getItem("darkTheme") === "true");
    }, []);

    const handleSetDarkTheme = useCallback((value: boolean) => {
        setDarkTheme(value);
        localStorage.setItem("darkTheme", String(value));
    }, []);

    const value = useMemo(() => (
        {
            darkTheme,
            setDarkTheme: handleSetDarkTheme,
            toggle: (): void => {handleSetDarkTheme(!darkTheme)}
        }
    ), [handleSetDarkTheme, darkTheme]);

    return (
        <DarkModeContext.Provider value={value}>
            {props.children}
        </DarkModeContext.Provider>
    );
}