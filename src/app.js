import React from 'react';
import superagent from 'superagent';

import './styles.scss';

import Header from './header/header.js';
import Form from './form/form.js';
import Result from './result/result.js';
import Footer from './footer/footer.js';
import request from 'superagent';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: false,
			formInput: {},
			results: {},
			history: {}
		};
	};

	getData = async (userInput) => {
		this.setState({
			formInput: userInput,
			fetching: true,
		});

		let response = await request(userInput.method, userInput.url);

		this.setState({results: response});

	}

	


	render() {
		return (
			<>
				<Header />
				<Form getData={this.getData}/>
				{/* {this.state.fetching ? <Result fetching={this.state.fetching} headers={this.state.headers} count={this.state.count} results={this.state.results}/> : ''}; */}
				<Result headers={this.state.results.headers} results={this.state.results.body}/>
				<Footer />
			</>
		);
	}
}

export default App;
