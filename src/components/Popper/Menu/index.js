import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import React, { useState } from 'react';

import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [] ,onChange = defaultFn}) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];


    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.Children;
            //convert qua boolen
            return (<MenuItem 
                key={index}
                data={item}
                onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.Children]);
                    }
                    else {
                        onChange(item);
                    }
                }}
            />)
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                       {history.length > 1 && < Header title="Language" onBack={() => {
                           setHistory(prev => prev.slice(0, prev.length-1));
                       }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}
export default Menu;