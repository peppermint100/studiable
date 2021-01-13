import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faChargingStation, faFan, faParking, faRestroom, faSmoking, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import Feature from '../../types/Feature'
import { Tag } from 'antd';

interface Props {
    feature: Feature;
}

const FeatureIndicator:React.FC<Props> = ({ feature }) => {
    const [state, setState] = useState<any>({
        icon: null,
        text: null 
    });

    useEffect(() => {
        switch(feature){
            case Feature.AIR_CONDITIONING:
                setState((curr: any) => ({
                    ...curr,
                    icon: faFan,
                    text: "냉방시설"
                }))
                return;
            case Feature.SMOKING_ROOM:
                setState((curr: any) => ({
                    ...curr,
                    icon: faSmoking,
                    text: "흡연시설"
                }))
                return;
            case Feature.TOILET:
                setState((curr: any) => ({
                    ...curr,
                    icon: faRestroom,
                    text: "화장실"
                }))
                return;
            case Feature.LAPTOP_CHARGE:
                setState((curr: any) => ({
                    ...curr,
                    icon: faChargingStation,
                    text: "충전가능"
                }))
                return;
            case Feature.PARKING:
                setState((curr: any) => ({
                    ...curr,
                    icon: faParking,
                    text: "주차장"
                }))
                return;
            case Feature.WIFI:
                setState((curr: any) => ({
                    ...curr,
                    icon: faWifi,
                    text: "와이파이"
                }))
                return;
            default:
                return;
        }
    }, [setState])

    return (
        <Tag color="#2db7f5">
            {state.text}
        </Tag>
        // <div className="flex w-max h-8 bg-blue-400 justify-around px-2 py-1 mx-2 rounded-xl">
        //     <span className="mr-2">
        //         <FontAwesomeIcon icon={ state.icon } color="#fff"/> 
        //     </span>
        //    <p className="text-white font-bold text-sm vertical-center">{ state.text }</p>
        // </div>
    )
}

export default FeatureIndicator
