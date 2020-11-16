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
			submit: false,
			headers: '',
			results: [],
		};
	};

	changeSubmit = () => {
		this.setState({ submit: true });
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
				<Form changeSubmit={this.changeSubmit} update={this.update}/>
				{this.state.submit ? <Result submit={this.state.submit} headers={this.state.headers} count={this.state.count} results={this.state.results}/> : ''};
				<Footer />
			</>
		);
	}
}

export default App;
