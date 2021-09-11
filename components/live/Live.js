/* eslint-disable react/prop-types */
import React from 'react'
import MeduimCards from '../cards/MeduimCards'
export default function Live ({ cards }) {
  console.log(cards, 'careds')
  return (
        <div>
<h2 className="text-4xl font-semibold pb-5"> Live  anywhere</h2>
<div className="flex  space-3 overflow-scroll scrollbar-hide p-4 ml-3 ">
{
      cards.map((item, index) => (<MeduimCards key = {index} img = {item.img} title = {item.title} />))
  }
</div>

        </div>
  )
}
