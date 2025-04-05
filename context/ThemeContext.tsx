import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen } from 'expo-router';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { useColorScheme } from 'react-native';


// Creating the Theme Context
interface ThemeContextType {
  theme: string,
  setTheme: (value: string) => void
};

const ThemeContext = createContext<ThemeContextType | undefined>({ theme: '', setTheme: () => '' });

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeProvider."
    );
  }
  return context;
};
interface ThemeProviderProps {
  children: ReactNode;
}


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export const ThisThemeProvider: React.FC<ThemeProviderProps> = ({
  children
}) => {
  const [theme, setTheme] = useState('');
  const colorScheme = useColorScheme();
  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('userTheme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        setTheme(colorScheme === 'dark' ? 'dark' : 'light');
      }
    } catch (error) {
      console.error('Error loading theme:', error);
      setTheme('light'); // Fallback in case of error
    }
  };
  useEffect(() => {
    const initializeApp = async () => {
      await loadTheme(); // Wait for the theme to load
      SplashScreen.hideAsync(); // Hide the splash screen once ready
    };

    initializeApp();
  }, [colorScheme]);

  if (theme === ''){
    return null;
    // load theme before showing the application.
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme }>
      {children}
      </ThemeProvider>
    </ThemeContext.Provider>

  )
}

// Save the theme.
export const saveTheme = async (newTheme: string, setTheme: ((value: string) => void)) => {
  await AsyncStorage.setItem('userTheme', newTheme);
  setTheme(newTheme);
};