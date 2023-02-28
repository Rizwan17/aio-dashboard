import Link from "next/link";
import FullButton from "../../ui-components/FullButton";
import Input from "../../ui-components/Input";
import styles from "./signup.module.css";

const Signup = () => {
    return (
        <div className={styles.container}>
            <section className={styles['signup-container']}>
                <div className={styles['brand-container']}>
                    <h2>AIO</h2>
                    <h4>Dashboard</h4>
                    <Link href={`/`}>
                        home
                    </Link>
                </div>

                {/* login form */}
                <div className={styles['form-container']}>
                    <div style={{ textAlign: 'center', margin: '15px 0' }}>
                        <h1>Signup</h1>
                        <p>Please enter email and password to login</p>
                    </div>
                    <div>
                        <Input
                            inputContainerStyle={{ padding: '10px 30px' }} 
                            type="text"
                            placeholder="Name"
                            onChange={e => console.log(e)}
                            name="name"
                            label={'Name'}
                        />

                        <Input
                            inputContainerStyle={{ padding: '10px 30px' }} 
                            type="text"
                            placeholder="Email"
                            onChange={e => console.log(e)}
                            name="email"
                            label={'Email'}
                        />
                        <Input 
                            inputContainerStyle={{ padding: '10px 30px' }}
                            type="password"
                            placeholder="Password"
                            onChange={e => console.log(e)}
                            name="email"
                            label={'Email'}
                        />
                        <FullButton label={'Register'} />

                        <p style={{ textAlign: 'center' }}>
                            Dont have an account? <Link href={`/signup`}>Signup for free</Link>
                        </p>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default Signup;