import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';

function ScrollBar() {
	const { x, y } = useWindowScroll();
	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;
		setScrolled((y / height) * 100);
	}, [y]);

	return (
		<div className='h-1 w-full sticky md:top-16 top-14 z-20'>
			<div
				className='h-full bg-red shadow-md'
				style={{ width: `${scrolled}%` }}
			></div>
		</div>
	);
}

export default ScrollBar;
