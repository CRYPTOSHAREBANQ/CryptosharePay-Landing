import React from "react";
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage2 from '../images/feature_3.png';

function Feature(params) {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Development of APIs' />
                <FeatureBox image={featureimage1} title='Payments' />
                <FeatureBox image={featureimage2} title='More' />
            </div>
        </div>
    )
}

export default Feature;