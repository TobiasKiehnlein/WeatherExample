import React from 'react';
import { View, Text } from 'react-native';

export default function WeatherCard(props) {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: 'white',
				margin: 5,
				paddingBottom: 5,
				shadowColor: 'black',
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.3,
				shadowRadius: 2,
				elevation: 5
			}}
		>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5 }}>
					{props.temperature}
				</Text>
				<Text style={{ fontSize: 18 }}>°C</Text>
				{props.icon}
			</View>
			<Text style={{ fontWeight: 'bold' }}>{props.text}</Text>
			<View style={{ marginRight: 5 }}>
				<Text>{props.date.toLocaleDateString()}</Text>
				<Text>{props.date.toLocaleTimeString()}</Text>
			</View>
		</View>
	);
}
