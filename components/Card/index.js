import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Linking } from 'react-native';

const Card = ({ data }) => {

    return (
        <TouchableOpacity style={styles.item} onPress={() => { Linking.openURL(data.web_url); }}>
            <View style={styles.itemInfo}>
                <Text style={styles.itemP1}>{data.abstract}</Text>
                <Text style={styles.itemP2}>{data.lead_paragraph}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        marginLeft: 10,
    },

    itemInfo: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 1,
        width: '95%',
    },
    itemP1: {
        fontSize: 22,
        color: '#1f1313',
        marginBottom: 5,
        textAlign: 'center'
    },
    itemP2: {
        padding: 10,
        fontSize: 18,
        color: '#999999',
        alignItems: 'center',
        textAlign: 'justify'
    },
});

export default Card;