import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'
import Layout from '../components/Layout/Layout'

function Landingpage() {
  return (
    <>
    <Layout>
    <HeroSection/>
    <Services/>
    <Trusted/>
    </Layout>
    </>
  )
}

export default Landingpage