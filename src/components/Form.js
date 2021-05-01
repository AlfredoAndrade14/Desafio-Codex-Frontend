
import styles from '../styles/components/Form.module.css';
import React, { useState, useRef, useCallback } from 'react';

export default function Form(){
    const [title, setTitle] = useState("Welcome Back")
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);
    const handleSubmit = useCallback(evt => {
        evt.preventDefault()
    })

    return(
        <div className={styles.card}> 
            <form action="" method="get" onSubmit={handleSubmit}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>Enter your credentials to acess your account</p>

                <div className={styles.inputfield}>
                    <input type="email" name="email" id="email" placeholder="Enter your email" autoComplete="off"
                    ref={inputEmail} />
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.inputfield}>
                    <input type="password" name="" id="" placeholder="Enter your password" ref={inputPassword} />
                    <div className={styles.underline}></div>
                </div>

                <input type="submit" value="Sing In"/>

                <p>
                    Not registered yet ? 
                    <a href="" onClick ={ () => {
                        setTitle("Create Account")
                    }}
                >Create an Account</a>
                </p>
            </form>
        </div>
    )
}