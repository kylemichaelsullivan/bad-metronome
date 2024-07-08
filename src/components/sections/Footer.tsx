function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='Footer items-center border-black border-t-2 text-right p-2'>
      <p>&copy;{`${year} Beer City Bands`}</p>
    </footer>
  );
}

export default Footer;
