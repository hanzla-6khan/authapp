import { Form, Button } from 'react-bootstrap';

import '../styles/login.css';
export const Auth = () => {
  return (
      <div>
          
          <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="card p-4 shadow" style={{ width: '24rem', borderRadius: '20px', backgroundColor: '#1a1f36', color: 'white' }}>
                  <div className="text-center mb-3 mt-5">
                      <h4>Sign Up with Email </h4>
                      <p>Getting start with  friends and family today by signing up of our chat app !</p>
                  </div>

               

                
                  <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Your Name</Form.Label>
                          <Form.Control type="text"  className="bg-dark text-white" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Your email</Form.Label>
                          <Form.Control type="email" className="bg-dark text-white" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" className="bg-dark text-white" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" className="bg-dark text-white" />
                      </Form.Group>

                      <Button variant="success" type="submit" className="w-100 create">
                          Create  an account 
                      </Button>

                  </Form>
              </div>
          </div>
          

          

    </div>
  )
}
