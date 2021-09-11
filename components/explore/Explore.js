/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import SmallCard from '../cards/SmallCard'

function Explore ({ explore }) {
  console.log(explore, 'from other component ')
  return (
        <div>
        <h2 className="text-4xl font-semibold pb-5"> Explore Nearby</h2>
        {/* pull data from */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {explore?.map((item, index) => (<SmallCard key = {index} img = {item.img} distance={item.distance} location={item.location} />))}
        </div>

        </div>
  )
}

export default Explore
