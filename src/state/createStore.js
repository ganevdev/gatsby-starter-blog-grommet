import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === `CHANGE_THEME`) {
    return Object.assign({}, state, {
      themeType: state.themeType === 'light' ? 'dark' : 'light'
    });
  }
  return state;
};

const initialState = { themeType: 'light' };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
