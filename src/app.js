import React from 'react';
import superagent from 'superagent';
import request from 'superagent';
import { If, Then, Else, When, Unless, Switch, Case, Default } from 'react-if';
import { Route, Switch as SwitchRoute } from "react-router-dom";

import './styles.scss';

import Header from './header/header.js';
import Form from './form/form.js';
import History from './history/history.js';
import Result from './result/result.js';
import Footer from './footer/footer.js';
import HelpPage from './help-page/help-page.js';
import HistoryPage from './history-page/history-page.js';

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
		try {
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
	
			localStorage.setItem('queryHistory', JSON.stringify(updateHistory));
			
			this.setState({
				results: response || {},
				fetching: false,
				history: updateHistory
			});
		} catch(e) {	}

	}

	componentDidMount() {
		let history = JSON.parse(localStorage.getItem('queryHistory')) ||[];
		this.setState({history})
	}
	
	render() {
		return (
			<>
				<Header />
				<SwitchRoute>
					<Route exact path='/history' component={HistoryPage}/>
					<Route exact path='/help' component={HelpPage}/>
					<Route>
						<Form getData={this.getData}/>
						<main>
							<History history={this.state.history}/>
							<When condition={!this.state.initial}>
								<Result fetching={this.state.fetching} headers={this.state.results.headers} results={this.state.results.body}/>
							</When>
						</main>
					</Route>
				</SwitchRoute>
				<Footer />
			</>
		);
	}
}

export default App;
