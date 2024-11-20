import styled from 'styled-components';
import '../../App';

export const HeaderStyle = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 0 0;
	.portfolio_head {
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 1px;
		text-transform: uppercase;
		/* color: var(--primary-text); */
	}
	.mobile_menu {
		position: relative;
		width: fit-content;
		height: 30px;
	}
	.mobile_menu_icon {
		/* font-size: 22px; */
		width: 30px;
		height: 30px;
		padding: 5px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s;
		background-color: #eeeeee;
		&:hover {
			background-color: #bdbdbd;
		}
	}
	.mobile_links {
		position: absolute;
		display: flex;
		flex-direction: column;
		width: max-content;
		right: 20px;
		padding: 20px;
		border-radius: var(--card-radius);
		background-color: var(--primary-bg);
		box-shadow: var(--shadow);
	}
	.mob_link {
		cursor: pointer;
		text-transform: capitalize;
		&:hover {
			text-decoration: 2px underline var(--primary-text);
		}
	}
`;
