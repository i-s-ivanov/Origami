import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import style from './App.module.css';
import Main from './components/Main/Main';



function App() {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Menu />
                <Main />
            </div>
        </div>
    );
};

export default App;
