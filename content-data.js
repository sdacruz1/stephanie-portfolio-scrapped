const tripathi_labs = {
    workplace: 'Tripathi Bioinformatics Laboratory',
    title: 'Website Developer and Software Engineer',
    duration: 'Sept 2023 - Present',
    bullet_points: ['Led the redesign and modernization of the lab website, enhancing its representation of ongoing projects and strengthening its online presence within the campus community.',
                    'Designed and optimized the user interface (UI) and user experience (UX) for research products developed by current researchers, ensuring intuitive navigation and engagement for users.',
                    'Developed software tailored for bioinformatics analysis, starting from conceptual workflows and progressing to the creation of a fully functional product, facilitating efficient data analysis and interpretation in research projects.',
                    ],
    skills: 'Express - Node.js - Wix',
    imgs: 0
  };
  const ppc = {
    workplace: 'Pawtucket Primary Care',
    title: 'Software Engineer',
    duration: 'Jun 2023 - Sept 2023',
    bullet_points: ['Spearheaded the design and launch of the Pawtucket Primary Care website, overseeing branding initiatives and developing marketing materials to enhance brand visibility and engagement.',
                    'Managed social media channels and executed targeted advertising campaigns, driving customer acquisition and retention efforts.',
                    'Cultivated strong client and provider relationships, ensuring exceptional service delivery and client satisfaction.',
                    'Organized and maintained documentation, including filling out forms and handling administrative tasks to streamline operations and ensure compliance.'],
    skills: 'Github - React (+Typescript) - Google SEO',
    imgs: 1
  };
  const ipp = {
    workplace: 'Industry Partners Program',
    title: 'Software Engineer',
    duration: 'Oct 2022 - May 2023',
    bullet_points: ['Collaborated within a small team to conceptualize and develop a website, ensuring a seamless user experience throughout the design and implementation phases.',
                    'Utilized Figma to create and refine wireframes, translating design concepts into interactive prototypes.',
                    'Employed React.js to code the website, integrating a Firebase database for dynamic content management and real-time updates.',
                    'Implemented version control and deployment strategies using Github, ensuring code integrity and facilitating team collaboration in a distributed development environment.'],
    skills: 'Github - Firebase - React',
    imgs: 2
  };
  const skills = ['English, Spanish, French', 'Github', 'Figma', 'Adobe Creative Cloud', 'Procreate', 'Google SEO',
                'React', 'Typescript', 'Javascript', 'HTML/CSS', 'Node.js', 'Express',
                'Firebase', 'SQL', 'GoLang', 'Python', 'C/C+', 'Unity', 'Maya', 'Blender', 'MongoDB'];
  
  const imageArrays =  [
    ['/images/tripathi_imgs/Home.png', '/images/tripathi_imgs/People.png', '/images/tripathi_imgs/Publications.png'],
    ['/images/ppc_imgs/Home.png', '/images/ppc_imgs/Logos.png', '/images/ppc_imgs/Services.png'],
    ['/images/ipp_imgs/FinalMockup.png', '/images/ipp_imgs/DesignGuide.png', '/images/ipp_imgs/EarlyDesigns.png']
  ];

  module.exports = { tripathi_labs, ppc, ipp, skills, imageArrays };