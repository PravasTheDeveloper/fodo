import React from 'react'
import HomePage from './components/Home/HomePage'
import WelcomeSection from './components/Welcome/WelcomeSection'
import Offers from './components/Offers/Offers'
import Menu from './components/Menu/Menu'
import Testimonial from './components/Testomonial/Testimonial'
import Footer from './components/Footer/Footer'

export default function index() {
  return (
    <>
      <HomePage />
      <WelcomeSection />
      <Offers />
      <Menu />
      <Testimonial />
      <Footer />
    </>
  )
}
