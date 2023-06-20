function Header() {
	return (
		<nav className='light-blue darken-1'>
			<div className='nav-wrapper'>
				<a
					href='https://ligmanstark.github.io/movies-react-project/'
					className='brand-logo'
				>
					Fortnite Shop
				</a>

				<ul
					id='nav-mobile'
					className='right hide-on-med-and-down'
				>
					<li>
						<a href='https://ligmanstark.github.io/movies-react-project/'>
							Gallery
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
