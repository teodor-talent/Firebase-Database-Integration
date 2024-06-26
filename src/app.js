import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';

class App extends Component {
	constructor(){
		super();
		this.state = {
			books: [],
			userInput: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.setState({userInput: event.target.value});
		console.log("it is changing now")
	}

	handleClick() {
		const dbRef = firebase.database().ref();
		dbRef.push(this.state.userInput);
		this.setState({ userInput: "" })
	}
	
	render(){
		return (
			<div>
				<ul>
					{this.state.books.map((book, i) => {
						return(
							<li key={i}>{book}</li>
						)
					})}
				</ul>
				<input type="text" onChange={this.handleChange} placeholder="add book here" />
				<button>Add book</button>
			</div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('app'));