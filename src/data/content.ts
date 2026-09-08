export type Bi = { en: string; fr: string };

export const bio: { headline: Bi; paragraphs: Bi[] } = {
	headline: {
		en: 'MASc researcher working across CFD and machine learning.',
		fr: "Chercheur à la maîtrise, à la croisée de la CFD et de l'apprentissage automatique.",
	},
	paragraphs: [
		{
			en: "I'm a Master's (MASc) researcher in Mechanical Engineering at Concordia University's Turbulence Research Lab (CTRL), working at the intersection of high-fidelity CFD and machine learning. My current research runs on two threads: large-eddy simulations of dual reacting hydrogen jets in crossflow for combustor design, and a reinforcement-learning framework for correcting RANS turbulence closures against DNS/LES data, built on a coupled OpenFOAM / PyTorch / LibTorch pipeline.",
			fr: "Je suis chercheur à la maîtrise (MASc) en génie mécanique au Concordia Turbulence Research Lab (CTRL), à la croisée de la CFD haute-fidélité et de l'apprentissage automatique. Mes travaux actuels suivent deux axes : des simulations LES de jets d'hydrogène réactifs jumelés en écoulement transversal pour la conception de chambres de combustion, et un cadre d'apprentissage par renforcement pour corriger les fermetures de turbulence RANS à partir de données DNS/LES, sur un pipeline couplé OpenFOAM / PyTorch / LibTorch.",
		},
		{
			en: "Outside the lab, I founded Vortic CFD, turning CFD simulations of modified cars into short-form educational content, and spent several years working airside at Montreal-Trudeau airport as a licensed aircraft tow operator and team lead. I hold a Bachelor of Engineering (Mechanical, Co-op) from Concordia, graduated with distinction, and have taught thermodynamics and PDEs as a teaching assistant.",
			fr: "En dehors du laboratoire, j'ai fondé Vortic CFD, qui transforme des simulations CFD de voitures modifiées en contenu éducatif court, et j'ai travaillé plusieurs années en piste à l'aéroport Montréal-Trudeau comme remorqueur d'avions licencié et chef d'équipe. Je détiens un baccalauréat en génie mécanique (coop) de Concordia, obtenu avec distinction, et j'ai enseigné la thermodynamique et les équations aux dérivées partielles comme auxiliaire d'enseignement.",
		},
	],
};

export const skills = {
	tools: ['OpenFOAM', 'StarCCM+', 'CATIA V5', 'SolidWorks', 'MATLAB/Simulink', 'ANSYS Fluent', 'AutoCAD'],
	languages: ['C++', 'Python', 'MATLAB', 'JavaScript', 'Java', 'Arduino'],
	hpcMl: ['SLURM', 'Linux/Bash', 'Git', 'PyTorch', 'TensorFlow', 'LibTorch (C++)', 'HPC clusters'],
};

export const education: { school: Bi; degree: Bi; years: string; detail: Bi }[] = [
	{
		school: { en: 'Concordia University, Montreal', fr: 'Université Concordia, Montréal' },
		degree: { en: 'Master of Applied Science, Mechanical Engineering (4.3 GPA)', fr: 'Maîtrise ès sciences appliquées, génie mécanique (GPA 4.3)' },
		years: '2025–2027 (expected)',
		detail: { en: 'Research: physics-informed machine learning for turbulence closure, combustion physics.', fr: 'Recherche : apprentissage automatique informé par la physique pour la fermeture de turbulence, physique de la combustion.' },
	},
	{
		school: { en: 'Concordia University, Montreal', fr: 'Université Concordia, Montréal' },
		degree: { en: 'Bachelor of Engineering, Mechanical Engineering Co-op (3.82 GPA)', fr: 'Baccalauréat en génie mécanique, coop (GPA 3.82)' },
		years: '2021–2025',
		detail: { en: 'Relevant courses: computational fluid dynamics, gas dynamics, control systems design.', fr: 'Cours pertinents : dynamique des fluides numérique, dynamique des gaz, conception de systèmes de contrôle.' },
	},
	{
		school: { en: 'Vanier College, St. Laurent', fr: 'Collège Vanier, St-Laurent' },
		degree: { en: 'DEC in Computer Science and Mathematics', fr: 'DEC en informatique et mathématiques' },
		years: '2019–2021',
		detail: { en: '', fr: '' },
	},
];

