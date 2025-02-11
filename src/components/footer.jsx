import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaChrome } from "react-icons/fa";






function Footer() {
    return (
        <div className="w-full py-16 px-4 text-white">
            <div className="max-w-[1240px] flex lg:flex-row flex-col mx-auto">
                <div className="flex flex-col items-start justify-center lg:w-[33%] lg:px-5 px-15">
                    <h1 className="text-[#00df9a] font-bold text-3xl">REACT.</h1>
                    <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, sunt nobis suscipit modi a temporibus dolore obcaecati. Sit repudiandae quam voluptatem at, vitae alias ad, omnis saepe laboriosam unde odit!</p>
                    <div className="flex justify-between">
                        <FaSquareFacebook size={30} className="me-5"/>
                        <FaInstagram size={30} className="mx-5"/>
                        <FaTwitterSquare size={30} className="mx-5"/>
                        <FaSquareGithub size={30} className="mx-5"/>
                        <FaChrome size={30} className="mx-5"/>
                    </div>
                </div>
                <div className="flex justify-between col-span-2 items-center lg:w-[67%] px-15 mt-5">
                    <div>
                        <h1 className="text-gray-300 text-bold text-lg">Solution</h1>
                        <ul>
                            <li>Analytics</li>
                            <li>Marketing</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-gray-300 text-bold text-lg">Suppot</h1>
                        <ul>
                            <li>Pricing</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                            <li>API Status</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-gray-300 text-bold text-lg">Company</h1>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className="-translate-y-3">
                        <h1 className="text-gray-300 text-bold text-lg">Legal</h1>
                        <ul>
                            <li>Claim</li>
                            <li>Policy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer