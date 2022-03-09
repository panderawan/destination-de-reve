import CardItem from '../cardItem/cardItem';
import './cards.scss';

function Cards() {
	return (
		<div className='cards'>
			<h1>Quelques destinations de RÊVE!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src='images/img-9.jpg'
							text='Explorez les chutes cachées au fin fond de la jungle Amazonienne!'
							label='Aventure'
							path='/services'
						/>
						<CardItem
							src='images/img-2.jpg'
							text='Découvrez les îles de Bali à bord d&#39;un bateau privé!'
							label='Luxe'
							path='/services'
						/>
					</ul>
					<ul className='cards__items'>
						<CardItem
							src='images/img-3.jpg'
							text='Levez l&#39;ancre vers les eaux inexplorées de l&#39;Océan Atlantique!'
							label='Echappée'
							path='/services'
						/>
						<CardItem
							src='images/img-4.jpg'
							text='Envie d&#39;essayer le foot sur les montagnes de l&#39;Himalaya?'
							label='Découverte'
							path='/services'
						/>
						<CardItem
							src='images/img-8.jpg'
							text='Avec votre guide, Traversez à dos de chameau le magnifique desert du Sahara! '
							label='Luxe'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
