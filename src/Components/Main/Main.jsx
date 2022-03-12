import Hero from '../Hero/Hero';

import Button from '../Button/Button';
import ReduxIcon from '../Lib/Icons/Redux';

function Main() {
	const sayHello = () => 'Hello';
	return (
		<main className='main'>
			<Hero />

			<section>
				<Button text={'Text'} sayHello={sayHello} />
				<Button text='Bosing' variant='secondary' isOutlined={true} />
				<Button text='Bosing' variant='secondary' hasIcon={true} />

				<ReduxIcon />
				<ReduxIcon size={{ width: 24, height: 24 }} color={'#3cc'} />
			</section>
		</main>
	);
}

export default Main;
