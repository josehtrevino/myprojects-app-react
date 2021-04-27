import classes from './ProjectItem.module.css';
import Card from './Card';

function ProjectItem({ image, title, technologies, description }) {
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
          <button>Add To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default ProjectItem;
