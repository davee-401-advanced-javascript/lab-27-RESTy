import React from 'react';

import './form.scss';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			method: 'get',
			output: ''
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		let result = `${this.state.method} ${this.state.url}`;
		this.setState({
			output: result
		});
	};

	handleUrlChange = (e) => {
		const url = e.target.value;
		this.setState({ url: url });
	};

	handleMethod = (e) => {
		const method = e.target.value;
		console.log('method: ', method);
		this.setState({ method: method });
	};

	render() {
		return (
			<>
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
				<div className="ouput">{this.state.output}</div>
			</>
		);
	}
}

export default Form;
