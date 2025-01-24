import { useContext } from 'react';
import BlogSettingsContext from '../context/BlogSettingsContext';

export const useBlogSettings = () => {
  const context = useContext(BlogSettingsContext);
  if (!context) {
    throw new Error('useBlogSettings must be used within a BlogSettingsProvider');
  }
  return context;
};