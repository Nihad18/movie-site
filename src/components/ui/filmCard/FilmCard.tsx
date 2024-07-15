import { LazyLoadImage } from "react-lazy-load-image-component"
import styles from "./filmCard.module.scss";
import React from "react";
import { FilmListData } from "@/types/filmDataTypes";

const FilmCard: React.FC<FilmListData> = ({ image, name, date, ageLimit, languages }) => {

    return (
        <div className={styles.card} >
            <LazyLoadImage
                alt={`${name} Poster`}
                effect='blur'
                src={image}
                className="w-full h-full"
            />
            <div className={styles.details}>
                <h4 className={styles.name}>{name}</h4>
                <p className={styles.date}>{date}</p>
                <p className={styles['age-limit']}>{ageLimit}</p>
                <div className={styles.languages}>
                    {languages.map((language, index) => (
                        <div key={index} className={styles.language}>{language.lang}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilmCard