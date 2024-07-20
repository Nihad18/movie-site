import React from "react";
import { Link } from "react-router-dom";
import FilmCard from "./filmCard/FilmCard";
import { FilmDataType } from "@/types/filmDataTypes";

interface SeeMoreProps {
    name: string;
    link: string;
    data: FilmDataType | undefined;
}

const SeeMore: React.FC<SeeMoreProps> = ({ name, link, data }) => {
    return (
        <div className='pt pt-[87px]'>
            <div className='container'>
                <div className='mb-[49px] flex items-end justify-between'>
                    <h3 className='text-[25px] font-medium leading-normal'>{name}</h3>
                    <Link className='dark:text-gray flex items-center gap-[10px] bg-right bg-no-repeat font-semibold' to={link}>
                        see more
                        <svg width='21' height='13' viewBox='0 0 21 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M11.8111 0.326048C11.4151 0.620219 11.4149 1.21303 11.8107 1.50745L17.6487 5.85L0.649999 5.85C0.291014 5.85 -2.99816e-07 6.14102 -2.84124e-07 6.5C-2.68432e-07 6.85899 0.291015 7.15 0.65 7.15L17.6488 7.15L11.8107 11.4925C11.4149 11.787 11.4151 12.3798 11.8111 12.674C12.0717 12.8675 12.4283 12.8675 12.6889 12.674L19.9194 7.30274C20.4576 6.90291 20.4576 6.09709 19.9194 5.69726L12.6889 0.326048C12.4283 0.132467 12.0717 0.132467 11.8111 0.326048Z'
                                fill='currentColor'
                            />
                        </svg>
                    </Link>
                </div>
                <div className='grid grid-cols-1 min-[480px]:grid-cols-2 min-[880px]:grid-cols-4 gap-[26px]'>{data?.results.slice(0, 4).map((film, index) => <FilmCard key={index} {...film} />)}</div>
            </div>
        </div>
    );
};

export default SeeMore;
