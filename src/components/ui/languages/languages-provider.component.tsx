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

interface LanguageContextProps {
    language: string;
    setLanguage: (value: string) => void;
    toggle: (newLanguage: string) => void;
}

const LanguageContext: Context<LanguageContextProps | undefined> = createContext<LanguageContextProps | undefined>(undefined);

export function useLanguageContext(): LanguageContextProps {
    const context: LanguageContextProps | undefined = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguageContext must be used within the LanguagesProvider");
    }

    return context;
}

export function LanguagesProvider(props: Readonly<PropsWithChildren>): ReactElement {
    const [language, setLanguage] = useState<string>("english");

    useEffect(() => {
        const lang = localStorage.getItem("language");
        if (lang) setLanguage(lang);
    }, []);

    const handleSetLanguage = useCallback((value: string) => {
        setLanguage(value);
        localStorage.setItem("language", value);
    }, []);

    const value = useMemo(() => (
        {
            language,
            setLanguage: handleSetLanguage,
            toggle: (newLanguage: string): void => {handleSetLanguage(newLanguage)}
        }
    ), [handleSetLanguage, language]);

    return (
        <LanguageContext.Provider value={value}>
            {props.children}
        </LanguageContext.Provider>
    );
}