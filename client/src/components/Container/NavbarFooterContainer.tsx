import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

interface Props {
    children: any;
}

const NavbarFooterContainer: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <main>
                { children }
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default NavbarFooterContainer
