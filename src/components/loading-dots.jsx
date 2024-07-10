
const Loader = () => {
    const circleCommonClasses = 'h-8 w-8 bg-current   rounded-full';

    return (
        <div className='flex'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce bg-black `}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200 bg-black`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400 bg-black`}></div>
        </div>
    );
};

export default Loader;