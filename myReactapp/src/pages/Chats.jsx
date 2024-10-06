
import "../styles/chats.css"
import googlelogo from '../assets/images/google.png';
import cameraIcon from '../assets/images/Subtract.png';
import messageIcon from '../assets/images/Group.png';
const messages = [
    { sender: 'Martina Wolna', time: '1 FEB 12:00', text: 'I commented on Figma. I want to add some fancy icons. Do you have any icon set?' },
    { sender: 'Maciej Kowalski', time: '', text: 'I am in a process of designing some. When do you need them?' },
    { sender: 'Martina Wolna', time: '', text: 'Next month?' },
    { sender: 'Maciej Kowalski', time: '08:12', text: 'I am almost finish. Please give me your email, I will ZIP them and send you as soon as I\'m finish.' },
    { sender: 'Martina Wolna', time: '08:43', text: 'maciej.kowalski@email.com' },
];

const Chats = () => {
    return (
        <div className="container mt-5 p-3 chat-container">
            <div className=" mt-4 d-flex justify-content-between align-items-center">
                <img src={googlelogo} alt="User Avatar" className="rounded-circle mb-3" width={50} height={50} />
                <div className="text-right">
                    <h5 className="text-white">Martina Wolna</h5>
                    <h6 className="text-white">Maciej Kowalski</h6>
                </div>
            </div>

            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'Martina Wolna' ? 'from' : 'to'}`}>
                        <div className="text-muted small">{msg.time}</div>
                        <div className={`message-text ${msg.sender === 'Martina Wolna' ? 'from' : 'to'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-3 d-flex justify-content-between">
                <div className="flex-grow-4 w-100" style={{
                    backgroundColor: "#00000040"
                }}>
                    <input type="text" className="p-2 bg-transparent border-0 outline-none" style={{ width: "85%" }} />
                    <img src={messageIcon} alt="mesg" />
                </div>
                <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                    <img src={cameraIcon} />
                </div>
            </div>
        </div>
    );
};

export default Chats;
