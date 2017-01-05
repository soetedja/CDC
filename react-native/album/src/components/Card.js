import React from 'react';
import { View } from 'react-native';

const Card = (props) => { //Step 6.c
    return (
        <View style={styles.containerStyle}>
            {props.children}{/*Step 6.c cont. */}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginRight: 5,
        marginTop: 10,
    }
};

export default Card;
