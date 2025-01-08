/* eslint-disable react/prop-types */
import styles from './Main.module.css'

export default function Main(props) {
  return (
    <main
      className={
        props.theme === 'light'
          ? styles.light_background
          : styles.dark_background
      }
    >
      <article>
        <h3>Title1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          nemo.
        </p>
      </article>
      <article>
        <h3>Title2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          nemo.
        </p>
      </article>
    </main>
  )
}
