import {combineReducers} from 'redux';
import { RECEIVE_FAV, RESET_STORE } from '../actions/weatherActions';

const initialStateFav = {//Valores iniciales de ejemplo
    favorites: [{
        'id': 3427833,
        'url' : 'https://api.openweathermap.org/data/2.5/weather?q=Tandil,Argentina&appid=c21f29358ac77ac165bd921b1bc70fc0',
        'temperature': '10',
        'humidity': '100',
        'city': 'Tandil',
        'country': 'Argentina'
    },
    {
        'id': 4164138,
        'url': 'https://api.openweathermap.org/data/2.5/weather?q=Miami,Estados Unidos&appid=c21f29358ac77ac165bd921b1bc70fc0',
        'temperature': '28',
        'humidity': '50',
        'city': 'Miami',
        'country': 'EEUU'
    }],
    showFav: false
};

const weatherReducer = (state = initialStateFav, action) => {
    switch (action.type) {
        case RECEIVE_FAV:
            return {
                ...state,
                favorites: action.favorites
            };
        case RESET_STORE:
        return [];
        default:
            return state;
    }
};

const rootReducer = combineReducers({weatherReducer});
export default rootReducer;