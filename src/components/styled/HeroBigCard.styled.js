import styled from 'styled-components';
import '../../App';

export const HeroBigStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	gap: 20px 0;
	padding: 10px 0 20px;
	.atf_right {
		line-height: 0;
		border-radius: var(--card-radius);
		box-shadow: var(--shadow);
	}
	.atf_left {
		padding: 15px;
		line-height: 1.1;
		border-radius: var(--card-radius);
		box-shadow: var(--shadow);
	}
	.atf_intro {
		/* text-transform: capitalize; */
		font-size: 24px;
		font-weight: 500;
		margin: 0 0 10px;
	}
	.atf_work_style {
		font-size: 15px;
		margin: 0 0 20px;
		line-height: 1.2;
		letter-spacing: 1px;
	}
	.atf_photo {
		border-radius: var(--card-radius);
		/* background-color: #ecdca6; */
	}
	.tech_icons {
		display: flex;
		/* justify-content: center; */
		flex-wrap: wrap;
		gap: 10px;
	}
	.t_icon {
		max-width: 45px;
		padding: 8px;
		border-radius: var(--card-radius);
	}
	@media screen and (min-width: 425px) {
		.atf_intro {
			font-size: 24px;
		}
	}
	@media screen and (min-width: 768px) {
		flex-direction: row;
		align-items: stretch;
		gap: 0 10px;
		.atf_left,
		.atf_right {
			display: flex;
			flex-direction: column;
			flex: 1 1 auto;
		}
		.atf_intro {
			font-size: 26px;
		}
		.atf_work_style {
			font-size: 16px;
		}
		.atf_right {
			order: 1;
		}
		.atf_photo {
			max-width: 250px;
			height: 100%;
			object-fit: cover;
		}
	}
	@media screen and (min-width: 1024px) {
		.atf_intro {
			font-size: 28px;
		}
		.atf_work_style {
			font-size: 18px;
		}
		.t_icon {
			max-width: 50px;
		}
		.atf_photo {
			max-width: 300px;
		}
	}
	@media screen and (min-width: 1280px) {
		.atf_left {
			padding: 30px;
		}
		.atf_intro {
			font-size: 40px;
		}
		.atf_work_style {
			font-size: 26px;
		}
		.t_icon {
			max-width: 60px;
		}
		.atf_photo {
			max-width: 350px;
		}
	}
`;
