import React from 'react';

import './result.scss';

class Result extends React.Component {

  render() {
    return (
      <>
      <div>{JSON.stringify(this.props.headers)}</div>
      <div>{JSON.stringify(this.props.count)}</div>
      <div>{JSON.stringify(this.props.results)}</div>
      </>
    )
  }
}

export default Result;