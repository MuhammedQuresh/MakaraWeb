import React from "react";
import DashIcon from '/public/DashIcon.png'

export default function Intro() {
    return (
        <div className="pt-[4rem] text-center bg-white">
            <div className="flex flex-col items-center">
                <h1 className="font-minion-pro-bold text-4xl md:text-5xl text-[#1FA8AA]">LIQUID STORAGE TANKS</h1>

                <div className="mt-3 md:mt-10 w-full md:w-[60rem] text-center text-2xl p-4 md:text-4xl font-light">
                    <p className='pb-5'>
                        Makara tankers are massive mobile storage tankers that are capable of safely storing up to 72,000 litres of hazardous or waste liquids.
                    </p>
                    <p>
                        Our enormous tankers are environmentally safe, highly specified and can attach spill containments to ensure you are compliant with health and safety regulations.
                    </p>
                </div>
                <a className=" pt-[4rem]">
                   <img src='https://i.ibb.co/s25Rzj6/dashIcon.jpg' alt="Dash Icon" width={100} height={100} />
                </a>


            <div className="md:flex md:flex-row pt-[5rem]">
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/LPxPQMP/Capacity-Icon.png" width={150} height={100}/>
                    <h1 className="pt-8 font-bold">
                        Capacity <br/><span className=" font-light">of up to 86,000 litres</span>
                    </h1>
                </a>
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/bNw7MXy/Reduce-Icon.png" width={150} height={100}/>
                    <h1 className="pt-8 font-bold">
                        Reduce <br/><span className=" font-light">maintenanace cost</span>
                    </h1>
                </a>
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/Qk6mKzv/Equipment-Icon.png" width={150} height={100}/>
                    <h1 className="pt-8 font-bold">
                    <span className="font-light">State of the Art</span> <br/>Equipment 
                    </h1>
                </a>
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/PWCWYM9/tempIcon.png" width={150} height={100}/>
                    <h1 className="pt-8 font-bold">
                        Temperature Control <br/><span className="font-light">Limits</span>
                    </h1>
                </a>
            </div>
            </div>

        </div>
    );
}
