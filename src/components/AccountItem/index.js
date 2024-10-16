import classNames from "classnames/bind";
import style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";

const cx = classNames.bind(style);
function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
           <Image className={cx('avatar')} src="https://via.placeholder.com/150" alt="profile" />
           <div className={cx('info')}>
               <h4 className={cx('name')}>
                   <span>Pham Nhu Quoc Trieu</span>
                   <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
               </h4>
               <p className={cx('username')}>phamnhuquoctrieu307</p>
            </div>   
        </div>
    );
}

export default AccountItem;