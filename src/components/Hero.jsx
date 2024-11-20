import { Element } from 'react-scroll';
import '../App';
import HeroBigCard from './children/HeroBigCard';

const Hero = () => {
	return (
		<Element name="hero">
			<HeroBigCard />
		</Element>
	);
};

export default Hero;
