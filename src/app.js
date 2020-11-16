import React from 'react';
import superagent from 'superagent';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

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
			initial: true,
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

		this.setState({
			results: response || {},
			initial: false,
			fetching: false
		});

	}

	
	render() {
		console.log('this.state:', this.state);
		return (
			<>
				<Header />
				<Form getData={this.getData}/>

				<When condition={!this.state.initial}>
					<If condition={this.state.fetching}>
						<Then>
							<h1>Grabbing Data</h1>
						</Then>
						<Else>
							<Result headers={this.state.results.headers} results={this.state.results.body}/>
						</Else>
					</If>
				</When>

				<Footer />
			</>
		);
	}
}

export default App;
