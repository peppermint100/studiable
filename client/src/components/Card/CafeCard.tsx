import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CafeDataTypeClient from '../../types/Cafe/CafeDataTypeClient';
import FeatureIndicator from '../Indicator/FeatureIndicator';
import defaultCafeImg from "./../../assets/default2.jpg";
import ratingstar from "./../../assets/ratingstar.svg";
import { Card } from 'antd';


const CafeCard: React.FC<Partial<CafeDataTypeClient>> = ({
    cafeName,
    cafeContent,
    cafeScore,
    cafeFeatures,
    likes,
    imageLocation,
}) => {
    const arr = new Array(cafeScore).fill(null);
    const { Meta } = Card;

    return(
            <Card
                className="w-5/6"
                hoverable
                cover={<img alt="example" src={defaultCafeImg} />}
            >
                <Meta title={cafeName} description={cafeContent} />
                <ul className="flex flex-wrap my-5">
                    { cafeFeatures?.map((feature, idx) => (
                        <li key={idx}>
                            <FeatureIndicator feature={feature}/>
                        </li>
                    ))}
                </ul>
                <div>
                    <FontAwesomeIcon icon={faHeart} color="#e74c3c" size="2x"/>
                    <span className="h-8 leading-8 ml-2 text-2xl font-bold">{ likes?.length }</span>
                </div>
            </Card>
    )
}

export default CafeCard;
