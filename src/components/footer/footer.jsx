import { Button } from '../button/button';
import './footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Abonnez vous à la newsletter pour recevoir nos meilleures
					offres de voyages.
				</p>
				<p className='footer-subscription-text'>
					Vous pouvez vous désinscrire à tout moment.
				</p>
				<div className='input-areas'>
					<form>
						<input
							type='email'
							className='footer-input'
							name='email'
							placeholder='Your Email'
						/>
						<Button buttonStyle='btn--outline'>S'inscrire</Button>
					</form>
				</div>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>A propos de nous</h2>
						<Link to='/sign-up'>Comment s'inscrire</Link>
						<Link to='/'>Témoignages</Link>
						<Link to='/'>Carrière</Link>
						<Link to='/'>Investisseurs</Link>
						<Link to='/'>Mentions Légales</Link>
					</div>
					<div class='footer-link-items'>
						<h2>Nous Contacter</h2>
						<Link to='/'>Contact</Link>
						<Link to='/'>Assistance</Link>
						<Link to='/'>Destinations</Link>
						<Link to='/'>Sponsors</Link>
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>Videos</h2>
						<Link to='/'>Envoyer une Video</Link>
						<Link to='/'>Ambassadeurs</Link>
						<Link to='/'>Agences</Link>
						<Link to='/'>Influenceurs</Link>
					</div>
					<div class='footer-link-items'>
						<h2>Réseaux Sociaux</h2>
						<Link to='/'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						<Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link>
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							TRVL <i className='fab fa-typo3' />
						</Link>
					</div>
					<small className='website-rights'>
						TRVL Copyright &copy; 2022
					</small>
					<div className='social-icons'>
						<Link
							to='/'
							target='_blank'
							aria-label='Facebook'
							className='social-icon-link facebook'
						>
							<i className='fab fa-facebook-f' />
						</Link>
						<Link
							to='/'
							target='_blank'
							aria-label='Instagram'
							className='social-icon-link instagram'
						>
							<i className='fab fa-instagram' />
						</Link>
						<Link
							to='/'
							target='_blank'
							aria-label='Youtube'
							className='social-icon-link youtube'
						>
							<i className='fab fa-youtube' />
						</Link>
						<Link
							to='/'
							target='_blank'
							aria-label='LinkedIn'
							className='social-icon-link linkedin'
						>
							<i className='fab fa-linkedin' />
						</Link>
						<Link
							to='/'
							target='_blank'
							aria-label='Twitter'
							className='social-icon-link twitter'
						>
							<i className='fab fa-twitter' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Footer;
