import { UiState } from './';


type UiActionType = 
   | { type: '[UI] - ToggleMenu' } 
   | { type: '[UI] - ToggleLoading'}

export const uiReducer = ( state: UiState, action: UiActionType ): UiState => {

   switch (action.type) {
      case '[UI] - ToggleMenu':
         return {
            ...state,
            isMenuOpen: !state.isMenuOpen
        }
      
      case '[UI] - ToggleLoading':
         return {
            ...state,
            isLoading: !state.isLoading
         }

       default:
          return state;
   }

}