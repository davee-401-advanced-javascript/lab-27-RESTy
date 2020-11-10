import React from 'react';
import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/themes/monikai.css');

import './result.scss';

/*
				<div className="ouput">
					<div>
					<JSONPretty className="json-pretty" data={this.state.headers} theme={JSONPrettyMon}></JSONPretty>
					</div>
					<div>
					<JSONPretty className="json-pretty" data={this.state.result} theme={JSONPrettyMon}></JSONPretty>
					</div>
					  {{this.state.result}}
        </div>
*/

class Result extends React.Component {

  render() {
    return (
      <>


      <div className='results'>
        <h1>Headers</h1>
        <JSONPretty className="json-pretty" data={JSON.stringify(this.props.headers)} theme={JSONPrettyMon}></JSONPretty>
        <h1>Results</h1>
        <div>COUNT:<JSONPretty className="json-pretty" data={JSON.stringify(this.props.count)} theme={JSONPrettyMon}></JSONPretty>
</div>
       <div>RESULTS:<JSONPretty className="json-pretty" data={JSON.stringify(this.props.results)} theme={JSONPrettyMon}></JSONPretty>
</div>
      </div>
      </>
    )
  }
}

export default Result;