import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({to, href, primary, outline, size, children, onClick, passProps}) {
    let Comp = 'button'
    const props = {
        onClick,
        passProps
    }

    if(to) {
        props.to = to
        Comp = Link
    }else if(href) {
        props.to = href
        Comp = 'a'
    }

    const classes = cx('wrapper',{
        primary,
        outline
    }, size)

    return (
        <Comp className={classes} {...passProps}>
            <span>{children}</span>
        </Comp>
    )
}

export default Button;