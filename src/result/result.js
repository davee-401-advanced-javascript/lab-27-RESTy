import React from 'react';

import './result.scss';

class Result extends React.Component {

  render() {
    return (
      <>
      <div className='results'>
        <h1>Headers</h1>
        <p>HEADERS: {JSON.stringify(this.props.headers)}</p>
        <h1>Results</h1>
        <p>COUNT: {JSON.stringify(this.props.count)}</p>
       <p>RESULTS: {JSON.stringify(this.props.results)}</p>
      </div>
      </>
    )
  }
}

export default Result;