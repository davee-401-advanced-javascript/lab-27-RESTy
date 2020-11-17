import React from 'react';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import ReactJson from 'react-json-view';
import Loader from 'react-loader-spinner'

import './result.scss';

class Result extends React.Component {


  render() {
    return (
      <>


      <If condition={this.props.fetching}>
				<Then>
          <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={1000} //3 secs
          />
				</Then>
				<Else>
          <div className='results'>
            <h1>Headers</h1>
            <ReactJson className="json-pretty" src={this.props.headers} />
            <h1>Results</h1>
            <ReactJson className="json-pretty" src={this.props.results} />
          </div>
				</Else>
			</If>
      </>
    )
  }
}

export default Result;