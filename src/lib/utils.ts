import { FooterLinksData } from "@/types/common";
import { FilmListData } from "@/types/filmDataTypes";
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

export const filmList: FilmListData[] = [
    {
        image: "https://image.tmdb.org/t/p/original//gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        name: "Kingdom of the Planet of the Apes",
        date: "20 April",
        ageLimit: "16+",
        languages: [{ lang: "En" }, { lang: "Ru" }],
    },
    {
        image: "https://image.tmdb.org/t/p/original//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        name: "Avatar: The Way of Water",
        date: "16 December",
        ageLimit: "12+",
        languages: [{ lang: "En" }, { lang: "Fr" }],
    },
    {
        image: "https://cdnb.artstation.com/p/assets/images/images/046/231/993/large/nima-neemz-nakhshab-dominion-final.jpg?1644599731",
        name: "Jurassic World Dominion",
        date: "10 June",
        ageLimit: "13+",
        languages: [{ lang: "En" }, { lang: "Es" }],
    },
    {
        image: "https://image.tmdb.org/t/p/original//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        name: "Spider-Man: No Way Home",
        date: "17 December",
        ageLimit: "13+",
        languages: [{ lang: "En" }],
    },
];

export const filmList2: FilmListData[] = [
    {
        image: "https://i.ebayimg.com/images/g/zRAAAOSwvaJgJSg1/s-l1600.jpg",
        name: "The Batman",
        date: "4 March",
        ageLimit: "15+",
        languages: [{ lang: "En" }, { lang: "De" }],
    },
    {
        image: "https://image.tmdb.org/t/p/original//9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
        name: "Doctor Strange in the Multiverse of Madness",
        date: "6 May",
        ageLimit: "13+",
        languages: [{ lang: "En" }, { lang: "It" }],
    },
    {
        image: "https://image.tmdb.org/t/p/original//yZevl2vHQgmosfwUdVNzviIfaWS.jpg",
        name: "The Flash",
        date: "3 November",
        ageLimit: "14+",
        languages: [{ lang: "En" }, { lang: "Pt" }],
    },
    {
        image: "https://image.tmdb.org/t/p/original//7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        name: "Aquaman and the Lost Kingdom",
        date: "16 December",
        ageLimit: "12+",
        languages: [{ lang: "En" }],
    },
];

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