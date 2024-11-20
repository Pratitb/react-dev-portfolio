import styled from 'styled-components';
import { projects } from '../assets/assets';
import Project from './children/Project';
import { Element } from 'react-scroll';

const Projects = () => {
	return (
		<Element name="projects">
			<ProjectsStyle className="projects">
				{projects.map((proj, index) => {
					return (
						<Project
							key={index}
							p_class={proj.class}
							p_img={proj.img}
							p_bg_color={proj.color}
							p_name={proj.name}
							p_desc={proj.desc}
							p_link={proj.link}
						/>
					);
				})}
			</ProjectsStyle>
		</Element>
	);
};

const ProjectsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px 0;
	padding: 40px 0;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		gap: 30px;
	}
	@media screen and (min-width: 1280px) {
	}
`;

export default Projects;
