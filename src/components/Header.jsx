import { useEffect, useRef, useState } from 'react';
import { HeaderStyle } from './styled/Header.styled';
import { TbMenu } from 'react-icons/tb';
import { Link } from 'react-scroll';

const Header = () => {
	// hooks
	const [menuVisibility, setMenuVisibility] = useState(false);
	const MobMenu = useRef(null);
	useEffect(() => {
		document.addEventListener('mousedown', HideMobileMenu);
	}, [menuVisibility]);

	// functions
	const ToggleMenu = () => {
		setMenuVisibility((prev) => !prev);
	};
	const HideMobileMenu = (mobileEvent) => {
		if (MobMenu.current && !MobMenu.current.contains(mobileEvent.target)) {
			setMenuVisibility(false);
		}
	};

	return (
		<HeaderStyle>
			<p className="portfolio_head">pratit bangdiwala - fe (react)</p>
			{/* mobile menu */}
			<div className="mobile_menu">
				{/* menu icon */}
				<TbMenu className="mobile_menu_icon" onClick={ToggleMenu} />
				{/* menu links */}
				{menuVisibility && (
					<div className="mobile_links" ref={MobMenu}>
						<Link
							to="hero"
							smooth={true}
							className="mob_link"
							onClick={ToggleMenu}>
							about
						</Link>
						<Link
							to="projects"
							smooth={true}
							className="mob_link"
							onClick={ToggleMenu}>
							my work
						</Link>
						<Link
							to="experience"
							smooth={true}
							className="mob_link"
							onClick={ToggleMenu}>
							experience
						</Link>
					</div>
				)}
			</div>
		</HeaderStyle>
	);
};

export default Header;
