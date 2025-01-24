import { useBlogSettings } from '../../hooks/useBlogSettings';
import styles from './Article.module.css';

export const Article = () => {
  const { settings } = useBlogSettings();

  return (
    <article
      className={styles.article}
      style={{
        fontSize: settings.fontSize,
        lineHeight: settings.lineHeight,
      }}
    >
      <h1>Article Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure minima quae repellendus laboriosam modi libero accusamus voluptate quaerat quas.
      </p>
    </article>
  );
};