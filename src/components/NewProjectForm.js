import { useRef } from 'react';

import Card from './Card';
import classes from './NewProjectForm.module.css';

function NewProjectForm({ onAddProject }) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const technologiesInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const title = titleInputRef.current.value;
    const image = imageInputRef.current.value;
    const technologies = technologiesInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const projectData = {
      title,
      image,
      technologies,
      description,
    };

    onAddProject(projectData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Project Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Project Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="technologies">Technologies</label>
          <input
            type="text"
            required
            id="technologies"
            ref={technologiesInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Project</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProjectForm;
