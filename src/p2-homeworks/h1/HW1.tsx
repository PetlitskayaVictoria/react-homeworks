import React from "react";
import Message from "./Message";

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png",
    name: "Victoria",
    message: "Hey you, can you help me please?",
    time: "18:30",
};


function HW1() {
    return (
        <div>
            <hr/>
            {/*homeworks 1*/}

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            <hr/>
        </div>
    );
}

export default HW1;
