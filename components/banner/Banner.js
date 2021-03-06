import React from 'react'
import Image from 'next/image'
function Banner () {
  return (
        <div className="relative h-[400px] sm:h-[500px] lg:h[700px] xl:h[800px] 2xl:h-[900px] ">
        <Image src = "https://links.papareact.com/0fm" layout = "fill" objectFit="cover"/>
       <div className="absolute top-1/2 w-full text-center">
           {/* on small screens be small text but otherwise be large */}
           <p className="text-sm sm:text-lg ">Best Reservation Service You Can Find </p>
           <button className="text-purble-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"> start Reservation </button>
       </div>
        </div>
  )
}

export default Banner
