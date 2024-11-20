// import { companies } from '../../assets/assets';
import { CompanyStyle } from '../styled/CompanyCard.styled';
const CompanyCard = ({ compData }) => {
	return (
		<CompanyStyle>
			<img src={compData.img} alt="" className="comp_img" />
			<div className="company_content">
				{/* name, role, duration */}
				<div className="role_duration">
					<p className="comp_name">{compData.name}</p>
					<p className="duration">{compData.duration}</p>
					<p className="role">{compData.role}</p>
				</div>
				{/* desc */}
				<div className="comp_desc_wrap">
					<p className="comp_desc">{compData.role_desc1}</p>
					<p className="comp_desc">{compData.role_desc2}</p>
				</div>
				{/* tech stack */}
				<div className="comp_tech_stack">
					{compData.tech_stack.map((tech, index) => {
						return <img src={tech} key={index} alt="" className="comp_tech" />;
					})}
				</div>
			</div>
		</CompanyStyle>
	);
};

export default CompanyCard;
