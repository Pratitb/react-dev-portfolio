// atf
import atfPhoto from '../assets/atf-photo.png';
// tech icons
import reactI from '../assets/tech-stack/react.png';
import js from '../assets/tech-stack/js.png';
import jq from '../assets/tech-stack/jquery.png';
import tailw from '../assets/tech-stack/tailwind.png';
import bs from '../assets/tech-stack/bs.png';
import sass from '../assets/tech-stack/sass.png';
import css from '../assets/tech-stack/css.png';
import html from '../assets/tech-stack/html.png';

// projects
import salary from '../assets/projects/salary.png';
import currency from '../assets/projects/currency.png';
import age from '../assets/projects/age.png';
import tip from '../assets/projects/tip.png';
import dash from '../assets/projects/dash.png';
import review from '../assets/projects/review.png';

// companies
import media from '../assets/companies/media-logo.png';
import think from '../assets/companies/think-logo.jpg';

export const photos = {
	atfPhoto,
};

export const tech = [
	{
		name: reactI,
		color: '#C2E3E5',
	},
	{
		name: js,
		color: '#EFDB4E',
	},
	{
		name: jq,
		color: '#d2dbe2',
	},
	{
		name: tailw,
		color: '#cbdce1',
	},
	{
		name: bs,
		color: '#d9d0e1',
	},
	{
		name: sass,
		color: '#e0d0df',
	},
	{
		name: css,
		color: '#A5C0D0',
	},
	{
		name: html,
		color: '#E6B7A7',
	},
];

export const projects = [
	{
		class: 'salary',
		img: salary,
		color: '#f7baa7',
		name: 'JS salary calculator',
		desc: 'see how much hike to ask for, or how much hike is your new salary',
		link: 'https://pratitb.github.io/salary-calculator/',
	},
	{
		class: 'currency',
		img: currency,
		color: '#1e3b53',
		name: 'react currency calculator',
		desc: 'a currency and crypto converter with real-time rates and seamless swapping',
		link: 'https://currencify.in/',
	},
	{
		class: 'age',
		img: age,
		color: '#854dff',
		name: 'js age calculator',
		desc: 'an age calculator with a twist: calculates your age in an engaging, minimal interface!',
		link: 'https://pratitb.github.io/age-calculator/',
	},
	{
		class: 'tip',
		img: tip,
		color: '#10474b',
		name: 'js tip calculator',
		desc: 'a sleek, user-friendly tip calculator app to split bills and calculate tips effortlessly',
		link: 'https://tipcalculator.co.in/',
	},
	{
		class: 'dash',
		img: dash,
		color: '#fabb38',
		name: 'react dashboard',
		desc: 'a loan management dashboard summarizing loans and repayment details',
		link: 'https://pratitb.github.io/affinity-react/',
	},
	{
		class: 'review',
		img: review,
		color: '#f77412',
		name: 'review component',
		desc: 'an interactive 1-5 rating feedback component with a submit button.',
		link: 'https://pratitb.github.io/interactive-rating-component/',
	},
];

export const companies = [
	{
		img: media,
		name: 'media.net',
		class: 'media',
		role: 'UI developer',
		tech_stack: [reactI, js, jq, css, html],
		duration: 'jan 2022 - may 2024 (2.4 years)',
		role_desc1:
			'I  worked on building landers, web applications, browser extensions for the business. talking about the technical work. ',
		role_desc2:
			'I worked on building logic based application, improving the layout and styling of landers, improving the way users interact with the applications and enhance the user experience in a way.',
	},
	{
		img: think,
		name: 'think technology services',
		class: 'think',
		role: 'web developer',
		tech_stack: [js, bs, css, html],
		duration: 'sept 2019 - march 2020 (6 months)',
		role_desc1:
			"I had a similar role of working on websites and webpages. I've was working on building a single page to an entire website from scratch. ",
		role_desc2:
			'I associated with designers and senior developers to deliver websites in due time. during my time here, i worked with clients on understanding their requirements, collecting resources and turning it into a full website.',
	},
];
