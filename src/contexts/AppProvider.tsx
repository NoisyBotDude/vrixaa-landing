import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { NavigationProvider } from './NavigationContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider>
      <NavigationProvider>
        {children}
      </NavigationProvider>
    </ThemeProvider>
  );
} 