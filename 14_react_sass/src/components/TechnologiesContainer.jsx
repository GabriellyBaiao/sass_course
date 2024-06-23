import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiLinux,
  DiReact,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: < DiCss3 /> },
  { id: "js", name: "Javascript", icon: < DiJsBadge /> },
  { id: "node", name: "Node.js", icon: < DiNodejsSmall /> },
  { id: "linux", name: "Linux", icon: <DiLinux /> },
  { id: "react", name: "React", icon: < DiReact /> },
];

const TechnologiesContainer = () => {
  return <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
       {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technologie-info">
            <h3>{tech.name}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Incidunt voluptatum officia vitae, ipsa nobis nemo itaque 
              commodi distinctio tempore, nulla earum. Labore, ut! 
              Tempore reprehenderit incidunt at, deleniti maxime 
              temporibus!
            </p>
          </div>
        </div>
       ))}
    </div>
  </section>
};

export default TechnologiesContainer;