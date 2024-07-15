import React, { createContext, useState, ReactNode } from "react";

interface SelectedSeats {
    rowId: number;
    seatId: number;
    row: string;
    seatNumber: number;
}

interface DataContextProps {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;

    activeCarouselIndex: number;
    setActiveCarouselIndex: React.Dispatch<React.SetStateAction<number>>;

    activeDate: number;
    setActiveDate: React.Dispatch<React.SetStateAction<number>>;

    activeTime: string;
    setActiveTime: React.Dispatch<React.SetStateAction<string>>;

    selectedSeats: SelectedSeats[];
    setSelectedSeats: React.Dispatch<React.SetStateAction<SelectedSeats[]>>;
}

interface DataProviderProps {
    children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({
    theme: "light",
    setTheme: () => {},

    activeCarouselIndex: 1,
    setActiveCarouselIndex: () => {},

    activeDate: 0,
    setActiveDate: () => {},

    activeTime: "",
    setActiveTime: () => {},

    selectedSeats: [],
    setSelectedSeats: () => {},
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"dark" | "light">((localStorage.getItem("theme") as "dark" | "light") || "light");
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(1);
    const [activeDate, setActiveDate] = useState<number>(0);
    const [activeTime, setActiveTime] = useState<string>("");
    const [selectedSeats, setSelectedSeats] = useState<SelectedSeats[]>([]);
    return (
        <DataContext.Provider
            value={{
                theme,
                setTheme,
                activeCarouselIndex,
                setActiveCarouselIndex,
                activeDate,
                setActiveDate,
                activeTime,
                setActiveTime,
                selectedSeats,
                setSelectedSeats,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
