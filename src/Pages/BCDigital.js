import React, { Component } from "react";
import Parallax from "react-springy-parallax";
// Components
import Footer from '../Components/Footer.js';
import ProfileCard from '../Components/ProfileCard.js';
import ProgressBar from '../Components/ProgressBar';
// Images
import dave from '../Images/Hong_Kong_00016.jpg';
import Aqila from '../Images/aqila.png';
import Chris from '../Images/chris.png';
import Emma from '../Images/emma.jpg';
import Kristen from '../Images/kristen.png';
import Nancy from '../Images/nancy.jpg';
import Rebecca from '../Images/rebecca.png';

export default class BCDigital extends Component {

  	render() {
    	return (
    		<Parallax ref='parallax' pages={3.195}>
				<ProgressBar 
					currentIndex={5}
	      			stepLabels={[
			            "Your personal journey now begins"
	      			]}
	      			test={false}
	      		/>
	      		<br/><br/><br/>

				<div className="container-fluid bg-2 text-center">
				  	<h3 className="margin">Welcome to BC Digital {this.props.inductionFormState.exampleInputUsername} - Your New Team</h3>
				  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
				  	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
				  	ea commodo consequat.</p>
				</div>

				<div className="container">
					<div className="row">
						<div className="container">
  							<div className="row ">
							<br/><br/>
    							<div className="col-lg-12">
      								<div>
										<div className="col-md-4">
          									<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Nancy}
          										name="Nancy"
          										profileImage={Nancy}
          										role="Games"
          										twitter=""
          									>
	          									I'm a politics student currently studying at LSE, who loves playing games, 
									            reading comics and using her slow cooker
						              		</ProfileCard>
        								</div>
										<div className="col-md-4">
  											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Kristen}
          										name="Kirsten"
          										profileImage={Kristen}
          										role="Web Development"
          										twitter=""
          									>
	          									I am interning with The British Council’s Digital Team 
								              	located on the ominous 2nd floor of the London branch. Each day encompasses a range of frontend 
								              	and backend site development as the team maintains and improves upon over 130 websites. The Digital 
								              	Team currently employs the Kanban style of agile development. As such each member completes numerous 
								              	broken up tasks or stories on a weekly basis.
								              	<br/><br/>
												I will be returning to the University of St Andrews as a Magistrand or final year Computer 
												Science student. In my limited spare time, I can be found dancing with my fellow teammates 
												on the Blue Angels, Scotland’s leading competitive dance team, running along the coastal path, kayaking 
												next to the pier, or tutoring my fellow St Andreans. Generally speaking, I am looking forward to 
												completing my degree and reminding myself what freedom feels like and reacquainting myself with 
												the concept of “a good night’s sleep”.
						              		</ProfileCard>
										</div>
										<div className="col-md-4">
											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Rebecca}
          										name="Rebecca"
          										profileImage={Rebecca}
          										role="Cultural Skills"
          										twitter=""
          									>
	          									I'm interning with the Cultural Skills Unit, where I assist with programmes, communications, 
								              	and marketing. I am also Co-Project Managing the Group Intern Project.<br/><br/>
												Outside work, I spend as much time as possible outdoors and with family and friends; running, 
												cycling, and camping. I also love cooking, giraffes, and Arabic.
						              		</ProfileCard>
										</div>
      								</div>
    							</div>
  							</div>
  						</div>
  					</div>

					<div className="row">
						<div className="container">
  							<div className="row ">
    							<div className="col-lg-12">
      								<div>
										<div className="col-md-4">
          									<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Aqila}
          										name="Aqila"
          										profileImage={Aqila}
          										role="Law"
          										text=""
          										twitter=""
          									>
          										I am currently a Corporate Affairs Intern, spread over five departments including Child
          										Protection, legal, and EDI. My deliverables include drafting country reports, attending 
          										steering lessons and presenting legal matters to other departments.<br/><br/>
          										Outside of work she is completing masters in law and volunteering at several charities. 
          									</ProfileCard>
        								</div>
										<div className="col-md-4">
  											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Chris}
          										name="Chris"
          										profileImage={Chris}
          										role="Web Developer"
          										text=""
          										twitter=""
          									>
          										I'm currently interning with the Digital Team where I code, watch YouTube and eat burritos.<br/><br/>
          										In my spare time I like to sport, and help to teach coding.
          									</ProfileCard>
										</div>
										<div className="col-md-4">
											<ProfileCard
          										email=""
          										linkedIn=""
          										miniProfile={Emma}
          										name="Emma"
          										profileImage={Emma}
          										role="Marketing"
          										twitter="emma"
          									>
	          									I am a currently working as the digital marketing intern from Cardiff, for the Arts sector of the British Council.
						              			My work ranges of projects all over the world from Saptan Stories in India to the Hull city of culture showcase.<br/><br/>
						              			I'm very sociable and so enjoy spending as much time as I can with friends and family outside of work. I love music
						              			and regularly got to music events performances or festivals.
						              		</ProfileCard>
										</div>
      								</div>
    							</div>
  							</div>
  						</div>
  					</div>
  				</div>

				<div className="container-fluid bg-2 text-center">
				  	<h3 className="margin">Your New Workplace</h3>
				  	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				  	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				</div>
				
				<div className="container-fluid bg-1">
					<div className="row">
						<div className="col-lg-12">
							<div className="col-md-4">
								<img src={dave} className="img-responsive" alt="#" class="rounded-top" />
							</div>
							<div className="col-md-4">
								<img src={dave} className="img-responsive" alt="#" class="rounded-top" />
							</div>
							<div className="col-md-4">
								<img src={dave} className="img-responsive" alt="#" class="rounded-top" />
							</div>
						</div>
					</div>
				</div>

				<Footer />
			</Parallax>
    	);
  	}
}