

import { createContext } from 'react';


interface ContextProps {
    isMenuOpen: boolean;
    isLoading: boolean;

    // Methods
    toggleSideMenu: () => void;
    toggleLoading: () => void
}


export const UiContext = createContext({} as ContextProps );