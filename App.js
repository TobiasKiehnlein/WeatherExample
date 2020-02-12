import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import WeatherListComponent from './components/WeatherListComponent';
import { Header } from 'react-native-elements';

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' />
			<Header
				containerStyle={{ backgroundColor: '#468bff' }}
				centerComponent={{
					text: 'Weather App',
					style: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
				}}
			/>
			<WeatherListComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center'
	}
});
