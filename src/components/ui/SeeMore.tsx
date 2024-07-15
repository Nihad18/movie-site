import React from "react";
import { Link } from "react-router-dom";
import FilmCard from "./filmCard/FilmCard";
import { FilmListData } from "@/types/filmDataTypes";
interface SeeMoreProps {
    name: string;
    link: string
    data: FilmListData[]
}

const SeeMore: React.FC<SeeMoreProps> = ({ name, link, data }) => {
    return (
        <div className="pt pt-[87px]">
            <div className="container ">
                <div className="flex justify-between items-end mb-[49px]">
                    <h3 className="text-[25px] leading-normal font-medium">{name}</h3>
                    <Link className="bg-no-repeat bg-right flex gap-[10px] items-center font-semibold dark:text-gray" to={link}>see more
                        <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.8111 0.326048C11.4151 0.620219 11.4149 1.21303 11.8107 1.50745L17.6487 5.85L0.649999 5.85C0.291014 5.85 -2.99816e-07 6.14102 -2.84124e-07 6.5C-2.68432e-07 6.85899 0.291015 7.15 0.65 7.15L17.6488 7.15L11.8107 11.4925C11.4149 11.787 11.4151 12.3798 11.8111 12.674C12.0717 12.8675 12.4283 12.8675 12.6889 12.674L19.9194 7.30274C20.4576 6.90291 20.4576 6.09709 19.9194 5.69726L12.6889 0.326048C12.4283 0.132467 12.0717 0.132467 11.8111 0.326048Z"
                                fill="currentColor" />
                        </svg>
                    </Link>
                </div>
                <div className="flex gap-[26px]">
                    {
                        data.map((film, index) => (
                            <FilmCard key={index} {...film} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SeeMore