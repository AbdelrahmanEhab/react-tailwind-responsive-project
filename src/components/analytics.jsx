import laptopImg from '../assets/laptop.jpg'

function Analytics() {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] grid md:grid-cols-2 mx-auto">
                <img src={laptopImg} alt="/" className='w-[500px] mx-auto'/>
                <div className='flex flex-col justify-center px-4 sm:my-0 my-6'>
                    <p className='text-[#00df9a] font-bold md:text-2xl sm:text-xl text-[0.9rem]'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl md:py-2 py-1'>Manage Data Analytics Centrally</h1>
                    <p className='font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At natus voluptates fuga corporis hic consequuntur laborum eligendi quidem nostrum aut, optio dolores sint laboriosam ducimus dignissimos asperiores! Esse, provident illum!</p>
                    <button className="bg-[#000300] text-[#00df9a] font-bold md:text-xl text-[1rem] py-2 px-3 rounded-xl my-6 md:w-[200px] w-[140px] cursor-pointer hover:scale-120 duration-300 self-center">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics