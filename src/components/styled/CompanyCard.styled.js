import styled from 'styled-components';
import '../../App';

export const CompanyStyle = styled.div`
	padding: 20px;
	line-height: 1;
	border-radius: var(--card-radius);
	box-shadow: var(--shadow);
	flex-basis: 50%;
	.comp_img {
		max-width: 100px;
		border-radius: var(--card-radius);
		box-shadow: var(--shadow);
	}
	.company_content {
		display: flex;
		flex-direction: column;
	}
	.comp_name {
		text-transform: capitalize;
		font-size: 20px;
		margin: 10px 0;
	}
	.duration,
	.role {
		text-transform: capitalize;
		font-size: 14px;
		letter-spacing: 1px;
	}
	.role {
		margin: 3px 0 10px;
		text-decoration: 2px underline var(--primary-text);
	}
	.comp_desc {
		line-height: 1.3;
		/* letter-spacing: 0.7px; */
		margin: 0 0 15px;
	}
	.comp_tech_stack {
		display: flex;
		gap: 0 10px;
	}
	.comp_tech {
		max-width: 40px;
	}
	@media screen and (min-width: 1024px) {
		display: flex;
		align-items: flex-start;
		gap: 0 20px;
	}
	@media screen and (min-width: 1280px) {
		.comp_name {
			font-size: 26px;
		}
		.duration,
		.role {
			font-size: 16px;
		}
		.comp_desc {
			font-size: 18px;
		}
		.comp_tech_stack {
			gap: 0 20px;
		}
		.comp_tech {
			max-width: 50px;
		}
	}
`;
