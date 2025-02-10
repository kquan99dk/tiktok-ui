import { useEffect, useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
  faPlus,
  faEllipsisVertical,
  faPaperPlane,
  faMessage,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import ResultKeySearch from '~/components/ResultKeySearch';
import Button from '~/components/Button';

import { USERS, KEYS_SEARCH } from '~/data/listUser';

const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState({});
  const [keySearch, setkeySearch] = useState('');
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const hide = () => setSearchResult([1, 2, 4]);
  useEffect(() => {
    if (keySearch.trim().length) {
      setIsLoadingSearch(true)
      setSearchResult({
        keySearch: KEYS_SEARCH,
        users: USERS,
      });
    } else {
      setIsLoadingSearch(false)
      setSearchResult({});
    }
  }, [keySearch]);
  const inputChange = (e) => {
    setkeySearch(e.target.value);
    console.log('keySearch', keySearch);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          placement="bottom"
          interactive
          visible={Object.keys(searchResult).length}
          onClickOutside={hide}
          render={(attrs) => (
            <div className={cx('search-results')}>
              <PopperWrapper>
                <div className={cx('search-results-key')}>
                  <ResultKeySearch data={KEYS_SEARCH} />
                </div>
                <div className={cx('search-results-content')}>
                  <AccountItem data={USERS} title="Tài khoản" />
                </div>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <>
              <div className={cx('search-input')}>
                <input
                  type="text"
                  placeholder="Tìm kiếm tài khoản và video"
                  spellCheck={false}
                  value={keySearch}
                  onChange={inputChange}
                />
                {isLoadingSearch ? (
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} spinPulse/>
                ) : (
                  <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                )}
              </div>
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <button className={cx('btn-upload')}>
            <FontAwesomeIcon icon={faPlus} />
            Tải lên
          </button>
          <div>
            {true ? (
              <div className={cx('actions-login')}>
                <FontAwesomeIcon className={cx('btn-send')} icon={faPaperPlane} />
                <FontAwesomeIcon className={cx('btn-message')} icon={faMessage} />
                <FontAwesomeIcon className={cx('btn-menu-user')} icon={faUserGear} />
              </div>
            ) : (
              <>
                <button className={cx('btn-login')}>Đăng nhập</button>
                <FontAwesomeIcon className={cx('btn-menu')} icon={faEllipsisVertical} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
