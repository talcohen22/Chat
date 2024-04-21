import { useChannel } from "ably/react";
import { useEffect, useState } from "react"
import { Message } from "./Message";

export function Chat() {

    const [name, setName] = useState('')
    const [currMessage, setCurrMessage] = useState('')
    const [messages, updateMessages] = useState([]);

    const { channel } = useChannel('chat-channel', (message) => {
        updateMessages((prev) => [...prev, message]);
    });

    useEffect(() => {
        const inputName = prompt('Insert your name')
        setName(inputName)
    }, [])

    function onHandleChange({ target }) {
        setCurrMessage(target.value)
    }

    async function onSendMessage(e) {
        if (e.key === 'Enter') {
            await channel.publish(name, currMessage);
            setCurrMessage('');
        }
    }

    return (
        <section className='chat-container'>

            <h1 className='title'>Welcome to live chat!</h1>

            {messages.map(message => (
                <li key={message.id}>
                    <Message message={message.data} name={message.name} time={message.timestamp} />
                </li>
            ))}

            <input className='chat-input' type="text"
                value={currMessage}
                onChange={onHandleChange}
                onKeyDown={onSendMessage}
                placeholder="Write your message..." />
        </section>
    )
}