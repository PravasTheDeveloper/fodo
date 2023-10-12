import React from 'react'
import HomePage from './components/Home/HomePage'
import WelcomeSection from './components/Welcome/WelcomeSection'
import Offers from './components/Offers/Offers'
import Menu from './components/Menu/Menu'
import Testimonial from './components/Testomonial/Testimonial'
import Footer from './components/Footer/Footer'
import Head from 'next/head'
import Messnger from './components/Messenger/Messnger'



export default function index() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/icon.png" />
      </Head >
      <HomePage />
      <WelcomeSection />
      <Offers />
      <Menu />
      <Testimonial />
      <Footer />
      <Messnger />
    </>
  )
}
