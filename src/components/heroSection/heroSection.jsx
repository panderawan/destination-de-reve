import React from 'react';
import { Button } from '../button/button';
import '../../App';
import './heroSection.scss';

function HeroSection() {
	return (
		<div className='hero-container'>
			<video src='videos/video-2.mp4' autoPlay loop muted />
			<h1>L'AVENTURE VOUS ATTENDS!</h1>
			<p>Qu'attendez-vous?</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					VOYAGER
				</Button>

				<Button
					className='btns'
					buttonStyle='btn--primary'
					buttonSize='btn--large'
				>
					BANDE ANNONCE <i className='fas fa-play-circle' />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
