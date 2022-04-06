import React, { useState } from 'react'
import axios from 'axios';

const AuthenticationService = () => {

  let signInRequest = {
        username: "",
        password: ""
    }

  const AUTH_BASE_URL = 'http://localhost:8080/api/v1/auth/signin'

  const [inputData, setInputData] = useState(signInRequest);


    const handleForm = (event) => {
        const {name, value} = event.target;
        setInputData((prevInput) => ({
            ...prevInput,
            [name]:value
        }))
    }

    const handleSignIn = (event) => {

        event.preventDefault();

        const signInRequest = {
            username: inputData.username,
            password: inputData.password
        }

        axios.post(AUTH_BASE_URL, signInRequest).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return{
        inputData, handleForm, handleSignIn
    }
  
}

export default AuthenticationService;
