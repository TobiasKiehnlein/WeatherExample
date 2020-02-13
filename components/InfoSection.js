import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InfoSection(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>{props.location}</Text>
			{props.icon}
			<View style={styles.horizontal}>
				<Text style={styles.headerText}>Temperatur:</Text>
				<Text>{props.temperature}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
		marginBottom: 20,
		paddingBottom: 5,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		elevation: 5
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 18,
		margin: 3
	},
	horizontal: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});
