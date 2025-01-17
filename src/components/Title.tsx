type TitleProps = {
	title?: string;
};

function Title({ title = 'Bad Metronome' }: TitleProps) {
	return (
		<h1 className='text-4xl font-bold text-gray-700 transition duration-300 hover:text-gray-900'>
			{title}
		</h1>
	);
}

export default Title;
