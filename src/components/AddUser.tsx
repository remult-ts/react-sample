import React, { Component } from 'react';

import { context } from '../common';
import { Users } from '../users/users';
import MyInput from './my-input';




class AddUser extends Component {

    newUser = context.for(Users).create();
    async addTheUser() {
        await this.newUser.save();
        //@ts-ignore
        this.props.history.push("/users");
    }
    render() {

        return (<div>
            <h2>Add User</h2>
            <MyInput column={this.newUser.name} />
            <button onClick={() => this.addTheUser()}>add User</button>
        </div >)
    }
}

export default AddUser; 