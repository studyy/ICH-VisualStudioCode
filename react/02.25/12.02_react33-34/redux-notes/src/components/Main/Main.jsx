import styles from './Main.module.css'

export default function Main({ children }) {
  return <header className={styles.Main}>{children}</header>
}
