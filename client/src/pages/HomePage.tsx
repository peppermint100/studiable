import React, { useEffect } from 'react'
import getAuth from '../api/Auth/getAuth'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import SearchBar from '../components/Jumbotron/SearchBar'
import Navbar from '../components/Navbar/Navbar'
import NavbarFooterWrapper from '../components/Wrappers/NavbarFooterWrapper'

const HomePage = () => {
    return (
        <NavbarFooterWrapper>
            <div>
                <Jumbotron />
            </div>
        </NavbarFooterWrapper>
    )
}

export default HomePage;
