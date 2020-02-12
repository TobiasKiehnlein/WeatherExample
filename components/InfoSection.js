import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InfoSection extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.headerText}>{this.props.location}</Text>
				{this.props.icon}
				<View style={styles.horizontal}>
					<Text style={styles.headerText}>Temperatur:</Text>
					<Text>{this.props.temperature}</Text>
				</View>
			</View>
		);
	}
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
