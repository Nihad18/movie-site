import { FooterLinksData } from "@/types/Common";
import { SeatsData } from "@/types/SeatDataTypes";
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

export function parseDate(inputDate: string | undefined) {
    if (!inputDate) return "";
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];

    return `${day} ${month}`;
}

export const currentYear = new Date().getFullYear();

export const years = Array.from({ length: currentYear - 1970 + 1 }, (_, i) => currentYear - i);

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const footerLinks: FooterLinksData[] = [
    {
        title: "Profile",
        links: [
            { title: "FAQ's", url: "#" },
            { title: "Pricing plans", url: "#" },
            { title: "Order tracking", url: "#" },
            { title: "Returns", url: "#" },
        ],
    },
    {
        title: "Recent Posts",
        links: [
            { title: "Touch of uniqueness", url: "#" },
            { title: "Offices you won’t forget", url: "#" },
            { title: "Cicilan", url: "#" },
        ],
    },
    {
        title: "CUSTOMER",
        links: [
            { title: "Help & contact us", url: "#" },
            { title: "Return", url: "#" },
            { title: "Online stores", url: "#" },
            { title: "Terms & cordition", url: "#" },
        ],
    },
];

export const seatData : SeatsData = [
    {
        rowId: 1,
        row: "G",
        seats: [
            { seatId: 1, seatNumber: 1, status: "available" },
            { seatId: 2, seatNumber: 2, status: "booked" },
            { seatId: 3, seatNumber: 3, status: "available" },
            { seatId: 4, seatNumber: 4, status: "available" },
            { seatId: 5, seatNumber: 5, status: "booked" },
            { seatId: 6, seatNumber: 6, status: "available" },
        ],
    },
    {
        rowId: 2,
        row: "F",
        seats: [
            { seatId: 7, seatNumber: 1, status: "booked" },
            { seatId: 8, seatNumber: 2, status: "booked" },
            { seatId: 9, seatNumber: 3, status: "available" },
            { seatId: 10, seatNumber: 4, status: "available" },
            { seatId: 11, seatNumber: 5, status: "booked" },
            { seatId: 12, seatNumber: 6, status: "available" },
            { seatId: 13, seatNumber: 7, status: "available" },
            { seatId: 14, seatNumber: 8, status: "booked" },
        ],
    },
    {
        rowId: 3,
        row: "E",
        seats: [
            { seatId: 15, seatNumber: 1, status: "booked" },
            { seatId: 16, seatNumber: 2, status: "booked" },
            { seatId: 17, seatNumber: 3, status: "booked" },
            { seatId: 18, seatNumber: 4, status: "booked" },
            { seatId: 19, seatNumber: 5, status: "booked" },
            { seatId: 20, seatNumber: 6, status: "available" },
            { seatId: 21, seatNumber: 7, status: "available" },
            { seatId: 22, seatNumber: 8, status: "available" },
            { seatId: 23, seatNumber: 9, status: "available" },
            { seatId: 24, seatNumber: 10, status: "available" },
        ],
    },
    {
        rowId: 4,
        row: "D",
        seats: [
            { seatId: 25, seatNumber: 1, status: "available" },
            { seatId: 26, seatNumber: 2, status: "booked" },
            { seatId: 27, seatNumber: 3, status: "available" },
            { seatId: 28, seatNumber: 4, status: "booked" },
            { seatId: 29, seatNumber: 5, status: "available" },
            { seatId: 30, seatNumber: 6, status: "booked" },
            { seatId: 31, seatNumber: 7, status: "available" },
            { seatId: 32, seatNumber: 8, status: "booked" },
            { seatId: 33, seatNumber: 9, status: "available" },
            { seatId: 34, seatNumber: 10, status: "booked" },
            { seatId: 35, seatNumber: 10, status: "booked" },
            { seatId: 36, seatNumber: 10, status: "booked" },
        ],
    },
    {
        rowId: 5,
        row: "C",
        seats: [
            { seatId: 37, seatNumber: 3, status: "available" },
            { seatId: 38, seatNumber: 4, status: "booked" },
            { seatId: 39, seatNumber: 5, status: "available" },
            { seatId: 40, seatNumber: 6, status: "booked" },
            { seatId: 41, seatNumber: 7, status: "available" },
            { seatId: 42, seatNumber: 8, status: "booked" },
            { seatId: 43, seatNumber: 9, status: "available" },
            { seatId: 44, seatNumber: 10, status: "booked" },
            { seatId: 45, seatNumber: 10, status: "booked" },
            { seatId: 46, seatNumber: 10, status: "booked" },
            { seatId: 47, seatNumber: 10, status: "booked" },
            { seatId: 48, seatNumber: 10, status: "booked" },
        ],
    },
    {
        rowId: 6,
        row: "B",
        seats: [
            { seatId: 49, seatNumber: 5, status: "available" },
            { seatId: 50, seatNumber: 6, status: "booked" },
            { seatId: 51, seatNumber: 7, status: "available" },
            { seatId: 52, seatNumber: 8, status: "booked" },
            { seatId: 53, seatNumber: 9, status: "available" },
            { seatId: 54, seatNumber: 10, status: "booked" },
            { seatId: 55, seatNumber: 10, status: "booked" },
            { seatId: 56, seatNumber: 10, status: "booked" },
            { seatId: 57, seatNumber: 10, status: "booked" },
            { seatId: 58, seatNumber: 10, status: "booked" },
            { seatId: 59, seatNumber: 10, status: "booked" },
            { seatId: 60, seatNumber: 10, status: "booked" },
        ],
    },
    {
        rowId: 7,
        row: "A",
        seats: [
            { seatId: 61, seatNumber: 7, status: "available" },
            { seatId: 62, seatNumber: 8, status: "booked" },
            { seatId: 63, seatNumber: 9, status: "available" },
            { seatId: 64, seatNumber: 10, status: "booked" },
            { seatId: 65, seatNumber: 10, status: "booked" },
            { seatId: 66, seatNumber: 10, status: "booked" },
            { seatId: 67, seatNumber: 10, status: "booked" },
            { seatId: 68, seatNumber: 10, status: "booked" },
            { seatId: 69, seatNumber: 10, status: "booked" },
            { seatId: 70, seatNumber: 10, status: "booked" },
            { seatId: 71, seatNumber: 10, status: "booked" },
            { seatId: 72, seatNumber: 10, status: "booked" },
        ],
    },
];

export const dates = [21, 22, 23, 24, 25, 26, 27];

export const times = ["13:15", "15:15", "18:15", "20:30", "22:30"];
