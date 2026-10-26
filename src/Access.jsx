import React, { useState } from 'react'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

const Access = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault()
        if (!email || !password) {
            alert("please enter email and  password")
            return
        }
        console.log(email);
        console.log(password);


        navigate("/Todo")
    }

    return (
        <div className='mt-5'>

            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button className='mt-3' onClick={submitHandler}>Submit</Button>
                </Form>

            </Container>

        </div>
    )
}

export default Access