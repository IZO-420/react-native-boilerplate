import { LanguageActionType } from "../../../types/helpers/redux/states";

const initialState = {
  language: 'en',
};

 const languageReducers = (state = initialState, action:LanguageActionType) => {
  switch (action.type) {
      case 'updateLanguage':
        return{
            ...state,
            language:action.payload
        }
    default:
      return state;
  }
};
export default languageReducers