function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className='Footer items-center border-t-2 border-black p-2'>
			<p>{`Beer City Bands © ${year}`}</p>
		</footer>
	);
}

export default Footer;
