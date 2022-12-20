import styles from "./ListMenu.module.scss";
import classNames from "classnames/bind";
import { ListMenuItem } from "..";
import Button from "../../../Button";
const cx = classNames.bind(styles);
function ListMenu() {
    return ( 
        <ul className={cx('wrapper')}>
            {
                ListMenuItem.map((resoures, index)=>{
                    return(
                        <Button  key={index} to={resoures.to} children={resoures.name} span={resoures.Type} className={cx('listItem')}/>
                    )
                })
            }
        </ul>
    );
}

export default ListMenu