import React from 'react'
import { View, Image } from 'react-native'
import Styles from './Style'

export default function StarRating(props) {
    const { ratings } = props
    const Stars = [];
    // Loop 5 times
    for (var i = 1; i <= 5; i++) {
        // Set the path to filled stars
        let path = require('../../../Assets/Images/staractive.png');
        // If ratings is lower, set the path to unfilled stars
        if (i > ratings.ratings) {
            path = require('../../../Assets/Images/star_inactive.png');
        }
        // Push the Image tag in the stars array
        Stars.push((<Image style={Styles.starImage} source={path} key={i} />));
    }
    return (
        <>
            <View style={{
                flexDirection: 'row'
            }}>
                {Stars}
            </View>
        </>
    )
}
