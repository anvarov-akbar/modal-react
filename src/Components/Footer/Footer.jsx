import './Footer.scss';

function Footer({ userName = 'Odil', age, children }) {
	return (
		<footer className='footer'>
			Copyright Palonchi corparation {userName} is {age} years old
			<h1>{children}</h1>
		</footer>
	);
}

export default Footer;