export type WorkEntry = {
	org: string;
	role: Bi;
	years: string;
	bullets: Bi[];
	images?: string[];
};

export const work: WorkEntry[] = [
	{
		org: 'EffectiV, Montreal',
		role: { en: 'Researcher — CFD Research Project (under NDA)', fr: 'Chercheur — projet de recherche CFD (sous NDA)' },
		years: 'Sept 2026–Present',
		bullets: [
			{
				en: 'Conducting applied CFD research for industry partner EffectiV on industrial HVAC airflow systems; project scope and methods are confidential under NDA.',
				fr: "Recherche CFD appliquée pour le partenaire industriel EffectiV sur des systèmes de ventilation CVC industriels ; la portée et les méthodes du projet sont confidentielles (NDA).",
			},
		],
	},
	{
		org: 'Pratt & Whitney, Mirabel',
		role: { en: 'Production Process Planner', fr: 'Planificateur de procédés de production' },
		years: 'March 2026–July 2026',
		bullets: [
			{ en: 'Verified and corrected engine assembly instructions for the PW800 and PW1000 engines.', fr: "Vérification et correction des instructions d'assemblage des moteurs PW800 et PW1000." },
			{ en: 'Modified assembly procedures and tooling in accordance with operational and design constraints.', fr: "Modification des procédures d'assemblage et de l'outillage selon les contraintes opérationnelles et de conception." },
		],
	},
	{
		org: 'SAMSIC, Montreal',
		role: { en: 'Team Lead / Aircraft Tower', fr: "Chef d'équipe / remorqueur d'avions" },
		years: 'July 2023–March 2026',
		bullets: [
			{ en: 'Delegated responsibilities and prioritized task assignment based on qualifications and operational needs.', fr: "Délégation des responsabilités et priorisation des tâches selon les qualifications et les besoins opérationnels." },
			{ en: 'Resolved equipment and staff shortages with quick resourceful thinking to prevent operational delays.', fr: "Résolution rapide des pénuries d'équipement et de personnel afin d'éviter les retards opérationnels." },
			{ en: 'Transported aircraft safely between gates and to the hangar according to standard procedures.', fr: "Transport sécuritaire des avions entre les portes et le hangar selon les procédures standard." },
		],
		images: ['samsic/img1.jpg', 'samsic/img2.jpg'],
	},
	{
		org: 'CAE, Montreal',
		role: { en: 'Aircraft Software Systems Intern', fr: 'Stagiaire en systèmes logiciels aéronautiques' },
		years: 'January 2024–August 2024',
		bullets: [
			{ en: 'Debugged and corrected simulator software (C++) using Jira to align with expected aircraft behavior.', fr: "Débogage et correction de logiciels de simulateur (C++) via Jira pour correspondre au comportement attendu de l'avion." },
			{ en: 'Coordinated with international clients to promptly resolve issues, ensuring constant operation.', fr: "Coordination avec des clients internationaux pour résoudre rapidement les problèmes et assurer un fonctionnement continu." },
			{ en: 'Pioneered new simulator features to align with aircraft documentation.', fr: "Développement de nouvelles fonctionnalités de simulateur conformes à la documentation de l'avion." },
		],
		images: ['cae/img1.jpeg'],
	},
	{
		org: 'Primeflight, Montreal',
		role: { en: 'Supervisor — Aircraft Loading', fr: 'Superviseur — chargement des avions' },
		years: 'August 2022–August 2023',
		bullets: [
			{
				en: 'Coordinated loading, weight and balance, and turnaround operations across teams, reallocating equipment and staff between teams as needed.',
				fr: "Coordination du chargement, du poids et centrage, et des rotations entre équipes, avec réaffectation de l'équipement et du personnel selon les besoins.",
			},
		],
		images: ['global/img1.jpg', 'global/img2.jpg'],
	},
];

export type ProjectEntry = {
	title: Bi;
	org?: string;
	years: string;
	tags: string[];
	summary: Bi;
	link?: { href: string; label: string };
	images?: string[];
	featured?: boolean;
};

