import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
    isMenuOpen: boolean
    isLoading: boolean
}


const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
    isLoading: false,
}


export const UiProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu' });
    }
    
    const toggleLoading = () => {
        console.log('object', state);
        dispatch({ type: '[UI] - ToggleLoading'})
    }


    return (
        <UiContext.Provider value={{
            ...state,

            // Methods
            toggleSideMenu,
            toggleLoading
        }}>
            { children }
        </UiContext.Provider>
    )
};