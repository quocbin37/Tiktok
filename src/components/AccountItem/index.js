import classNames from "classnames/bind";
import style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
function AccountItem({data}) {
    return (  
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
           <Image className={cx('avatar')} 
           src={data.avatar}
           alt={data.full_name}
           />
           <div className={cx('info')}>
               <h4 className={cx('name')}>
                   <span>{data.full_name}</span>
                  {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
               </h4>
               <p className={cx('username')}>{data.nickname}</p>
            </div>   
        </Link>
    );
}

export default AccountItem;