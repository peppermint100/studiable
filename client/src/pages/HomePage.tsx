import React from 'react'
import CafeInfo from '../components/Cafe/CafeInfo'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import NavbarFooterWrapper from '../components/Wrappers/NavbarFooterWrapper'

const HomePage = () => {
    return (
        <NavbarFooterWrapper>
            <div>
                <Jumbotron />
                <CafeInfo />
            </div>
        </NavbarFooterWrapper>
    )
}

export default HomePage;
