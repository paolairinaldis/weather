import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherForm from './components/WeatherForm';
import WeatherList from './components/WeatherList';
import { receiveFav } from './actions/weatherActions';
import { WEATHER_KEY } from './keys';

class App extends Component {

    constructor(props){
		super(props);
        this.state = {
            id: '',
            url: '',
            temperature: '',
            humidity: '',
            city: '',
            country: '',
            error: null,
            favorites: props.weatherReducer.favorites,
            showFav: false,
            showItem: false
        };
    }

    clearData = () => {
        this.setState({showFav: false, showItem: false, })
    }

    listFav = () => {
        this.setState({showFav: true})
    }

    addFav = (id) => {
        let list = [];
        if(!this.ifExistFav(id)){
            const newItem = {
                'id' : this.state.id,
                'url' : this.state.url,
                'temperature': this.state.temperature,
                'humidity': this.state.humidity,
                'city': this.state.city,
                'country': this.state.country,
            }
            list = [...this.state.favorites, newItem];
        }else{
            list = this.state.favorites.filter(item => item.id !== id);

        }
        this.props.receiveFav(list);
        this.setState({favorites: list})
    }

    ifExistFav = (id) => {
        return this.state.favorites.some(item => id === item.id)
    }

    shareUrlItem = (url) => {
        alert(url);
    }

    getWeather = async (e) => {
        e.preventDefault();
        const { city, country } = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;

        if (cityValue && countryValue) {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}`;
            const response = await fetch(API_URL);
            const data = await response.json();

            if(data.cod === '404'){
                this.setState({
                    error: data.message,
                    showItem: true,
                    showFav: false
                })
            }else{
                this.setState({
                    id: data.id,
                    url: API_URL,
                    temperature: data.main.temp,
                    humidity: data.main.humidity,
                    city: data.name,
                    country: data.sys.country,
                    error: null,
                    showItem: true,
                    showFav: false
                });
            }
        } else {
            this.setState({
                error: 'Please enter a City and a Country.',
                showItem: true,
                showFav: false
            });
        }

    }

    render() {
        return <div className="container p-4">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    {(!this.state.showFav && !this.state.showItem) && <WeatherForm
                        getWeather={this.getWeather}
                        listFav={this.listFav}
                    />}
                    {(this.state.showFav || this.state.showItem) && <WeatherList {...this.state} 
                        clearData={this.clearData}
                        addFav={this.addFav} 
                        ifExistFav={this.ifExistFav}
                        shareUrlItem={this.shareUrlItem}
                        showFav={this.state.showFav}
                        showItem={this.state.showItem} />
                    }
                </div>
            </div>
        </div>
    }
}


function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps, {receiveFav})(App);