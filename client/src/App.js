import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import style from './App.module.css';




function App() {
    return (
        <div className={style.app}>
            <Header></Header>
            <Menu></Menu>
        </div>
    );
};

export default App;
