import { useBlogSettings } from '../../hooks/useBlogSettings';
import styles from './SettingsPanel.module.css';

export const SettingsPanel = () => {
  const { settings, updateSettings } = useBlogSettings();

  const fontSizes = ['12px', '14px', '16px', '18px', '20px'];
  const lineHeights = ['1.2', '1.5', '1.8', '2.0'];

  const handleFontSizeChange = (e) => {
    updateSettings({ fontSize: e.target.value });
  };

  const handleLineHeightChange = (e) => {
    updateSettings({ lineHeight: e.target.value });
  };

  return (
    <div className={styles.settingsPanel}>
      <div className={styles.setting}>
        <label htmlFor="fontSize">Размер шрифта:</label>
        <select
          id="fontSize"
          value={settings.fontSize}
          onChange={handleFontSizeChange}
        >
          {fontSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      <div className={styles.setting}>
        <label htmlFor="lineHeight">Межстрочный интервал:</label>
        <select
          id="lineHeight"
          value={settings.lineHeight}
          onChange={handleLineHeightChange}
        >
          {lineHeights.map(height => (
            <option key={height} value={height}>{height}</option>
          ))}
        </select>
      </div>
    </div>
  );
};