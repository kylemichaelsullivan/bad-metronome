function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='Footer items-center border-t-2 border-black p-2 text-right'>
			<p>&copy;{`${year} Beer City Bands`}</p>
		</footer>
	);
}

export default Footer;
