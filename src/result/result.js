import React from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import ReactJson from 'react-json-view';

import './result.scss';

class Result extends React.Component {


  render() {
    return (
      <>
      <div className='results'>
        <h1>Headers</h1>
        <ReactJson className="json-pretty" src={this.props.headers} />
        <h1>Results</h1>
        <div><ReactJson className="json-pretty" src={this.props.results} /></div>
      </div>
      </>
    )
  }
}

export default Result;