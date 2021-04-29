import { useContext } from 'react';

import classes from './ProjectItem.module.css';
import Card from './Card';
import CompletedContext from '../store/completed-context';

function ProjectItem({ id, image, title, technologies, description }) {
  const completedCtx = useContext(CompletedContext);

  const itemIsCompleted = completedCtx.itemIsCompleted(id);

  const toggleCompletedStatusHandler = () => {
    if (itemIsCompleted) {
      completedCtx.removeCompleted(id);
    } else {
      completedCtx.addCompleted({
        id,
        title,
        description,
        image,
        technologies,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <strong>Technologies used:</strong> {technologies}
          </p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleCompletedStatusHandler}>
            {itemIsCompleted
              ? 'Remove from Completed Projects'
              : 'Add To Completed Projects'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ProjectItem;
