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
			headers: '',
			count: 0,
			results: [],
		};
	};

	update = (newHeaders, newCount, newResult) => {
		this.setState({
			headers: newHeaders, 
			count: newCount,
			results: newResult,
		});
	}


	render() {
		return (
			<>
				<Header />
				<Form update={this.update}/>
				<Result headers={this.state.headers} count={this.state.count} results={this.state.results}/>
				<Footer />
			</>
		);
	}
}

export default App;
