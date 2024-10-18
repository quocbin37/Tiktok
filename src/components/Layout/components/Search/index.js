import { useEffect, useState, useRef } from 'react';
import {  faCircleNotch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import * as searchServices from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';


const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const deBounceValue = useDebounce(searchValue, 700);
   
    const inputRef = useRef();
    useEffect(() => {
        if (!deBounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        
        const fetchApi = async ( ) => {
            setLoading(true);
            const result = await searchServices.search(deBounceValue);
            setSearchResult(result);
               setLoading(false);
       }
       fetchApi();
        
    }, [deBounceValue]);
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handlChange = (e) => {
        const searchValue = e.target.value; 
        if (!searchValue.startsWith(' ') ) 
        { 
            setSearchValue(e.target.value);
        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
       // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
      <div>
            <HeadlessTippy
                
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handlChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && < FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />}
                    <button className={cx('search-btn')} onClick={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
      </div>
    );
}
export default Search;