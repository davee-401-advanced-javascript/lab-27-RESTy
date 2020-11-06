import React from 'react';

import './styles.scss';

import Header from './header/header.js';
import Form from './form/form.js';
import Footer from './footer/footer.js';

class App extends React.Component {
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
