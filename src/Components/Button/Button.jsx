import './Button.scss';

import PropTypes from 'prop-types';

function Button({ text, isOutlined, variant, hasIcon, sayHello }) {
	return (
		<button className={`button ${variant} ${isOutlined ? 'outlined' : ''}`}>
			{text}

			{hasIcon && (
				<img
					src='https://via.placeholder.com/50x50'
					width={50}
					height={50}
					alt='Rasm'
				/>
			)}
		</button>
	);
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	isOutlined: PropTypes.bool,
	sayHello: PropTypes.func,
	counter: PropTypes.number,
};

Button.defaultProps = {
	text: 'Click',
	isOutlined: false,
	variant: 'primary',
	hasIcon: false,
};

export default Button;

// const userName = user || "Brat"
