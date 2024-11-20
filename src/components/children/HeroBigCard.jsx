import { photos, tech } from '../../assets/assets';
import { HeroBigStyle } from '../styled/HeroBigCard.styled';
const HeroBigCard = () => {
	const calcExp = () => {
		const mediaDate = new Date('2024-05-16');
		// console.log(currentDate, 'curr date');
		const ogDate = new Date('2022-01-03');
		// console.log(ogDate, 'og date');
		const timeSinceOg = mediaDate - ogDate;
		// console.log(timeSinceOg);
		const timeInMonths = timeSinceOg / (1000 * 60 * 60 * 24 * 30);
		// console.log(timeInMonths);
		const timeInYearsMonths = timeInMonths / 12;
		// console.log(timeInYearsMonths);
		const finalNum = timeInYearsMonths.toFixed(1);
		// console.log(finalNum);
	};
	calcExp();
	return (
		<HeroBigStyle>
			<div className="atf_right">
				<img
					className="img_responsive atf_photo"
					src={photos.atfPhoto}
					alt=""
				/>
			</div>
			<div className="atf_left">
				<p className="atf_intro">
					Hey, I'm Pratit, A&nbsp;
					<span className="prime-color atf-prime-text">frontend developer</span>
					&nbsp; with <span className="prime-color">2.5 years</span> of hands-on
					experience in <span className="prime-color">React JS.</span>
				</p>
				<p className="atf_work_style">
					I care about building easy-to-use beautiful UI using the following
					tools:
				</p>
				<div className="tech_icons">
					{tech.map((icon, index) => {
						return (
							<img
								style={{
									backgroundColor: icon.color,
								}}
								key={index}
								src={icon.name}
								alt=""
								className={`t_icon img_responsive ${icon}`}
							/>
						);
					})}
				</div>
			</div>
		</HeroBigStyle>
	);
};

export default HeroBigCard;
