import {  
    faCircleXmark,  
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import React, { useEffect, useState,useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState([]);
    const inputRef = useRef();
    const [searchResult, setSearchResult] = useState([]);
    const [showResult ,setShowResult] = useState(true);
    
    const handleHideResule = () => {
        setShowResult(false);
    }
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    return ( 
        <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                </PopperWrapper>
            </div>
        )}
        onClickOutside={handleHideResule}
    >
        <div className={cx('search')}>
          <input 
            ref={inputRef}
            value={searchValue}
            placeholder="Search accounts and videos" 
            spellCheck={false}  
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && (
            <button className={cx('clear')}
                onClick = {handleClear}
                >
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>   
          )}
            
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

            <button className={cx('search-btn')}>
                <SearchIcon />
            </button>
        </div>
    </HeadlessTippy>
     );
}

export default Search;