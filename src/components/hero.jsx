import { ReactTyped } from "react-typed"

function Hero() {

    return (
        <div className="flex justify-center items-center text-white">
            <div className="max-w-[800px] mt-[-96px] h-screen flex flex-col justify-center items-center">
                <p className="text-[#00df9a] font-bold md:text-3xl sm:text-2xl text-[1rem] p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl md:py-4">Grow with data.</h1>
                <div className="flex items-center">
                    <p className="font-bold md:text-4xl sm:text-3xl text-xl p-2">Fast, flexible financing for</p>
                    <ReactTyped  
                    strings={['BTB', 'BTO', 'SASS']} 
                    typeSpeed={40} 
                    backSpeed={50} 
                    loop 
                    className="font-bold md:text-4xl sm:text-3xl text-xl p-2 opacity-50 underline" />
                </div>
                <p className="font-bold md:text-2xl text-[1rem] text-center opacity-50 px-5 md:py-2">
                    Monitor your data analytics to increase revenue for BTB, BTC, & SASS Platfroms
                </p>
                <button className="bg-[#00df9a] text-[#000300] font-bold md:text-xl text-[1rem] py-2 px-3 rounded-xl my-6 md:w-[200px] w-[140px] cursor-pointer hover:scale-120 duration-300">Get Started</button>
            </div>
        </div>
    )
}

export default Hero