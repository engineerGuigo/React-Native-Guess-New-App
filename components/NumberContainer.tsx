import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';
import Card from './Card';

const NumberContainer = props => {
    return (
        <Card style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderEndColor: Colors.accent,
        padding: 5,
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
        width: 150,
        maxWidth: '80%',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent,
        fontSize: 22
    }
});

export default NumberContainer;
