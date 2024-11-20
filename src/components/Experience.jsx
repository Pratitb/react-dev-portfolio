import React from 'react';
import { companies } from '../assets/assets';
import CompanyCard from './children/CompanyCard';
import styled from 'styled-components';
import { Element } from 'react-scroll';

const Experience = () => {
	return (
		<Element name="experience">
			<ExperienceStyle className="experience">
				{companies.map((company, index) => {
					return <CompanyCard key={index} compData={company} />;
				})}
			</ExperienceStyle>
		</Element>
	);
};

const ExperienceStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px 0;
	padding: 40px 0;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		gap: 0 30px;
	}
`;

export default Experience;
