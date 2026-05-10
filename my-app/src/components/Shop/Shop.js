import React from 'react'
import HeroBanner from '../Hero/HeroBanner'
import WomenPopular from '../Populars/WomenPopular'
import Offer from '../Offers/Offer'
import NewCollections from '../NewCollections/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <HeroBanner />
        <WomenPopular />
        <Offer />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Shop