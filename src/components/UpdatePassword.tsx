import React, { Component } from 'react';
import { Users } from '../users/users';
import { context } from '../common';
import MyInput, { MyCheckBox } from './my-input';
import { UpdatePasswordController } from '../users/UpdatePasswordController';


class UserList extends Component {
    controller = new UpdatePasswordController(context);
    async updatePassword() {
        await this.controller.SavePassword();
        alert("Password saved");
      }
    render() {
        return (<div>
            <h2>Update Password</h2>
            <MyInput
                column={this.controller.password}
                placeholder="password"
                type="password"
            />
            <MyInput
                column={this.controller.confirmPassword}
                placeholder="confirm password"
                type="password"
            />
            <button onClick={()=>this.updatePassword() }>Update Password</button>
        </div >)
    }
}
export default UserList; 