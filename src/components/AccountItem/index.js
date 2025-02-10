import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem(props) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{ props.title }</h2>
      <ul>
        {props.data.map((items, index) => (
          <li key={index}>
            <div className={cx('items')}>
              <a className={cx('avatar')} tabIndex="-1" href="/@khoa21up">
                <div>
                  <span>
                    <img src={items.avatar} alt="" />
                  </span>
                </div>
              </a>
              <a className={cx('name')} tabIndex="-1" href="/@khoa21up">
                <div>
                  <span>{items.accountName}</span>
                  {items.vip ? (
                    <div className={cx('tick')}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="24" cy="24" r="24" fill="#20D5EC"></circle>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M37.1213 15.8787C38.2929 17.0503 38.2929 18.9497 37.1213 20.1213L23.6213 33.6213C22.4497 34.7929 20.5503 34.7929 19.3787 33.6213L10.8787 25.1213C9.70711 23.9497 9.70711 22.0503 10.8787 20.8787C12.0503 19.7071 13.9497 19.7071 15.1213 20.8787L21.5 27.2574L32.8787 15.8787C34.0503 14.7071 35.9497 14.7071 37.1213 15.8787Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
                <p>{items.userName}</p>
              </a>
            </div>
          </li>
        ))}
      </ul>
      <button className={cx('bt-seemore')}>
        <p>Xem thêm</p>
      </button>
    </div>
  );
}

export default AccountItem;
