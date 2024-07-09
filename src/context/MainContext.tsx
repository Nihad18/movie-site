import React, { createContext, useState, ReactNode } from "react";

interface DataContextProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;

    activeCarouselIndex: number;
    setActiveCarouselIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface DataProviderProps {
    children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({
    theme: "light",
    setTheme: () => {},

    activeCarouselIndex: 1,
    setActiveCarouselIndex: () => {},
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"dark" | "light">((localStorage.getItem("theme") as "dark" | "light") || "light");
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(1);
    return <DataContext.Provider value={{ theme, setTheme, activeCarouselIndex, setActiveCarouselIndex }}>{children}</DataContext.Provider>;
};
