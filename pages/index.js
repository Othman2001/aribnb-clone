/* eslint-disable react/prop-types */
import React from 'react'
import Head from 'next/head'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Explore from '../components/explore/Explore'
import Live from '../components/live/Live'
import LargeCards from '../components/cards/LargeCards'
import Footer from '../components/footer/Footer'
export default function Home ({ exploreData, cardsData }) {
  console.log(cardsData, 'cards')
  return (
    <div>
      <Head>
        <title>
          lunar strategy For Hotel Reservation      </title>
       
      </Head>
               {/* header */}
               <Header />
               {/* banner */}
               <Banner />
               {/* explore */}
                  <main className="max-w-7xl mx-auto px-8 sm:px-16">
                    <section className="pt-6">
                    <Explore explore = {exploreData} />

                    </section>
                    <section className="pt-6">
                      <Live cards = {cardsData} />
                    </section>
                    <section className="pt-6">
                          <LargeCards img = "https://links.papareact.com/4cj" title = "The Greatest OutDoors" description = "Wishlust curtaed by Airbn" buttonText = "get inspired" />
                       </section>
                  </main>
                  <Footer />
    </div>
  )
}
export async function getStaticProps () {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json())
  const cardsData = await fetch('https://links.papareact.com/zp1').then(res => res.json())
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
