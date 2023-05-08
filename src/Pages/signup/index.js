import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./signup.module.css";

const Signup = () => {
  return (
      <div className={styles.container}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo />
            <div className={styles['logo-explain']}>AIO Dashboard</div>
          </div>

          {/* login form */}
          <div className={styles["form-container"]}>
            <div className="t-center" style={{ margin: "15px 0" }}>
              <div className={styles["sm-brand-container"]}>
                <Logo />
              </div>
              <h1>Signup</h1>
              <p>Create a new Account</p>
            </div>
            <div>
            <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="text"
                placeholder="Name"
                onChange={(e) => console.log(e)}
                name="name"
                label={"Name"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="text"
                placeholder="Email"
                onChange={(e) => console.log(e)}
                name="email"
                label={"Email"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="password"
                placeholder="Password"
                onChange={(e) => console.log(e)}
                name="email"
                label={"Email"}
              />
              <FullButton label={"Login"} />

              <p className="tc-grey t-center">
                If you already have an account.{" "}
                <Link className="link" href={`/login`}>Login</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Signup;
