import styles from '../styles/components/Form.module.css'

export function Form(){
    return(
        <div className={styles.container}>
            <form action="" method="post">
                <h1>Welcome Back</h1>
                <p>Enter your credentials to acess your account</p>
            
                <input type="email" name="" id="" />
                <input type="password" name="" id=""/>
                <button type="submit">Sign In</button>
                <p>Not registered yet ? <a href="">Create an Account</a></p>
            </form>
        </div>
    )
}