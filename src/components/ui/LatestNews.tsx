import Img from "/movie-poster.png";
const LatestNews = () => {
    const arr = [
        {
            title: "New American films on the screen of Nizami Cinema Center",
            desc: `US-produced "Independence Day: Revival" at Nizami Cinema Center. 
            "Neighbours. 2 in wartime ”films have been shown.
             "Independence Day: Revival" is based on a screenplay by Nicholas Wright 
             and directed by Roland Emmerich in the genres of science fiction, adventure
              and war. Slogan: “We had 20 years to prepare.`,
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
        {
            title: "New American films on the screen of Nizami Cinema Center",
            time: "25.06.2022",
            img: Img,
        },
    ];
    return (
        <section className='pb-[101px]'>
            <div className='px-4 sub-container lg:px-0'>
                <div className='text-[25px] font-medium text-gray-darker-alt2 dark:text-white'>Latest news</div>
                <div className='mt-[50px] flex flex-col items-center justify-between lg:flex-row'>
                    <div className='relative flex h-[304px] w-full items-end sm:h-[457px] sm:w-[558px] lg:pl-[35px]'>
                        <div className='relative z-[2]'>
                            <div className='max-w-[314px] pb-[22px] text-[16px] font-semibold text-white sm:text-[20px]'>{arr[0].title}</div>
                            <div className='max-w-[471px] pb-[52px] text-[12px] font-medium text-gray-lighter-alt5 sm:text-[15px]'>{arr[0].desc}</div>
                        </div>
                        <img src={arr[0].img} className='absolute left-0 top-0 z-[1] h-full w-full rounded-[5px] bg-cover' />
                    </div>
                    <div className='mt-8 h-[400px] w-full sm:w-[472.3px] lg:mt-0'>
                        {arr.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className='flex items-center pb-[36px] text-white last:pb-0'>
                                    <div>
                                        <img src={item.img} className='mr-[23px] h-[73px] w-[85.3px] rounded-[5px] bg-cover' />
                                    </div>
                                    <div>
                                        <div className='pb-[5px] text-[11px] font-light italic text-black dark:text-white'>{item.time}</div>
                                        <div className='text-[12px] font-semibold text-gray-normal-alt dark:text-gray-lightest-alt6'>
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
