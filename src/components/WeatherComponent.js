import React from 'react';

const WeatherComponent = props => {
    const { item, ifExistFav, addFav, shareUrlItem } = props;
    return (
        <div>
             <div className="card card-body mt-2 animated fadeInUp locationInfo" >
                    <ul className="icons">
                        <li>
                            <button className="btn btn-block" onClick={() => { addFav(item.id) }}>
                                <i className={'fas fa-heart' + (ifExistFav(item.id) ? ' fa-heart-red' : '')}></i>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn-block" onClick={() => { shareUrlItem(item.url) }}>
                                <i className="fas fa-share-alt"></i>
                            </button>
                        </li>
                    </ul>
                    <div className="info">
                    {
                        item.city && item.country &&
                        <p>
                            <i className="fas fa-location-arrow"></i> Location<br/>
                            <span className="location">
                                {item.city},
                                {item.country}
                            </span>
                        </p>
                    }
                    {
                        item.temperature &&
                        <p>
                            <i className="fas fa-temperature-low"></i> Temperature<br/>
                            {item.temperature} ℃
                        </p>
                    }
                    {
                        item.humidity &&
                        <p>
                            <i className="fas fa-water"></i> Humidity<br/>
                            {item.humidity}
                        </p>
                    }
                    </div>
                </div>
        </div>

    )
}

export default WeatherComponent;