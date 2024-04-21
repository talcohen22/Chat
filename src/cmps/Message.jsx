import TimeAgo from 'timeago-react'
// import 'bootstrap/dist/css/bootstrap.css';

export function Message({ message, name, time }) {

    return (
        < section className="message-container flex" >
            <h1>{name + ':'}</h1>
            <p className='user-message'>{message}</p>
            <div className='message-time'>
                <TimeAgo
                    datetime={time}
                    locale='vi'
                />
            </div>
        </section >
    )
}