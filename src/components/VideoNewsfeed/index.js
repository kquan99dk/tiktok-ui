import classNames from 'classnames/bind';
import styles from './VideoNewsfeed.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function VideoNewsfeed(props) {
  return (
    <div className={cx('wrapper')}>
      {props.data.map((items, index) => (
        <div className={cx('video-block')} key={index}>
          <img
            className={cx('avatar')}
            src="https://lh3.googleusercontent.com/-uIL21AqKE_A/Y63Cwo0bZsI/AAAAAAAAAPU/gGuZ1lS0jJobLMWu_jTbDCSM1R_-b3QGgCNcBGAsYHQ/s0/girl1.png"
            alt="anh?"
          />
          <div className={cx('video-data')}>
            <div className={cx('video-data-info')}>
              <div className={cx('user')}>
                <a className={cx('user-name')} href="#">
                  Thuyngoc0910
                </a>
                <span className={cx('name')}>Ngọc Hoàng</span>
              </div>
              <div className={cx('conent-text')}>Mãi mãi tủi 16 :)))</div>
              <div className={cx('link-music-video')}>
                <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                <span>nhạc nền - KVM Review Phim</span>
              </div>
              <div className={cx('button-follow')}>
                <Button outline size="s">
                  Follow
                </Button>
              </div>
            </div>
            <div className={cx('video')}>
              <img
                src="https://lh3.googleusercontent.com/-uIL21AqKE_A/Y63Cwo0bZsI/AAAAAAAAAPU/gGuZ1lS0jJobLMWu_jTbDCSM1R_-b3QGgCNcBGAsYHQ/s0/girl1.png"
                alt=""
              />
              <div className={cx('list-action')}>
                <div className={cx('action')}>
                  <div className={cx('icon-action')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                  </div>
                  <p className={cx('total-action')}>10.9k</p>
                </div>
                <div className={cx('action')}>
                  <div className={cx('icon-action')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faCommentDots} />
                  </div>
                  <p className={cx('total-action')}>92</p>
                </div>
                <div className={cx('action')}>
                  <div className={cx('icon-action')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faShare} />
                  </div>
                  <p className={cx('total-action')}>26</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoNewsfeed;
