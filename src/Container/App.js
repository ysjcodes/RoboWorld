import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield : ""
		}
	}

	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots:users}));
	}

	onSearchChange = (event) =>{
			this.setState({searchfield:event.target.value});
		}	

	render(){
		const filteredRobots = this.state.robots.filter(robot=> robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()));
		if(this.state.robots.length === 0){
			return <h1 className="tc">Loading</h1>
		}
		return (
			<div className='tc'>
				<h1 className="f1">RoboWorld</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
	
}

export default App;