// Import library for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => { // Step 2
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>{/*  Step 1, 2  */}
        </View>
    );
};
//
//{/*  Step 3 (cont)*/}
const styles = {        //Step 1
    viewStyle: {        //Step 5
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {        //Step 2
        fontSize: 20,
        color: 'blue'
    }
};

// Make the component available to other parts of the app
export default Header;
