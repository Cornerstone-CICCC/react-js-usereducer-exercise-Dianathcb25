import { useReducer } from 'react';
import { changeReducer } from './reducers/changeReducer';

const App = () => {
  const [state, dispatch] = useReducer(changeReducer, {
    isDark: false,
    fSize: 16,
  });

  return (
    <div
      style={{
        backgroundColor: state.isDark ? 'black' : 'white',
        color: state.isDark ? 'white' : 'black',
        fontSize: `${state.fSize}px`,
        minHeight: '100vh',
      }}
    >
      <h1 style={{ margin: 0 }}>Reducer Exercise</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia mollitia
        quisquam, dolore, vero debitis incidunt, numquam autem repudiandae non
        sed qui. Incidunt aut laborum sunt sint magnam rerum tempora placeat?
      </p>

      <button onClick={() => dispatch({ type: 'THEME' })}>
        Toogle Dark Mode
      </button>
      <button onClick={() => dispatch({ type: 'INCREASE' })}>
        Increase Font Size
      </button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>
        Decrease Font Size
      </button>
    </div>
  );
};

export default App;
