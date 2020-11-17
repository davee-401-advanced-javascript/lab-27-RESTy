import React from 'react';
import superagent from 'superagent';

import './form.scss';


class Form extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			url: '',
			method: '',
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


	handleMethod = (method) => {
		this.setState({ method: method });
	};

	handleParams = (e) => {
		const params = e.target.value;
		this.setState({params})
	}


	render() {
		console.log('form state:', this.state);
		return (
			<>			
				<form data-testid='urlForm' onSubmit={this.handleSubmit}>
					<div>
						<input type="text" data-testid='urlInput' className="url-input" name="url" placeholder="Please Enter URL" required onChange={this.handleUrlChange} />
						<button type="submit">GO!</button>
					</div>
					<br></br>
					<br></br>
					<div className="radio">
						<span className={`method ${this.state.method === 'get'}`} onClick={() => this.handleMethod('get')}>GET</span>
						<span className={`method ${this.state.method === 'post'}`} onClick={() => this.handleMethod('post')}>POST</span>
						<span className={`method ${this.state.method === 'put'}`} onClick={() => this.handleMethod('put')}>PUT</span>
						<span className={`method ${this.state.method === 'delete'}`} onClick={() => this.handleMethod('delete')}>DELETE</span>
						<textarea name='params' onChange={this.handleParams} accept="application/JSON"/>
					</div>
				</form>
			</>
		);
	}
}

export default Form;
