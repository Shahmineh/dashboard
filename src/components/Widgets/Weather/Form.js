import React, { Fragment } from 'react';


import './Form.scss';
const Form = (props) => {
  return (
    <Fragment>
      <div className="form">
        <form onSubmit={props.loadWeather}>
          <input type="text" name="city" placeholder="City..." />
          <input type="text" name="country" placeholder="Country..." />
          <button className="get-weather">Get Weather</button>
        </form>
      </div>
    </Fragment>
  )
}

export default Form;