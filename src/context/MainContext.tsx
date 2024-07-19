import { seatData } from "@/lib/utils";
import React, { createContext, useState, ReactNode } from "react";
import { SeatsData, SelectedSeatWithRow } from "@/types/seatDataTypes";
interface DataContextProps {
    theme: string;
    changeTheme: () => void;

    activeCarouselIndex: number;
    setActiveCarouselIndex: React.Dispatch<React.SetStateAction<number>>;

    activeDate: number;
    setActiveDate: React.Dispatch<React.SetStateAction<number>>;

    activeTime: string;
    setActiveTime: React.Dispatch<React.SetStateAction<string>>;

    seats: SeatsData;
    setSeats: React.Dispatch<React.SetStateAction<SeatsData>>;

    selectedSeats: SelectedSeatWithRow[];
    setSelectedSeats: React.Dispatch<React.SetStateAction<SelectedSeatWithRow[]>>;
}

interface DataProviderProps {
    children: ReactNode;
}

export const DataContext = createContext<DataContextProps>({
    theme: "light",
    changeTheme: () => {},

    activeCarouselIndex: 1,
    setActiveCarouselIndex: () => {},

    activeDate: 0,
    setActiveDate: () => {},

    activeTime: "",
    setActiveTime: () => {},

    seats: [],
    setSeats: () => {},

    selectedSeats: [],
    setSelectedSeats: () => {},
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<"dark" | "light">((localStorage.getItem("theme") as "dark" | "light") || "light");
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(1);
    const [activeDate, setActiveDate] = useState<number>(0);
    const [activeTime, setActiveTime] = useState<string>("");
    const [seats, setSeats] = useState<SeatsData>(seatData);
    const [selectedSeats, setSelectedSeats] = useState<SelectedSeatWithRow[]>([]);
    const changeTheme = () => {
        setTheme((prev) => (prev == "dark" ? "light" : "dark"));
        localStorage.setItem("theme", theme == "light" ? "dark" : "light");
    };
    return (
        <DataContext.Provider
            value={{
                theme,
                changeTheme,
                activeCarouselIndex,
                setActiveCarouselIndex,
                activeDate,
                setActiveDate,
                activeTime,
                setActiveTime,
                seats,
                setSeats,
                selectedSeats,
                setSelectedSeats,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
