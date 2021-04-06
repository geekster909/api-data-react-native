import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';

import ApiView from './screens/ApiView';
import styles from './styles/ApiStyles';

export default function App() {
	const [loading, setLoading] = useState(false);
	const [fetchData, setFetchData] = useState(null);
	const [axiosData, setAxiosData] = useState(null);

	const handleFetch = () => {
		setLoading(true);
		setFetchData(null);
		setAxiosData(null);

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then((responseJson) => {
				// console.log('getting data from fetch', responseJson)
				// Created setTimeout for loading effect to be shown
				setTimeout(() => {
					setLoading(false);
					setFetchData(responseJson);
				}, 1500);
			})
			.catch(error => console.log(error))
	};

	const handleAxios = () => {
		setLoading(true);
		setFetchData(null);
		setAxiosData(null);

		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(response => {
				// console.log('getting data from axios', response.data);
				// Created setTimeout for loading effect to be shown
				setTimeout(() => {
					setLoading(false);
					setAxiosData(response.data);
				}, 1500);
			})
			.catch(error => {
				console.log(error);
			});
	}

	return (
		<View style={styles.appContainer}>
			<Text style={styles.introText}>In this tutorial, we will implement fetch and axios API calls into a React Native application.</Text>
			<View style={styles.buttonContainer}>
				<View style={{ margin: 0 }}>
					<Button
						title={'Click using Fetch'}
						onPress={handleFetch}
						color='green'
					/>
				</View>
				<View style={{ margin: 0 }}>
					<Button
						title={'Click using axios'}
						onPress={handleAxios}
						color='green'
					/>
				</View>
			</View>
			<ApiView
				fetchData={fetchData}
				loading={loading}
				axiosData={axiosData}
			/>
			<StatusBar style='auto' />
		</View>
	);
}
