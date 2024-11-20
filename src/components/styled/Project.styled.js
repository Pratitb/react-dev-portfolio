import styled from 'styled-components';
import '../../App';

export const ProjectStyle = styled.div`
	position: relative;
	line-height: 0;
	border-radius: var(--card-radius);
	box-shadow: var(--shadow);
	&:hover .project_overlay {
		background-color: rgba(0, 0, 0, 0.1);
	}

	.proj_img {
		border-radius: var(--card-radius);
	}
	.project_overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		max-height: 350px;
		transition: all 0.3s;
		border-radius: var(--card-radius);
		background-color: rgba(0, 0, 0, 0.35);
	}
	.project_details {
		position: absolute;
		top: 5px;
		padding: 10px 20px;
		line-height: 1;
		color: var(--text-white);
	}
	.project_name {
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 5px;
		text-transform: uppercase;
	}
	.project_desc {
		/* max-width: 240px; */
		font-size: 14px;
		line-height: 1.2;
	}
	.project_link {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		right: 20px;
		bottom: 30px;
		right: 30px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		transition: all 0.3s;
		color: inherit;
		background-color: #fff;
		&:hover {
			transform: scale(1.2);
		}
	}
	@media screen and (min-width: 425px) {
		.project_details {
			top: 15px;
		}
		.project_name {
			font-size: 20px;
			letter-spacing: 1px;
		}
		.project_desc {
			max-width: 300px;
		}
	}
	@media screen and (min-width: 768px) {
		max-width: 340px;

		.project_details {
			width: 100%;
		}
		.project_link {
			width: 30px;
			height: 30px;
			font-size: 18px;
			top: initial;
			bottom: 30px;
			right: 30px;
		}
	}
	@media screen and (min-width: 1024px) {
		max-width: 500px;
		max-height: 400px;
		.project_name {
			font-size: 21px;
		}
		.project_desc {
			max-width: 100%;
		}
		.project_link {
			width: 40px;
			height: 40px;
			font-size: 22px;
		}
	}
	@media screen and (min-width: 1280px) {
		max-width: 350px;
	}
`;
