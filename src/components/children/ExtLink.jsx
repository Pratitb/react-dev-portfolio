import { MdArrowOutward } from 'react-icons/md';

const ExtLink = ({ href }) => {
	return (
		<a href={href} target="_blank" className="project_link">
			<MdArrowOutward />
		</a>
	);
};

export default ExtLink;
