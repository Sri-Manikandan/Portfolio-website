import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a third-year Computer Science and Engineering student, I bring a diverse skill set encompassing Python, Generative AI, and the Django Framework. My expertise extends to working with Large Language Models (LLMs) and Langchain, along with a strong foundation in MongoDB, SQL, React, Node.js, and FastAPI. Additionally, I have experience with Django and various cloud services, allowing me to build robust and scalable applications. This combination of skills enables me to tackle complex problems and develop innovative solutions in the ever-evolving tech landscape. I'm eager to leverage my knowledge and experience to drive impactful projects and contribute to cutting-edge developments.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "JobFit AI",
    image: project1,
    description:
      `JobFit AI provides personalized resume insights and job matching algorithms to enhance job seeker's opportunities. JobFit AI offers recruiters efficient resume screening and shortlisting, improving the hiring process and decision-making.`,
    technologies: ["Streamlit", "GPT-4o", "Langchain", "Deeplake", "SQLite3"],
  },
  {
    title: "Vidhi Vicharam",
    image: project4,
    description:
      "It is a full web application built using Django which helps to identify the laws and recommending them using AI and ML",
    technologies: ["HTML", "CSS", "Bootstrap", "Django", "sqlite3","Python","GenAI"],
  },
  {
    title: "InstaChat",
    image: project2,
    description:
      "This application is a full stack messaging web application built using MERN Stack, and Socket.IO Library",
    technologies: ["React", "Node JS", "MongoDB", "Express", "Socket.IO"],
  },
  {
    title: "Badminton E-Commerce",
    image: project3,
    description:
      "This web application is full stack ecommerce web application which is built using Django Framework, with many exciting features like user authentication, cart features and checkout integration.",
    technologies: ["HTML", "CSS", "Django", "Bootstrap", "JavaScript","sqlite3"],
  },
];

export const CONTACT = {
  address: "Coimbatore, Tamil Nadu",
  phoneNo: "+91 9677741597",
  email: "srimanikandandev@gmail.com",
};
