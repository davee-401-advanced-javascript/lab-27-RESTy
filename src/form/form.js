import React from 'react';
import superagent from 'superagent';

import './form.scss';


class Form extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			method: 'get',
			params: ''
		};
	}


	handleSubmit = (e) => {
		e.preventDefault();
		this.props.getData({...this.state});
	};


	handleUrlChange = (e) => {
		const url = e.target.value;
		this.setState({ url: url });
	};


	handleMethod = (e) => {
		const method = e.target.value;
		this.setState({ method: method });
	};

	handleParams = (e) => {
		const params = e.target.value;
		this.setState({params})
	}


	render() {
		return (
			<>
			<main>
				
				<form data-testid='urlForm' onSubmit={this.handleSubmit}>
					URL
					<input data-testid='urlInput' className="url-input" name="url" required onChange={this.handleUrlChange} />
					<button type="submit">GO!</button>
					<br></br>
					<br></br>
					<div className="radio">
						<input
							data-testid='selectGet'
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="get"
						/>
						<label>GET</label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="post"
						/>
						<label>POST</label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="put"
						/>
						<label>PUT</label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="delete"
						/>
						<span>DELETE</span>
					<br></br>
				</div>
					<input name='params' onChange={this.handleParams} accept="application/JSON"/>
				</form>
			</main>
			</>
		);
	}
}

export default Form;
