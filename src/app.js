import React from 'react';

import './styles.scss';

import Header from './header/header.js';
import Form from './form/form.js';
import Footer from './footer/footer.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			results: [],
			header: {}
		};
	};



	render() {
		return (
			<>
				<Header />
				<Form />
				<Footer />
			</>
		);
	}
}

export default App;
