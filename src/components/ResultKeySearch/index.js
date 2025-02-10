import classNames from 'classnames/bind';
import styles from './ResultKeySearch.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function ResultKeySearch(props) {
  return (
    <div className={cx('wrapper')}>
        {
            props.data.map((key, index) => (
                <div key={index} className={cx('list-key')}>
                    <FontAwesomeIcon className={cx('list-key-icon')} icon={faMagnifyingGlass}/>
                    <span className={cx('list-key-key')}>{key}</span>
                </div>
            ))
        }
    </div>
  )
}

export default ResultKeySearch;
