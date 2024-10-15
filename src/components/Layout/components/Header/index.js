import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleNotch,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faKeyboard,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut

} from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react/";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    Children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "Vie",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "US",
          title: "United States",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {

  const currentUser = true;

  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 2000);
  }, []);

  const handleChangMenu = (item) => {
    switch (item.type) {
      case "language":
        console.log("Change language", item.code, item.title);
        break;
      default:
        console.log("Change menu", item);
        break;
    }
  };
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];


  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
          interactive={true}
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faCircleNotch} />
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        {/* ktra co use thi hien cai ni khong thi cai kia */}
        <div className={cx("actions")}>

          {currentUser ? (
            <>
              <Tippy delay={[0, 700]} 
              content="Upload Video"
               placement="bottom">
                <button>
                  <FontAwesomeIcon className={cx('action-btn')} icon={faCloudUpload} />
                </button>
              </Tippy>
              {/* <Tippy content="Message" placement="bottom">
                <button>
                <FontAwesomeIcon className={cx('action-btn')} icon={faMessage} />
                </button>
             </Tippy> */}

            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>

            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChangMenu}>

            {currentUser ? (
              <img
                className={cx('user-avatar')}
                alt="Pham Nhu Quoc Trieu"
                src="https://via.placeholder.com/150"
              />

            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
