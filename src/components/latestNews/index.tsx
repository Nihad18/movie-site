import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./latestNews.module.scss";
import { latestNewsData } from "@/lib/utils";

const LatestNews = () => {
    return (
        <section className='pb-[101px]'>
            <div className={styles["latest-news"]}>
                <div className={`${styles["latest-news-text"]} text-gray-darker-alt2 dark:text-white`}>Latest news</div>
                <div className={`${styles["latest-news-container"]}`}>
                    <div className={`${styles["main-news"]}`}>
                        <div className='relative z-[2]'>
                            <div className={`${styles["main-news-title"]}`}>{latestNewsData[0].title}</div>
                            <div className={`${styles["main-news-desc"]}`}>{latestNewsData[0].desc}</div>
                        </div>
                        <div className={styles.image}>
                            <LazyLoadImage alt={`image`} effect='opacity' src={latestNewsData[0].img} className='h-full w-full' />
                        </div>
                    </div>
                    <div className={`${styles["other-news"]}`}>
                        {latestNewsData.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className='flex items-center pb-[36px] text-white last:pb-0 sm:pb-0 lg:pb-[36px]'>
                                    <div className={styles.images}>
                                        <LazyLoadImage alt={`image`} effect='opacity' src={item.img} className='h-full w-full' />
                                    </div>
                                    <div>
                                        <div className={`${styles["other-news-time"]} text-black dark:text-white`}>{item.time}</div>
                                        <div className={`${styles["other-news-title"]} text-gray-normal-alt dark:text-gray-lightest-alt6`}>
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
