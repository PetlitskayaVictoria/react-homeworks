import React from "react";
import cl from "./Message.module.css";
import {MessageDataType} from "./HW1";


function Message(props: MessageDataType) {

    return (
        <div className={cl.messageContainer}>
            <div className={cl.contain}>
                <img src={props.avatar}/>
                <div className={cl.textContainer}>
                    <div className={cl.userName}>
                        {props.name}
                    </div>
                    <div className={cl.userMessage}>
                        {props.message}
                    </div>
                    <span className={cl.messageTime}>
                    {props.time}
                </span>
                </div>
            </div>

        </div>
    );
}

export default Message;