export const researchProjects: ProjectEntry[] = [
	{
		title: {
			en: 'Jet spacing effects on flame structure and CVP interaction in reacting hydrogen jets in crossflow',
			fr: "Effets de l'espacement des jets sur la structure de flamme et l'interaction CVP dans des jets d'hydrogène réactifs en écoulement transversal",
		},
		org: 'Concordia University',
		years: '2025–Present',
		tags: ['LES', 'OpenFOAM', 'StarCCM+', 'Combustion', 'HPC'],
		summary: {
			en: 'High-fidelity LES (validated to quasi-DNS accuracy) of dual reacting hydrogen jets in crossflow across a range of jet-to-jet spacings. Shows that reaction — not kinematics — organizes and drives coherent vortex shedding, with a dominant, phase-locked shedding mode strongly coherent with heat-release rate. Results are informing wall-confined, low-momentum-ratio hydrogen combustor design guidelines and are being prepared for peer-reviewed publication.',
			fr: "Simulations LES haute-fidélité (validées à une précision quasi-DNS) de jets d'hydrogène réactifs jumelés en écoulement transversal, pour différents espacements inter-jets. Les résultats montrent que c'est la réaction, et non la cinématique, qui organise et entraîne le détachement tourbillonnaire cohérent, avec un mode de détachement dominant et verrouillé en phase avec le taux de dégagement de chaleur. Ces résultats orientent les lignes directrices de conception de chambres de combustion à l'hydrogène à faible rapport de quantité de mouvement, en vue d'une publication évaluée par les pairs.",
		},
		featured: true,
	},
	{
		title: {
			en: 'A velocity-feedback framework for deep reinforcement learning-augmented turbulence modelling',
			fr: 'Un cadre à rétroaction de vitesse pour la modélisation de la turbulence augmentée par apprentissage par renforcement profond',
		},
		org: 'Concordia University, with E. E. Essel',
		years: '2025–Present',
		tags: ['Reinforcement Learning', 'PyTorch', 'LibTorch', 'OpenFOAM', 'RANS/DNS'],
		summary: {
			en: 'A framework and toolkit for training reinforcement-learning turbulence closure models that correct RANS predictions against high-fidelity DNS/LES data, coupling OpenFOAM with PyTorch during training and a C++/LibTorch pipeline for production CFD inference. Built a standardized high-fidelity dataset, validated closures across multiple flow geometries, and co-supervised an undergraduate capstone team building a water tunnel for the CTRL.',
			fr: "Un cadre et une boîte à outils pour entraîner des modèles de fermeture de turbulence par apprentissage par renforcement, corrigeant les prédictions RANS à partir de données DNS/LES haute-fidélité, couplant OpenFOAM et PyTorch à l'entraînement et un pipeline C++/LibTorch pour l'inférence en production. Un jeu de données haute-fidélité standardisé a été constitué, les fermetures validées sur plusieurs géométries d'écoulement, en co-supervisant une équipe de capstone au premier cycle construisant un tunnel hydrodynamique pour le CTRL.",
		},
		featured: true,
	},
	{
		title: { en: 'Industrial HVAC airflow CFD research', fr: 'Recherche CFD sur les écoulements CVC industriels' },
		org: 'EffectiV, Montreal',
		years: '2026–Present',
		tags: ['CFD', 'HVAC', 'Industry'],
		summary: {
			en: 'Applied CFD research for industry partner EffectiV on industrial HVAC airflow systems. Project scope and methods are confidential under NDA.',
			fr: "Recherche CFD appliquée pour le partenaire industriel EffectiV sur des systèmes de ventilation CVC industriels. La portée et les méthodes sont confidentielles (NDA).",
		},
	},
];

