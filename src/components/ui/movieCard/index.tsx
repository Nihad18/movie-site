import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./movieCard.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { parseDate } from "@/lib/utils";
import { MovieResultType } from "@/types/MovieDataTypes";

const MovieCard: React.FC<MovieResultType> = ({ name, title, poster_path, first_air_date, release_date, adult, original_language }) => {
    return (
        <Link to='/order' className={styles.card}>
            <LazyLoadImage
                alt={`${name || title} Poster`}
                effect='blur'
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                className='h-full w-full'
            />
            <div className={styles.details}>
                <h4 className={styles.name}>{name || title}</h4>
                <p className={styles.date}>{parseDate(release_date || first_air_date)}</p>
                <p className={styles["age-limit"]}>{adult ? "18+" : "6+"}</p>
                <div className={styles.languages}>
                    {/* {languages.map((language, index) => (
                        <div key={index} className={styles.language}>{language.lang}</div>
                    ))} */}
                    <div className={styles.language}>{original_language.slice(0, 1).toUpperCase() + original_language.slice(1)}</div>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
