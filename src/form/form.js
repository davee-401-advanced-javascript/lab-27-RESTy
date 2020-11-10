import React from 'react';
import superagent from 'superagent';
import JSONPretty from 'react-json-pretty';
let JSONPrettyMon = require('react-json-pretty/themes/monikai.css');

import './form.scss';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			method: 'get',
			result: '',
			headers: ''
		};
	}

	// async componentDidMount() {
	// 	const response = await superagent.get(`${this.state.url}`);
	// 	const result = response.body;

	// 	console.log(result);
	// 	this.setState({ output: result });
	// }

	handleSubmit = async (e) => {
		e.preventDefault();
		
		let response = await superagent.get(`${this.state.url}`);

		let resultString = JSON.stringify(response.body);
		let headersString = JSON.stringify(response.headers);
		this.setState({
			result: resultString,
			headers: headersString
		});
		console.log(this.state);
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
				<div className="ouput">
					<div>
					<JSONPretty className="json-pretty" data={this.state.headers} theme={JSONPrettyMon}></JSONPretty>
					</div>
					<div>
					<JSONPretty className="json-pretty" data={this.state.result} theme={JSONPrettyMon}></JSONPretty>
					</div>
					  {/* {this.state.result} */}
				</div>
			</main>
				{/* <div className="ouput"></div> */}
			</>
		);
	}
}

export default Form;
