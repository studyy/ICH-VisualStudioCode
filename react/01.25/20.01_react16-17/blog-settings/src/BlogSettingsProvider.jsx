import { useState } from 'react';
import BlogSettingsContext from './context/BlogSettingsContext'

export const BlogSettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    fontSize: '16px',
    lineHeight: '1.5'
  });

  const updateSettings = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings
    }));
  };

  return (
    <BlogSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </BlogSettingsContext.Provider>
  );
};

