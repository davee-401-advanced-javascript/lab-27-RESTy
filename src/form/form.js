import React from 'react';
import superagent from 'superagent';

import './form.scss';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			method: 'get'
		};
	}


	handleSubmit = async (e) => {
		e.preventDefault();
		
		let response = await superagent.get(`${this.state.url}`);

		this.props.update(response.headers, response.body.count, response.body.results);
		this.props.changeSubmit();
	};

	handleUrlChange = (e) => {
		const url = e.target.value;
		this.setState({ url: url });
	};

	handleMethod = (e) => {
		const method = e.target.value;
		this.setState({ method: method });
	};

	render() {
		return (
			<>
			<main>
				
				<form onSubmit={this.handleSubmit}>
					<input className="url-input" name="url" required onChange={this.handleUrlChange} />
					<br></br>
					<br></br>
					<div className="radio">
						<input
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
						<label>DELETE</label>
						<button type="submit">GO!</button>
					</div>
				</form>
			</main>
			</>
		);
	}
}

export default Form;
