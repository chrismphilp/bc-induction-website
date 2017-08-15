import Parallax from 'react-springy-parallax';
import React, { Component } from 'react';

import Footer from '../Components/Footer';
import ProgressBar from '../Components/ProgressBar';

import livlib from '../Images/liv-lib.jpg';
import logo from '../Images/British-Council.jpg';
import quiz from '../Images/quiz.jpg';

export default class WelcomePage extends Component {
	render() {
		return (
			<div>
				<Parallax ref='parallax' pages={1.2}>
					<ProgressBar 
						continueLink={"#/SBUs"}
	          			stepLabels={[
							"Our History",
				            "Our Values",
				            "Our Behaviours",
				            "Our SBU's",
				            "Key Information"
	          			]}
	          		/>
	          		<br /><br /><br /><br /><br /><br />
				    <div className="container">
				        <header className="jumbotron hero-spacer">
				            <h2>Welcome to the British Council Induction!</h2>
				            <hr></hr>
				            <p>Here you'll find all the resources you need to quickly integrate into your new workplace</p>
				        </header>
				    </div>
				    <div className="container">    
					  	<div className="row">
					    	<div className="col-sm-4">
					      		<div className="panel panel-primary">
						        	<div className="panel-heading">Corporate Website</div>
						        	<div className='row text-center'>
						        		<div className="panel-body"><img src={logo} alt='#' width='100%' /></div>
						        	</div>
						        	<div className="panel-footer">Learn more about the British Council</div>
					      		</div>
					    	</div>
						    <div className="col-sm-4"> 
						      	<div className="panel panel-danger">
						        	<div className="panel-heading">Quiz Page</div>
						       		<div className='row text-center'>
						        		<div className="panel-body"><img src={quiz} alt='#' width='78.5%' /></div>
						        	</div>
						        	<div className="panel-footer">Take a quiz to test your knowledge</div>
						      	</div>
						    </div>
						    <div className="col-sm-4"> 
						      	<div className="panel panel-success">
						        	<div className="panel-heading">Living Library</div>
					        		<div className='row text-center'>
						        		<div className="panel-body"><img src={livlib} alt='#' width='56.5%' /></div>
						        	</div>
						        	<div className="panel-footer">Contact a current employee</div>
						      	</div>
						    </div>
					  	</div>
					</div>
					<Footer />
				</Parallax>
			</div>
		);
	}
}