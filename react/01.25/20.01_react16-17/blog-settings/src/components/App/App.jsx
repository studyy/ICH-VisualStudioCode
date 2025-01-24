import { BlogSettingsProvider } from '../../BlogSettingsProvider'
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { Article } from '../Article/Article';
import styles from './App.module.css';

function App() {
  return (
    <BlogSettingsProvider>
      <div className={styles.app}>
        <SettingsPanel />
        <Article />
      </div>
    </BlogSettingsProvider>
  );
}

export default App;