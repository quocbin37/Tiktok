import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data ,onClick}) {
    const classes = cx('menu-item',{
        separate: data.seperate
    })
    return (
        <Button     
            className={classes}
            leftIcon={data.icon} 
            to={data.to} 
            onClick={onClick}>
            {data.title}
        </Button>
    );
}
export default MenuItem;