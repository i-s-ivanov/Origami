import style from './MenuItem.module.css';

const MenuItem = ({
    children 
}) => {
    return (
        <li className={style.listItem}><a href="#">{children}</a></li>
    );
};


export default MenuItem;