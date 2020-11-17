import React from 'react';

import './history.scss';

class History extends React.Component {

  render() {
    return (
      <>
        <div className='history'>
          <ul>
            {this.props.history.map(item => 
              <li key={Math.random}>
                <span className={`method ${item.method}`}>{`${item.method}`}</span>
                <button className='url-history'>{`${item.url}`}</button>
              </li>
            )}
          </ul>
        </div>
      </>
    )
  }
}

export default History;