import React from 'react'

import {Box} from "@material-ui/core";
import HomeSection from '../../components/landing/home/'
import AboutSection from "../../components/landing/about";
import Footer from "../../components/landing/footer";
import PricingBody from "../../components/landing/pricing/pricing_body";


export default function LandingPage() {


    return (



            <Box style={{overflow:'hidden'}}>
                <HomeSection/>
                <AboutSection />
                <PricingBody/>
                <Footer/>
            </Box>




    )
}