import { useEffect } from 'react';
import { useColorMode } from 'theme-ui'

function ColorModeListener() {
    const [colorMode] = useColorMode();
  
    // Define custom CSS classes for dark and light modes
    const darkModeClass = 'dark-theme';
    const lightModeClass = 'light-theme';
  
    // Apply custom styles to the accordion
    useEffect(() => {
      const accordionRoot = document.querySelector('.AccordionRoot');
  
      if (accordionRoot) {
        accordionRoot.classList.remove(darkModeClass, lightModeClass);
        accordionRoot.classList.add(colorMode === 'light' ? lightModeClass : darkModeClass);
      }
    }, [colorMode, darkModeClass, lightModeClass]);
  
    return null;
  }
  
  export default ColorModeListener;