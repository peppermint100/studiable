import React from 'react'
import CafeCard from '../components/Card/CafeCard'
import NavbarFooterContainer from '../components/Container/NavbarFooterContainer'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Feature from '../types/Feature'

const HomePage = () => {
    return (
        <NavbarFooterContainer>
            <Jumbotron />
            <section className="bg-secondary">
                <div className="w-3/4 mx-auto p-5 grid grid-cols-3 gap-10">
                    <CafeCard 
                        cafeName="카페베네" 
                        cafeScore={5} 
                        americanoPrice={4000} 
                        likes={[1,2,3]}
                        cafeFeatures={[Feature.AIR_CONDITIONING, Feature.PARKING, Feature.SMOKING_ROOM]}
                        imageLocation={undefined}
                    />
                    <CafeCard 
                        cafeName="카페베네" 
                        cafeScore={5} 
                        americanoPrice={4000} 
                        likes={[1,2,3]}
                        cafeFeatures={[Feature.AIR_CONDITIONING, Feature.PARKING, Feature.SMOKING_ROOM]}
                        imageLocation={undefined}
                    />
                    <CafeCard 
                        cafeName="카페베네" 
                        cafeScore={5} 
                        americanoPrice={4000} 
                        likes={[1,2,3]}
                        cafeFeatures={[Feature.AIR_CONDITIONING, Feature.PARKING, Feature.SMOKING_ROOM]}
                        imageLocation={undefined}
                    />
                    <CafeCard 
                        cafeName="카페베네" 
                        cafeScore={5} 
                        americanoPrice={4000} 
                        likes={[1,2,3]}
                        cafeFeatures={[Feature.AIR_CONDITIONING, Feature.PARKING, Feature.SMOKING_ROOM]}
                        imageLocation={undefined}
                    />
                    <CafeCard 
                        cafeName="카페베네" 
                        cafeScore={5} 
                        americanoPrice={4000} 
                        likes={[1,2,3]}
                        cafeFeatures={[Feature.AIR_CONDITIONING, Feature.PARKING, Feature.SMOKING_ROOM]}
                        imageLocation={undefined}
                    />
                    <CafeCard 
                        cafeName="카페베네" 
                        cafeScore={5} 
                        americanoPrice={4000} 
                        likes={[1,2,3]}
                        cafeFeatures={[Feature.AIR_CONDITIONING, Feature.PARKING, Feature.SMOKING_ROOM]}
                        imageLocation={undefined}
                    />
                </div>
            </section>
        </NavbarFooterContainer>
    )
}
export default HomePage;
