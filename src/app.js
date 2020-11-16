import React from 'react';

import './styles.scss';

import Header from './header/header.js';
import Form from './form/form.js';
import Result from './result/result.js';
import Footer from './footer/footer.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: false,
			headers: '',
			results: [],
			history: {}
		};
	};

	changefetching = () => {
		this.setState({ fetching: true });
	}

	update = (newHeaders, newResult) => {
		this.setState({
			headers: newHeaders, 
			results: newResult,
		});
	}


	render() {
		return (
			<>
				<Header />
				<Form changefetching={this.changefetching} update={this.update}/>
				{this.state.fetching ? <Result fetching={this.state.fetching} headers={this.state.headers} count={this.state.count} results={this.state.results}/> : ''};
				<Footer />
			</>
		);
	}
}

export default App;
