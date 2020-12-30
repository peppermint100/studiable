import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CafeDataTypeClient from '../../types/Cafe/CafeDataTypeClient';
import FeatureIndicator from '../Indicator/FeatureIndicator';
import defaultCafeImg from "./../../assets/default2.jpg";
import ratingstar from "./../../assets/ratingstar.svg";

const CafeCard: React.FC<Partial<CafeDataTypeClient>> = ({
    cafeName,
    cafeContent,
    cafeScore,
    americanoPrice,
    cafeFeatures,
    likes,
    imageLocation,
}) => {
    const arr = new Array(cafeScore).fill(null);

    return (
        <div className="w-96 h-50 object-cover shadow-xl rounded pb-3 bg-white">
            <section>
                { !imageLocation ? (
                    <img className="object-cover h-80" src={defaultCafeImg} alt="cafe-img" />
                ) : 
                    <img src="" alt="cafe-img" />
                }
           </section>
           <section>
               <div className="flex justify-center">
               <div className="m-4 font-bold text-2xl">
                   { cafeName }
               </div>
               <div className="flex ml-3">
                   {
                       arr.map(() => (
                            <img className="mr-1" src={ratingstar} alt="star" />
                       ))
                   }
               </div>
               </div>
               <div>
                   <ul className="flex flex-wrap justify-center my-5">
                    { cafeFeatures?.map((feature, idx) => (
                        <li key={idx}>
                            <FeatureIndicator feature={feature}/>
                        </li>
                    ))}
                   </ul>
               </div>
               <div className="flex justify-around">
                    <div className="flex">
                        <span className="h-8 mr-2">
                            <FontAwesomeIcon icon={faCoffee} size="2x" color="#925C33" />
                        </span>
                        <p className="h-8 leading-8 font-bold text-xl">{americanoPrice} 원</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeart} color="#e74c3c" size="2x"/>
                        <span className="h-8 leading-8 ml-2 text-2xl font-bold">{ likes?.length }</span>
                    </div>
                </div>
           </section>
        </div>
    )
}

export default CafeCard;
