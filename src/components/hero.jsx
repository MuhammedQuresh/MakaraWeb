import React from "react";

export default function HeroComponent() {
    return (
<section class="bgImg text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    
    <div className="mx-auto max-w-3xl text-center ">
      <h1
        className=" text-white bg-clip-text font-minion-pro-bold text-8xl sm:text-[6rem] "
      >
        MAKARA TANK

        <span className="sm:block font-minion-pro-bold"> by AKI </span>
      </h1>

      <p className="mx-auto pt-8 pb-6 mt-4 max-w-3xl md:text-3xl  font-semibold">
        Our monster provide legendary liquid storage solutions
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block text-xl w-full rounded-3xl border bg-white px-12 py-3  font-medium text-[#1FA8AA] hover:shadow-xl focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Discover
        </a>

      </div>
    </div>
  </div>
</section>
    );
}