import styles from '../styles/components/Form.module.css';

export default function Form(){
    return(
        <div className={styles.card}> 
            <form action="" method="get">
                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Enter your credentials to acess your account</p>

                <div className={styles.inputfield}>
                    <input type="email" name="email" id="email" placeholder="Enter your email"/>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.inputfield}>
                    <input type="password" name="" id="" placeholder="Enter your password"/>
                    <div className={styles.underline}></div>
                </div>

                <input type="submit" value="Sing In"/>

                <p>Not registered yet ? <a href="">Create an Account</a></p>
            </form>
        </div>
    )
}