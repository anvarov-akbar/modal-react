import './Header.scss';

function Header({ userName }) {
	return (
		<header className='header' style={{ backgroundColor: 'dimgray' }}>
			<div className='container'>
				<a href='#link' className='logo'>
					<img
						src='https://via.placeholder.com/200x150'
						alt='Logo of company'
						width='200'
						height='150'
					/>
				</a>
				Hello, {userName}
				<nav className='nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								Link 1
							</a>
						</li>
						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								Link 2
							</a>
						</li>
						<li className='nav__item'>
							<a className='nav__link' href='#link'>
								Link 3
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
