import React from 'react';
import { Text, FlatList, View, Dimensions, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import constants from '../constants/constants';
import { AppLoading } from 'expo';
import InfoSection from './InfoSection';
import WeatherCard from './WeatherCard';
import WeatherIcon from './WeatherIcon';

const { width } = Dimensions.get('window');

export default class WeatherListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.loadData();
	}

	async loadData() {
		if (!(await this.checkPermissions())) {
			console.warn('No Permissions!');
			return;
		}
		const location = await Location.getLastKnownPositionAsync();
		const apiEndpoint = `https://api.openweathermap.org/data/2.5/forecast?lang=de&lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${constants.APIKey}`;
		const data = await fetch(apiEndpoint).then(response => response.json());
		this.setState({ data });
	}

	async checkPermissions() {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		return status === 'granted';
	}

	render() {
		if (this.state.data === []) return <AppLoading />;
		return (
			<FlatList
				style={{ width }}
				data={this.state.data.list}
				keyExtractor={item => item.dt.toString()}
				ListHeaderComponent={
					<InfoSection
						location={(this.state.data.city ?? { name: '' }).name}
						temperature={
							Math.round(
								((this.state.data.list ?? [{ main: {} }])[0].main.temp -
									273.15) *
									100
							) /
								100 +
							' °C'
						}
						icon={
							<WeatherIcon
								condition={
									(this.state.data.list ?? [{ weather: [{}] }])[0].weather[0]
										.main
								}
								info={
									(this.state.data.list ?? [{ weather: [{}] }])[0].weather[0]
										.description
								}
							/>
						}
					/>
				}
				renderItem={({ item }) => {
					const date = new Date(item.dt_txt.replace(' ', 'T'));
					return (
						<WeatherCard
							icon={<WeatherIcon condition={item.weather[0].main} />}
							date={date}
							text={item.weather[0].description}
							temperature={Math.round(item.main.temp - 273.15)}
						/>
					);
				}}
			/>
		);
	}
}
