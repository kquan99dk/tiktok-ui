import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <>
      <div className={cx('header-page')}>
        <Header />
      </div>
      <div className={cx('main-page')}>
        <div className={cx('container')}>
          <div className={cx('sidebar')}>
            <Sidebar />
          </div>
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default DefaultLayout;
