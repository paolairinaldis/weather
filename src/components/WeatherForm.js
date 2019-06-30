import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <h1>Weather Finder</h1>
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="City" className="form-control" autoFocus/>
            </div>
            <div className="form-group">
                <input type="text" name="country" placeholder="Country" className="form-control" />
            </div>
            <button className="btn btn-success btn-block">
                Search
            </button>
        </form>
        <button className="btn btn-access btn-block" onClick={props.listFav}>
                        GO TO MY FAVORITE
        </button>
    </div>
);

export default WeatherForm;