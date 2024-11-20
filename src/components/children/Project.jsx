import { ProjectStyle } from '../styled/Project.styled';
import ExtLink from './ExtLink';

const Project = ({ p_class, p_img, p_bg_color, p_name, p_desc, p_link }) => {
	return (
		<ProjectStyle className={p_class} style={{ backgroundColor: p_bg_color }}>
			{/* image */}
			<img src={p_img} className="img_responsive proj_img" alt="" />
			{/* overlay */}
			<div className="project_overlay"></div>
			{/* details */}
			<div className="project_details">
				<p className="project_name">{p_name}</p>
				<p className="project_desc">{p_desc}</p>
			</div>
			<ExtLink href={p_link} />
		</ProjectStyle>
	);
};

export default Project;
