import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./aboutUs.module.scss";
const AboutUs = () => {
    return (
        <section className={`dark:shadow-about-us-dark shadow-about-us-light mb-[110px]`}>
            <div className='sub-container'>
                <div className='flex items-center justify-between'>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            About us
                            <em className={styles.date}>2008-2018</em>
                        </h3>
                        <div className={styles.description}>
                            <p className='dark:text-gray-lighter-alt5 '>
                                According to the State Program for the Development of Azerbaijani Cinema for 2008-2018, Nizami, one of the oldest
                                cinemas in the country, was inaugurated on December 27, 2011 after major reconstruction. In addition to the current
                                repertoire of films, which includes the most interesting new films, presentations of national films...
                            </p>
                            <svg width='21' height='13' viewBox='0 0 21 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M11.8111 0.326048C11.4151 0.620219 11.4149 1.21303 11.8107 1.50745L17.6487 5.85L0.649999 5.85C0.291014 5.85 -2.99816e-07 6.14102 -2.84124e-07 6.5C-2.68432e-07 6.85899 0.291015 7.15 0.65 7.15L17.6488 7.15L11.8107 11.4925C11.4149 11.787 11.4151 12.3798 11.8111 12.674C12.0717 12.8675 12.4283 12.8675 12.6889 12.674L19.9194 7.30274C20.4576 6.90291 20.4576 6.09709 19.9194 5.69726L12.6889 0.326048C12.4283 0.132467 12.0717 0.132467 11.8111 0.326048Z'
                                    fill='currentColor'
                                />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <LazyLoadImage
                            alt={`about-us-image`}
                            effect='opacity'
                            src={"/about-us-bg-image.png"}
                            className='inline-block w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
