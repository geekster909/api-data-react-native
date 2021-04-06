import React from 'react';
import { ActivityIndicator, Button, FlatList, Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/ApiStyles';

function ApiView(props) {
    const {
        loading,
        fetchData,
        axiosData,
    } = props;

    const renderItem = (data) => {
        return (
            <TouchableOpacity>
                <View style={styles.card}>
                    <View style={styles.cardContent}>
                        <Text style={styles.lightText}>{data.item.name}</Text>
                        <Text style={styles.lightText}>{data.item.email}</Text>
                        <Text style={styles.lightText}>{data.item.company.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.viewContainer}>
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size='large' color='#0c9' />
                    <Text>Fetching Data</Text>
                </View>
            }

            {!loading && (fetchData || axiosData) && (
                <View>
                    <FlatList
                        data={fetchData || axiosData}
                        renderItem={item => renderItem(item)}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            )}
            
        </View>
    )
}

export default ApiView;