export const otherProjects: ProjectEntry[] = [
	{
		title: { en: 'Vortic CFD', fr: 'Vortic CFD' },
		years: '2026–Present',
		tags: ['Founder', 'CFD', 'Content'],
		summary: {
			en: 'Founded and lead Vortic CFD, an AI-services venture applying physical AI / CFD-informed modelling, paired with educational social media content built from real OpenFOAM simulations of modified cars.',
			fr: "Fondateur et responsable de Vortic CFD, une entreprise de services en IA appliquant la modélisation informée par la CFD, couplée à du contenu éducatif sur les réseaux sociaux basé sur de vraies simulations OpenFOAM de voitures modifiées.",
		},
		link: { href: 'https://vortic.ca', label: 'vortic.ca' },
	},
	{
		title: { en: 'Aerodynamic analysis of modified race cars', fr: 'Analyse aérodynamique de voitures de course modifiées' },
		years: '2025',
		tags: ['LiDAR', 'Blender', 'OpenFOAM'],
		summary: {
			en: '3D-scanned (LiDAR) modified vehicles, meshed the geometry in Blender, and ran full aerodynamic analyses in OpenFOAM to evaluate lift and drag. Delivered comprehensive aerodynamic reports recommending modifications (spoiler, wing, lip, skirts) tailored to each vehicle.',
			fr: "Numérisation 3D (LiDAR) de véhicules modifiés, maillage sous Blender, et analyses aérodynamiques complètes sous OpenFOAM pour évaluer portance et traînée. Livraison de rapports aérodynamiques recommandant des modifications (aileron, becquet, lip, jupes) adaptées à chaque véhicule.",
		},
	},
	{
		title: { en: 'Lift and drag on an airfoil — numerical methods research paper', fr: 'Portance et traînée sur un profil aérodynamique — étude de méthodes numériques' },
		years: '2024',
		tags: ['Numerical Methods', 'MATLAB'],
		summary: {
			en: 'Implemented and compared panel and finite-difference methods for predicting lift and drag on airfoil geometries against reference aerodynamic data, analyzing convergence and accuracy trade-offs for early-stage aerodynamic design.',
			fr: "Mise en œuvre et comparaison de méthodes de panneaux et de différences finies pour prédire la portance et la traînée de profils aérodynamiques, avec analyse des compromis de convergence et de précision pour la conception préliminaire.",
		},
		images: ['464/img1.JPG', '464/img2.JPG', '464/img3.JPG', '464/img4.JPG'],
	},
	{
		title: { en: 'Restoration of a 1993 BMW 318is (E36)', fr: "Restauration d'une BMW 318is 1993 (E36)" },
		years: '2021–2022',
		tags: ['Personal', 'Mechanical'],
		summary: {
			en: 'Restored a discarded BMW 318is to full working condition, diagnosing and repairing the clutch, engine, suspension, brakes, and electrical systems — resold for three times the original purchase price.',
			fr: "Restauration complète d'une BMW 318is abandonnée : diagnostic et réparation de l'embrayage, du moteur, de la suspension, des freins et du système électrique — revendue trois fois son prix d'achat initial.",
		},
		images: ['e36/img1.jpg', 'e36/img2.jpg', 'e36/img4.jpeg', 'e36/img5.jpeg', 'e36/img6.jpg'],
	},
	{
		title: { en: 'CV Cup induction hardening research', fr: 'Recherche sur la trempe par induction (CV Cup)' },
		years: '2023',
		tags: ['Materials', 'Extracurricular'],
		summary: {
			en: 'Researched induction hardening process parameters and their effect on surface hardness and wear resistance for competition vehicle components, presenting material and treatment recommendations to the CV Cup team.',
			fr: "Recherche sur les paramètres de trempe par induction et leur effet sur la dureté de surface et la résistance à l'usure de composants de véhicule de compétition, avec recommandations présentées à l'équipe CV Cup.",
		},
	},
	{
		title: { en: 'Capstone: water ingress testing tank for wearable timepieces', fr: "Capstone : réservoir d'essai d'étanchéité pour montres" },
		years: '2025',
		tags: ['MECH 490', 'Design'],
		summary: {
			en: 'Mechanical engineering capstone design project: designed and built a water ingress testing tank for wearable timepieces.',
			fr: "Projet de fin d'études en génie mécanique : conception et construction d'un réservoir d'essai d'étanchéité pour montres.",
		},
		images: ['490/img1.jpg', '490/img2.jpg', '490/img3.jpg', '490/img4.jpg', '490/img5.jpg'],
	},
	{
		title: { en: 'Unified power transmission system for the textile industry', fr: "Système de transmission de puissance unifié pour l'industrie textile" },
		years: '2024',
		tags: ['MECH 390', 'Design'],
		summary: {
			en: 'Mechanical engineering design project developing a unified power transmission system for textile manufacturing equipment.',
			fr: "Projet de conception en génie mécanique d'un système de transmission de puissance unifié pour l'équipement de fabrication textile.",
		},
		images: ['390/img1.jpg', '390/img2.jpg', '390/img4.jpg', '390/img5.jpg', '390/img6.jpg'],
	},
];

export const awards = [
	"Dean's List (2023, 2024, 2025)",
	'Graduated with Distinction',
	'ENCS Merit Scholarship',
	'Golden Key Award',
];
