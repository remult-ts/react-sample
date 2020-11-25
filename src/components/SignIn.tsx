import { StringColumn } from "@remult/core";
import { Component } from "react";
import { authorization } from "../common";
import { Users } from "../users/users";
import MyInput from "./my-input";

class SignIn extends Component {
    name = new StringColumn();
    async signIn() {
        const jwt = await Users.signIn(this.name.value);
        authorization.afterSignIn(jwt, true);
         //@ts-ignore
         this.props.history.push("/users");
    }
    render() {
        return (<div>
            <h2>Sign In</h2>
            <MyInput column={this.name} />
            <button onClick={() => this.signIn()}>Sign In</button>
        </div >)
    }
}
export default SignIn;