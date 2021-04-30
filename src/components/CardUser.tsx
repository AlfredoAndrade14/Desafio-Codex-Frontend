import styles from '../styles/components/CardUser.module.css'

export function CardUser(){
    return(
        <div className={styles.card}> 
            <form action="" method="post">
                <h1>Welcome Back</h1>
                <p>Enter your credentials to acess your account</p>
                <input type="email" name="email" id="email" placeholder="Enter your email"/>
                <input type="password" name="" id="" placeholder="Enter your password"/>
                <button type="submit">Sign In</button>
                <p>Not registered yet ? <a href="">Create an Account</a></p>
            </form>
        </div>
    )
}