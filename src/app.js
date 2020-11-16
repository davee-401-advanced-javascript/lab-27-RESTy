import React from 'react';
import superagent from 'superagent';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';

import './styles.scss';

import Header from './header/header.js';
import Form from './form/form.js';
import History from './history/history.js';
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
			history: []
		};
	};

	getData = async (userInput) => {
		this.setState({
			formInput: userInput,
			fetching: true,
			initial: false
		});

		let response = await request(userInput.method, userInput.url);

		let currentData = {
			method: userInput.method,
			url: userInput.url,
			params: userInput.params,
			results: response, 
		}
		let updateHistory = [...this.state.history, currentData];
		
		this.setState({
			results: response || {},
			fetching: false,
			history: updateHistory
		});

	}

	
	render() {
		return (
			<>
				<Header />
				<Form getData={this.getData}/>
				<History history={this.state.history}/>
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
