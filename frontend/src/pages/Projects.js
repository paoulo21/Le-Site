import React from 'react';
import './Page.css';

function Projects() {
  const getStatusClass = (status) => {
    const statusMap = {
      'In Progress': 'in-progress',
      'Planning': 'planning',
      'Idea': 'idea'
    };
    return statusMap[status] || 'default';
  };

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is where I can code whatever I feel like',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Another experimental project',
      status: 'Planning'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Future ideas and experiments',
      status: 'Idea'
    }
  ];

  return (
    <div className="page">
      <h1>Projects</h1>
      <p>Here are some of the things I'm working on or planning to build.</p>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className={`status status-${getStatusClass(project.status)}`}>
              {project.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
