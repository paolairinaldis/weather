import React from 'react';

import WeatherInfo from './WeatherInfo';
import WeatherComponent from './WeatherComponent';

const WeatherList = props => {
    return (
        <div className="card card-body">
            <button className="btn btn-block" onClick={props.clearData}>
                <i className="fas fa-arrow-left"></i>
            </button>
            {props.showFav && props.favorites.map((item, key) => {
                    return <WeatherComponent clearData={props.clearData} ifExistFav={props.ifExistFav} shareUrlItem={props.shareUrlItem} addFav={props.addFav} item={item} key={key} />
                })
            }
            {props.showItem && <WeatherInfo props={props} clearData={props.clearData} ifExistFav={props.ifExistFav} shareUrlItem={props.shareUrlItem} addFav={props.addFav} />}
        </div>
    )
};

export default WeatherList;