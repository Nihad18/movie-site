import { MovieDataType } from "./MovieDataTypes";

export type FooterLinksData = {
    title: string;
    links: { title: string; url: string }[];
};

export type OrderFormData = {
    nameSurname: string;
    email: string;
    cellPhone: string;
    payment: string;
};

export type SeeMoreProps = {
    name: string;
    link: string;
    data: MovieDataType | undefined;
};
