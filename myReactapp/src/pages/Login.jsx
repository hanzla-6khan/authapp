
import { Form, Button } from 'react-bootstrap';
import '../styles/login.css';
import googlelogo from '../assets/images/google.png';

import facebooklogo from '../assets/images/fb.png';
import applelogo from '../assets/images/apple.png';


import { useNavigate } from "react-router-dom"
import { useGoogleLogin } from "@react-oauth/google"
import { useState } from "react";
import axios from "axios"
const Login = () => {
    const [formData, setFormdata] = useState({ email: "", password: "" })
    const [error, setError] = useState('');


    const url = import.meta.env.VITE_REACT_APP_API_URL;

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value }); // Ensure this is correctly updating the state
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("All fields are required");
            return;
        }
        try {
            const response = await axios.post(`${url}/login`, formData);
            if (response.data.success) {
                const token = response.data.token;
                localStorage.setItem("token", token);
                navigate("/dashbord");
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error(error);
        }
    };


    const getUserDetails = async (accessToken) => {
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
        );
        const data = await response.json();
        // console.log(data);
        return data;
    };

    const handleLogin = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            console.log(credentialResponse.access_token);
            const data = await getUserDetails(credentialResponse.access_token);
            // console.log(data);
            const userObject = {
                googleId: data.id,
                email: data.email,
                name: data.name,
                profile: data?.picture,
            };
            console.log(userObject);
            if (data) {
                const response = await axios.post(
                    `${url}/api/loginwithgoogle`,
                    userObject
                );
                if (response.data.success) {
                    const token = response.data.token;
                    console.log(token);
                    localStorage.setItem("token", token)
                    localStorage.setItem("userName", userObject.name)
                    localStorage.setItem("userProfile", userObject.profile);
                    // login(token);
                    // toast.success(response.data.message);
                    navigate("/dashboard");
                } else {
                    // console.log(error);
                    // toast.error(response.data.message);
                }
            }
        },
        onError: () => {
            console.log("Login Failed");
        },
    });
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '24rem', borderRadius: '20px', backgroundColor: '#1a1f36', color: 'white' }}>
                <div className="text-center mb-3 mt-5">
                    <h4>Log in to Chatbox</h4>
                    <p>Welcome back! Sign in using your social account or email to continue.</p>
                </div>

                {/* Social Login Buttons */}
                <div className="d-flex justify-content-center gap-3 mb-3">
                    <div >
                        <img
                            src={facebooklogo}
                            alt="Google"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div onClick={handleLogin}>
                        <img
                            src={googlelogo}
                            alt="Google"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div >
                        <img
                            src={applelogo}
                            alt="Google"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>


                </div>

                <div className="d-flex justify-content-center align-items-center mb-3">
                    <hr className="flex-grow-1" />
                    <span className="px-2">OR</span>
                    <hr className="flex-grow-1" />
                </div>

                {/* Email/Password Form */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="bg-dark text-white" name='email' value={formData.email} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="bg-dark text-white" name='password' value={formData.password} onChange={handleChange} />
                    </Form.Group>
                    {error && <div className="text-danger mb-3">{error}</div>} {/* Display error message */}


                    <Button variant="success" type="submit" className="w-100">
                        Log in
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default Login;
