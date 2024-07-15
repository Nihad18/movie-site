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
            <div className='sub-container '>
                <div className='text-[25px] font-medium text-gray-darker-alt2 dark:text-white '>Latest news</div>
                <div className='flex mt-[50px] items-center justify-between'>
                    <div className='w-[558px] h-[457px] relative flex items-end pl-[35px]'>
                        <div className='z-[2] relative'>
                            <div className="text-[20px] font-semibold text-white w-[314px] pb-[22px]">{arr[0].title}</div>
                            <div className="text-[15px] font-medium text-gray-lighter-alt5 w-[471px] pb-[52px]">{arr[0].desc}</div>
                        </div>
                        <img src={arr[0].img} className='absolute top-0 left-0 w-full h-full rounded-[5px] z-[1]' />
                    </div>
                    <div className='w-[472.3px] h-[400px]'>
                        {arr.slice(0, 4).map((item, index) => {
                            return (
                                <div key={index} className='flex items-center text-white pb-[36px] last:pb-0'>
                                    <div>
                                        <img src={item.img} className='w-[85.3px] h-[73px] mr-[23px] rounded-[5px]' />
                                    </div>
                                    <div>
                                        <div className='font-light text-[11px] italic text-black dark:text-white pb-[5px]'>{item.time}</div>
                                        <div className='font-semibold text-[12px] text-gray-normal-alt dark:text-gray-lightest-alt6'>
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
