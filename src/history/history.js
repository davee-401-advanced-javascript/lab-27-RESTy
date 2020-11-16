import React from 'react';

import './history.scss';

class History extends React.Component {

  render() {
    return (
      <>
        <div className='history'>
          <h2>this is history for now</h2>
          <ul>
            {this.props.history.map(item => <li key={Math.random}>{`${item.method} ${item.url}`}</li>
            )}
          </ul>
        </div>
      </>
    )
  }
}

export default History;