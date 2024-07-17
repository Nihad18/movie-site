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
            <div className='sub-container'>
                <div className='text-[25px] font-medium text-gray-darker-alt2 dark:text-white'>Latest news</div>
                <div className='mt-[50px] flex items-center justify-between'>
                    <div className='relative flex h-[457px] w-[558px] items-end pl-[35px]'>
                        <div className='relative z-[2]'>
                            <div className='w-[314px] pb-[22px] text-[20px] font-semibold text-white'>{arr[0].title}</div>
                            <div className='w-[471px] pb-[52px] text-[15px] font-medium text-gray-lighter-alt5'>{arr[0].desc}</div>
                        </div>
                        <img src={arr[0].img} className='absolute left-0 top-0 z-[1] h-full w-full rounded-[5px]' />
                    </div>
                    <div className='h-[400px] w-[472.3px]'>
                        {arr.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className='flex items-center pb-[36px] text-white last:pb-0'>
                                    <div>
                                        <img src={item.img} className='mr-[23px] h-[73px] w-[85.3px] rounded-[5px]' />
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
