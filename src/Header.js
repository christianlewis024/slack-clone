import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* avatar for logged in user */}
                <Avatar
                className="header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}
                
                />
                
                {/*  time icon */}
                <div className="header__search">
                    {/* search icon */}
                    {/* input */}
                </div>
                <div className="header__right">
                    {/* help icon */}
                </div>
            </div>
        </div>
    )
}

export default Header
