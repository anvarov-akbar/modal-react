function Hero() {
	const number = 2;

	function sayHello() {
		if (number % 2 === 0) {
			return 'Juft';
		}
	}

	return <h1>{sayHello()}</h1>;
}

export default Hero;
