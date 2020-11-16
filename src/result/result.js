import React from 'react';
import JSONPretty from 'react-json-pretty';
let monikai = require('react-json-pretty/themes/monikai.css');

import './result.scss';

class Result extends React.Component {


  render() {
    return (
      <>

      <div className='results'>
        <h1>Headers</h1>
        <JSONPretty className="json-pretty" data={this.props.headers} theme={monikai}></JSONPretty>
        <h1>Results</h1>
        <JSONPretty className="json-pretty" data={this.props.results} theme={monikai}></JSONPretty>
      </div>
      </>
    )
  }
}

export default Result;