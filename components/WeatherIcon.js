import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WeatherIcon(props) {
	let icon;
	let color = 'gray';
	let { info, condition } = props;
	switch (condition) {
		case 'Clouds':
			icon = 'md-cloud';
			break;
		case 'Clear':
			icon = 'md-sunny';
			color = 'gold';
			break;
		case 'Rain':
			icon = 'md-rainy';
			color = 'lightblue';
			break;
		case 'Snow':
			icon = 'md-snow';
			color = 'lightgray';
			break;
		default:
			icon = 'logo-tux';
			info = condition + '';
	}

	return info ? (
		<View style={{ alignItems: 'center' }}>
			<Ionicons style={{ margin: 5 }} name={icon} size={32} color={color} />
			<Text>{info}</Text>
		</View>
	) : (
		<Ionicons style={{ margin: 5 }} name={icon} size={32} color={color} />
	);
}
