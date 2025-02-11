import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'


function Cards() {

    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="grid lg:grid-cols-3 max-w-[1240px] gap-8 mx-auto px-10">
                <div className="w-full flex flex-col justify-center items-center p-4 my-4 shadow-xl rounded-xl hover:scale-110 duration-300">
                    <img src={single} alt="" className='w-20 -translate-y-8'/>
                    <h2 className='font-bold text-2xl mt-2'>Single User</h2>
                    <p className='font-bold text-4xl my-4'>$149</p>
                    <div className="flex flex-col w-full text-center my-3">
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>500 GB Storage</p>
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>1 Granted User</p>
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] text-[#000300] font-bold text-[1rem] py-2 px-3 rounded-xl my-6 w-[180px] cursor-pointer hover:scale-110 duration-300'>Start Trail</button>
                </div>
                <div className="w-full flex flex-col justify-center items-center p-4 my-4 shadow-xl rounded-xl hover:scale-110 duration-300 lg:scale-105">
                    <img src={double} alt="" className='w-20 -translate-y-8'/>
                    <h2 className='font-bold text-2xl mt-2'>Double User</h2>
                    <p className='font-bold text-4xl my-4'>$199</p>
                    <div className="flex flex-col w-full text-center my-3">
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>500 GB Storage</p>
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>1 Granted User</p>
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#000300] text-[#00df9a] font-bold text-[1rem] py-2 px-3 rounded-xl my-6 w-[180px] cursor-pointer hover:scale-120 duration-300'>Start Trail</button>
                </div>
                <div className="w-full flex flex-col justify-center items-center p-4 my-4 shadow-xl rounded-xl hover:scale-110 duration-300">
                    <img src={triple} alt="" className='w-20 -translate-y-8'/>
                    <h2 className='font-bold text-2xl mt-2'>Triple User</h2>
                    <p className='font-bold text-4xl my-4'>$249</p>
                    <div className="flex flex-col w-full text-center my-3">
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>500 GB Storage</p>
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>1 Granted User</p>
                        <p className='border-b border-gray-300 text-md py-2 mx-8 font-medium'>Send up to 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] text-[#000300] font-bold text-[1rem] py-2 px-3 rounded-xl my-6 w-[180px] cursor-pointer hover:scale-110 duration-300'>Start Trail</button>
                </div>
                
            </div>
        </div>
    )
}

export default Cards