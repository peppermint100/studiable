import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChargingStation, faFan, faParking, faRestroom, faSmoking, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FieldArray } from 'formik';
import React, { useState } from 'react'
import styled from 'styled-components';
import Feature from '../../../../types/Feature';
import FeatureIndicator from '../../../StyleProperties/FeatureIndicator';

interface FeatureProps {
    label: string;
    icon: IconProp;
    enum: Feature;
    isSelected: boolean;
}

const ArrayForm = ({ name } : { name: string, cafeFeatures: Array<Feature> }) => {
    
    const [features, setFeatures] = useState<Array<FeatureProps>>(
        [
            {
                label: "냉방시설",
                icon: faFan,
                enum: Feature.AIR_CONDITIONING,
                isSelected: false
            },
            {
                label: "주차장",
                icon: faParking,
                enum: Feature.PARKING,
                isSelected: false
            },
            {
                label: "흡연실",
                icon: faSmoking,
                enum: Feature.SMOKING_ROOM,
                isSelected: false
            },
            {
                label: "와이파이",
                icon: faWifi,
                enum: Feature.WIFI,
                isSelected: false
            },
            {
                label: "화장실",
                icon: faRestroom,
                enum: Feature.TOILET,
                isSelected: false
            },
            {
                label: "충전가능",
                icon: faChargingStation,
                enum: Feature.LAPTOP_CHARGE,
                isSelected: false
            },
        ]
    )

    const toggleFeatureButton = (featuresList: Array<FeatureProps>, feature: FeatureProps) => {
        const updatedFeatures: Array<FeatureProps> = [];
        featuresList.forEach( computedFeature => {
            if(computedFeature.enum === feature.enum){
                updatedFeatures.push({
                    label: feature.label,
                    icon: feature.icon,
                    enum: feature.enum,
                    isSelected: !feature.isSelected
                });
            }else{
                updatedFeatures.push(computedFeature);
            }
        })

        return updatedFeatures;
    }
    
    return (
        <>
            <Label>
               편의시설 
            </Label>
            <FieldArray name={name}>
                {({ remove, push }) => (
                    <Container>
                        {
                            features.map( (feature, idx) => (
                                <li key={feature.enum}>
                                    <FeatureIndicator label={feature.label} icon={feature.icon} isSelected={feature.isSelected} onClick={() => {
                                        if(feature.isSelected){
                                            remove(idx);
                                            setFeatures(featureList => toggleFeatureButton(featureList, feature))
                                        }else{
                                            push(feature.enum);
                                            setFeatures(featureList => toggleFeatureButton(featureList, feature))
                                        }
                                    }} />
                                </li>
                            ))
                        }
                    </Container>
                )}
            </FieldArray>
        </>
    )
}

const Container = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;

    & > li {
        width: 90%;
        margin: 0 auto;
    }
`

const Label = styled.label`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-top: 18px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.primary};
`

export default ArrayForm;
