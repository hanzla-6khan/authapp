import '../styles/signup.css'
import googlelogo from '../assets/images/google.png';
import { Container } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate()
    const { users, handleRemoveUser, handleDeleteChatRoom } = useContext(UserContext);
    const handleNewUserAdd = () => {
        navigate("/")
    }
    return (

        <Container className="mt-5  p-3 chatroom-container" >
            <div className="chatroom-title mt-5">Chatroom</div>
            <div className="d-flex justify-content-between mt-4">
                <button className='btn btn-danger' onClick={handleNewUserAdd}>new user </button>
                <button className='btn-custom-delete' onClick={handleDeleteChatRoom}>delete chatroom</button>

            </div>
            <div className="team-title mt-2 mt-3">Team</div>
            <div style={{ maxHeight: "350px", overflowY: "auto", scrollbarWidth: "none", position: "relative" }}>
                {/* For WebKit Browsers */}
                <style>
                    {`
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none; /* Safari and Chrome */
                    }
                `}
                </style>

                {users.map((user, index) => (
                    <div className="w-100" key={index}>
                        <div className="d-flex w-100 justify-content-between align-items-center">
                            <img src={user.avatar} width={70} height={70} alt={`${user.name}'s avatar`} />
                            <div className="">{user.name}</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div className="col-auto mb-2">
                                <button className="btn btn-success w-100">Full Access</button>
                            </div>
                            <div className="col-auto mb-2">
                                <button className="btn btn-danger w-100">Regular Access</button>
                            </div>
                            <div className="col-auto mb-2" onClick={() => handleRemoveUser(index)}>
                                <button className="btn w-100" style={{ border: "1px solid #F18303", color: "#F18303" }}>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container >
    );
};

export default Signup;
