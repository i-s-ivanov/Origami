import style from './Main.module.css';

const Main = () => {
    return (
        <main className={style.main}>
            <h1 className={style.title}>Soooooome Heading</h1>
            <div className={style.posts}>
                <div className={style.post}>
                    <img src="/blue-origami-bird.png" alt="" className={style.postImg} />
                    <p className={style.description}>Texxxxxxxxxxxxxxxxxxxxxtt</p>
                    <div>
                        <span className={style.postSpan}>
                            <small>Author:</small>
                            Some Anonymous
                        </span>
                    </div>
                </div>
            </div>
        </main >
    );
};


export default Main;