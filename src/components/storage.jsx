import React from "react";

export default function StorageComponent() {
    return (
    <section id="storage" class="StorageBg flex flex-col items-center">
        <div className="text-center StorageF text-white pt-[10rem] justify-center items-center">
            <h1 className="text-[3rem] font-semibold">TYPES OF STORAGE</h1>
            <div className="mt-3 md:mt-10 w-full md:w-[60rem] text-center text-2xl p-4 md:text-4xl font-light font-sans">
                    <p>
                        Our enormous tankers are environmentally safe, highly specified and can attach spill containments to ensure you are compliant with health and safety regulations.
                    </p>
            </div>
        </div>
        <div className="md:flex md:flex-row pt-[2rem]">
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/FXcKy7z/Strg-Icon4.png" width={150} height={100}/>
                </a>
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/3pM98Ky/Strg-Icon1.png" width={150} height={100}/>
                </a>
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/tc7pyJ5/Strg-Icon2.png" width={150} height={100}/>
                </a>
                <a className=" text-[2rem] p-[5rem] text-start">
                    <img src="https://i.ibb.co/DDj7bDh/Strg-Icon3.png" width={150} height={100}/>
                </a>

            </div>
    </section>
    );
}