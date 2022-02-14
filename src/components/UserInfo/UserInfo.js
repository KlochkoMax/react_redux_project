import React from 'react';
import css from "./userInfo.module.css"

const UserInfo = () => {
    return (
        <div className={css.userInfo}>
            <div className={css.avatar}>U</div>
            <div>UserName</div>
        </div>
    );
};

export default UserInfo;