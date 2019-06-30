import React from 'react';

import WeatherComponent from './WeatherComponent';

const WeatherInfo = props => {
    const info = props.props;
    return (
        <div>
            {
                info.error &&
                <div className="alert alert-danger">
                    <p>{info.error}</p>
                </div>
            }
            {!info.error &&
                <WeatherComponent clearData={info.clearData} ifExistFav={info.ifExistFav}  shareUrlItem={info.shareUrlItem} addFav={info.addFav} item={info} />
            }
        </div>

    )
}

export default WeatherInfo;