
var React = require('react');
var AnimalPostForm = require('./animalPostForm.js');

var AnimalPostData = React.createClass ({
	getInitialState: function() {
		return {
			name: "", 
			species: "", 
			habitat: "", 
			diet: ""

		}
	},

	handleNameChange: function(event){
		this.setState({ name: event.target.value })
	},

	handleSpeciesChange: function(event){
		this.setState({ species: event.target.value})
	}, 
	handleHabitatChange: function(event){
		this.setState({ habitat: event.target.value})
	}, 
	handleDietChange: function(event){
		this.setState({diet: event.target.value})
	},

	handleAnimalSubmit: function(event){
		event.preventDefault();

		var animal = {};
		animal.name = this.state.name;
		animal.species = this.state.species;
		animal.habitat = this.state.habitat;
		animal.diet = this.state.diet;

		this.handleNewAnimalPost(animal);
		this.setState({ name: '', species: '', habitat: '', diet:''}); //setting values 
	},

	handleNewAnimalPost: function(animal){
		console.log(animal);
		$.ajax({
			url: '/animals', 
			method: 'POST', 
			// dataType: 'json',
			data: animal, 
			success: function(data){
				this.props.toggleActiveComponent('allAnimals');
			}.bind(this), //taking success function and bind it all together-- handleNewAnimalPost = ajaxcall
			error: function(xhr, status, err){
				console.error('/animals', status, err.toString()) //for our reference if err
			}.bind(this)
		});
	},
	
	render : function() {
	
	return (
		<div>
			<h1>Post new animal here:</h1>
			<AnimalPostForm handleAnimalSubmit={this.handleAnimalSubmit} 
					        handleNameChange= {this.handleNameChange}
					        handleSpeciesChange={this.handleSpeciesChange}
					        handleHabitatChange={this.handleHabitatChange}
					        handleDietChange={this.handleDietChange}/>
		</div>
		)
	}
});

module.exports = AnimalPostData;