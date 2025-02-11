
function Newsletter() {
    return (
        <div className="w-full py-16 px-4 text-white">
            <div className="grid lg:grid-cols-3 mx-auto max-w-[1240px] px-5">
                <div className="lg:col-span-2 flex mt-7 flex-col">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your work flow?</h1>
                    <p className="text-[1rem]">Sign up to our newsletter and stay up to date</p>
                </div>  
                <div className="my-4 flex flex-col justify-center items-center">
                    <div className="flex lg:flex-row flex-col justify-between items-center w-full">
                        <input className="py-2 px-3 mx-3 flex w-full rounded-xl text-black bg-white" type="email" name="" id="" placeholder="Enter email"/>
                        <button className="bg-[#00df9a] text-[#000300] font-bold text-[1rem] py-2 px-3 rounded-xl my-6 mr-3 w-[180px] cursor-pointer hover:scale-110 duration-300">notify me</button>
                    </div>
                    <p className="mx-3">We care about the protection of your data. Read our <a className="text-[#00df9a] underline" href="">Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter