import profileImage from '../assets/profile/profile.png';
import ecommerceImage from '../assets/projects/ecommerce.jpg';
import ecommerceUiuxImage from '../assets/projects/ecommerce-uiux.jpg';
import uiuxCertificateImage from '../assets/certificates/uiux-certificate.jpg';
import frontendCertificateImage from '../assets/certificates/frontend-certificate.jpeg';
import promptEngineeringImage from '../assets/achievements/promptengineering.jpg';
import sihImage from '../assets/achievements/sih_certificates.jpg';

export const links = {
  github: 'https://github.com/VIDYA07-01',
  linkedin: 'https://www.linkedin.com/in/vidyashree-nandani-805807399',
  resume: 'vidyashree_resume',
};

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const heroData = {
  badge: 'BCA STUDENT • WEB DEVELOPER',
  greeting: "Hi, I'm Vidyashree",
  highlight: 'Vidyashree',
  subtitle: 'I build user-friendly digital experiences.',
  description:
    "I’m a BCA student interested in web development, frontend development and UI/UX design. I enjoy learning new technologies and creating clean, user-friendly digital solutions.",
  profileImage,
};

export const educationDetails = [
  { label: 'Education', value: 'BCA' },
  { label: 'College', value: 'Shri Shivayogi Murughendra Swamiji BCA College, Athani' },
  { label: 'Location', value: 'Belagavi District, Karnataka, India' },
  { label: 'Focus', value: 'Web Development & UI/UX' },
];

export const skills = [
  { name: 'UI/UX Design', category: 'Design', icon: 'Palette' },
  { name: 'HTML', category: 'Markup', icon: 'Code2' },
  { name: 'CSS', category: 'Styling', icon: 'Sparkles' },
  { name: 'JavaScript', category: 'Language', icon: 'Code2' },
  { name: 'React', category: 'Framework', icon: 'Code2' },
  { name: 'Bootstrap', category: 'Framework', icon: 'Layers3' },
  { name: 'Python', category: 'Programming', icon: 'TerminalSquare' },
  { name: 'MySQL', category: 'Database', icon: 'Database' },
  { name: 'Excel', category: 'Data', icon: 'FileSpreadsheet' },
  { name: 'VS Code', category: 'Editor', icon: 'MonitorSmartphone' },
  { name: 'Git', category: 'Version Control', icon: 'FolderGit2' },
  { name: 'GitHub', category: 'Platform', icon: 'Github' },
];

export const projects = [
  {
    id: 'PROJECT 01',
    title: 'E-Commerce Website',
    description:
      'Developed a responsive e-commerce website with a user-friendly interface, product-focused layout, responsive design, navigation, and interactive frontend functionality.',
    image: ecommerceImage,
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    projectLink: 'ADD_PROJECT_LINK_HERE',
    githubLink: 'https://github.com/VIDYA07-01',
  },
  {
    id: 'PROJECT 02',
    title: 'E-Commerce UI/UX Design',
    description:
      'Designed an e-commerce user interface focusing on usability, visual hierarchy, responsive layouts, navigation, and a user-friendly shopping experience.',
    image: ecommerceUiuxImage,
    tags: ['UI/UX', 'Wireframes', 'Responsive Design', 'UX Research'],
    projectLink: 'ADD_UIUX_PROJECT_LINK_HERE',
    githubLink: 'https://github.com/VIDYA07-01',
  },
];

export const certificates = [
  {
    title: 'UI/UX Certificate',
    category: 'UI/UX Design',
    description: 'Certificate focused on user interface design principles and user-centered thinking.',
    image: uiuxCertificateImage,
 
  },
  {
    title: 'Frontend Development Certificate',
    category: 'Frontend Development',
    description: 'Certificate highlighting frontend fundamentals and interactive web development learning.',
    image: frontendCertificateImage,

  },
];

export const achievements = [
  {
    title: '1st Place – Internal Smart India Hackathon',
    description: 'I achieved 1st Place in the Internal Smart India Hackathon at the college level.Bharat Land Research & Governance Portal  — Team Project    • Developed a prototype to centralize land research, policies, datasets, GIS information, and case studies.• Contributed to search, data management, GIS, reports, authentication, and collaboration features.',
    image: sihImage,
  },
  {
    title: 'Prompt Engineering Competition',
    description:
      'Participated in a prompt engineering competition focused on structured prompting, creative problem-solving, and effective communication through AI-driven workflows.',
    image: promptEngineeringImage,
  },
];

export const contactDetails = {
  email: 'nandanividyashree@gmail.com',
  location: 'Belagavi District, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/vidyashree-nandani-805807399',
};
