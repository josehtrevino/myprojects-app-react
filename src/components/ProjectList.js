import ProjectItem from './ProjectItem';
import classes from './ProjectList.module.css';

function ProjectList({ projects }) {
  return (
    <ul className={classes.list}>
      {projects.map((project) => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </ul>
  );
}

export default ProjectList;
