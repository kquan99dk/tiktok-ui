import ClassNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faUserGroup,
    faCompass,
    faVideo
  } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import { USERS } from '~/data/listUser';

const cx = ClassNames.bind(styles)
function Sidebar() {
    return ( <div className={cx('wrapper')}>
        <div className={cx('options', 'active')}>
            <FontAwesomeIcon className={cx('icon')} icon={faHouse} />
            <span>Dành cho bạn</span>
        </div>
        <div className={cx('options')}>
            <FontAwesomeIcon className={cx('icon')} icon={faUserGroup} /> 
            <span>Đang Follow</span>
        </div>
        <div className={cx('options')}>
            <FontAwesomeIcon className={cx('icon')} icon={faCompass} /> 
            <span>Khám phá</span>
        </div>
        <div className={cx('options')}>
            <FontAwesomeIcon className={cx('icon')} icon={faVideo} /> 
            <span>LIVE</span>
        </div>
        <hr />
        <AccountItem data={USERS} title="Tài khoản được đề xuất" />
        <hr />
        <AccountItem data={USERS} title="Các tài khoản đang follow" />
    </div> );
}

export default Sidebar;