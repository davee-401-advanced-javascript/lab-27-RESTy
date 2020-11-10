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
					URL
					<input name="url" required onChange={this.handleUrlChange} />
					<button type="submit">GO!</button>
					<br></br>
					<br></br>
					<label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="get"
						/>
						<span>GET</span>
					</label>
					<label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="post"
						/>
						<span>POST</span>
					</label>
					<label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="put"
						/>
						<span>PUT</span>
					</label>
					<label>
						<input
							onChange={this.handleMethod}
							type="radio"
							name="method"
							value="delete"
						/>
						<span>DELETE</span>
					</label>
				</form>
			</main>
				{/* <div className="ouput"></div> */}
			</>
		);
	}
}

export default Form;
