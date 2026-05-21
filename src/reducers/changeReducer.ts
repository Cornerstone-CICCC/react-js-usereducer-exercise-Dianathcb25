type State = {
  isDark: boolean;
  fSize: number;
};

type Action = { type: 'THEME' } | { type: 'INCREASE' } | { type: 'DECREASE' };

export const changeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'THEME':
      return { ...state, isDark: !state.isDark };
    case 'INCREASE':
      return { ...state, fSize: state.fSize + 1 };
    case 'DECREASE':
      return { ...state, fSize: state.fSize - 1 };
    default:
      return state;
  }
};
