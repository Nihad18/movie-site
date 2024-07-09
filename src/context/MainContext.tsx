import React, { createContext, useState, ReactNode } from 'react';

interface DataContextProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

interface DataProviderProps {
    children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({
    theme: 'light',
    setTheme: () => { },
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"dark" | "light">(localStorage.getItem("theme") as "dark" | "light" || "light");

    return (
        <DataContext.Provider value={{ theme, setTheme }}>
            {children}
        </DataContext.Provider>
    );
};
