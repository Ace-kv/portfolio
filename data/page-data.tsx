import { v4 as uuidv4 } from 'uuid';

export const personalData = {
	id: uuidv4(),
	name: "M. Talha Shahid",
	role: "Web Developer",
	education: [
		"Bachelor of Science in Physics, COMSATS University Islamabad, Lahore Campus (2016-2020)",
		"Enrolled in a National GenerativeAI Engineer program (2023-Present) after courses on Python (Udemy) and Data Visualization (MLSA/GSDC)",
	],
	contactLinks: [
		"mailto:emailto:talhashahid100@yahoo.com",
		"https://twitter.com",
		"https://www.linkedin.com/in/muhammad-talha-shahid-a956635a/",
		"https://github.com/Ace-kv",
	],
};

export const aboutMe = {
	id: uuidv4(),
	title: "About Me",
	body: [
		"Self-taught developer passionate about using technology to create positive change and thrive on collaborative opportunities, valuing human interaction as much as technical expertise. I possess a strong aptitude for tackling challenging problems and maintaining unwavering focus on my goals, even when faced with challenges.",
		"Outside of work, I enjoy exercising, reading, and quality time with loved ones. I strongly believe that my determination, can-do attitude, and hard work make me a true asset to any team.",
	],
};

export const skills = {
	id: uuidv4(),
	soft: [
		{ icon: "👂🏼", text: "Active Listening" },
		{ icon: "💬", text: "Effective Communication" },
		{ icon: "👥", text: "Collaboration" },
		{ icon: "🤝", text: "Teamwork" },
		{ icon: "💡", text: "Problem Solving" },
		{ icon: "⌛️", text: "Time management" },
	],
	hard: [
		{ icon: "📈", text: "Next.js" },
		{ icon: "ʦ", text: "TypeScript" },
		{ icon: "🚀", text: "React" },
		{ icon: "📈", text: "Tailwind CSS" },
		{ icon: "📃", text: "Drizzle ORM" },
		{ icon: "💾", text: "Vercel-Postgres" },
		{ icon: "📊", text: "Sanity - Headless CMS" },
		{ icon: "💻", text: "Python" },
		{ icon: "🛠️", text: "Flask" },
		{ icon: "💾", text: "SQLite" },
		{ icon: "📃", text: "SQLAlchemy ORM" },
		{ icon: "🧮", text: "Numpy" },
		{ icon: "⚙️", text: "Pandas" },
		{ icon: "📊", text: "Matplotlib" },
		{ icon: "🌊", text: "Seaborn" },
		{ icon: "📜", text: "Plotly" },
	],
};

export const projectData = {
	id: uuidv4(),
	title: "Projects",
	projects: [
		{
			projectName: "Full Stack E-Commerce Project - (Currently Working On)",
			description:
				"Developing a Full-Stack project with TypeScript, Next.js, and Tailwind CSS, using Sanity for product data and Vercel Postgres for cart functionality.",
			skills: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity', 'Vercel-Postgres'],
			link: 'https://github.com/Ace-kv/ecom-website'
		},

		{
			projectName: "Fully Functional Blog",
			description:
				"Developed a feature-rich Blog with User Authentication, Password Reset, and exclusive comment editing and deletion privileges for authors and Admins. Implemented Security Optimizations using libraries like secrets and bleach.",
			skills: ['Python', 'Flask', 'Jinja', 'SQLAlchemy', 'PostgreSQL', 'HTML 5', 'CSS 3', 'JS', 'Bootstrap 5'],
			link: 'https://github.com/Ace-kv/first-functional-blog'
		},

		{
			projectName: "Data Visualization for Nobel Prize Dataset - (Will soon upload IPYNB file on Github)",
			description:
				"Utilised Data Visualization Techniques for Nobel Prize Dataset through Python, leveraging a suite of powerful tools including Plotly, Matplotlib, and Seaborn.",
			skills: ['Python', 'Plotly', 'Matplotlib', 'Seaborn'],
			link: 'https://github.com/Ace-kv'
		},
	],
};