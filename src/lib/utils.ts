import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(inputDate: Date) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = new Date(inputDate);
    const year = date.getFullYear();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];

    return `${day} ${month} ${year}`;
}

export const currentYear = new Date().getFullYear();
export const years = Array.from({ length: currentYear - 1970 + 1 }, (_, i) => currentYear - i);

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
