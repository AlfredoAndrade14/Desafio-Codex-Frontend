import style from '../src/styles/components/App.module.css'
import SingPage from './pages/SignPage'


function App() {
  return (
    <div className={style.container}>
      <SingPage />
    </div>
  );
}

export default App;
