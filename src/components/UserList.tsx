import React, { Component } from 'react';
import { Users } from '../users/users';
import { context } from '../common';
import MyInput from './my-input';


class UserList extends Component {
    count = 0;
    users: Users[] = [];

    async loadUsers() {
        this.users = await context.for(Users).find();
        this.setState({});

    }
    componentDidMount() {
        this.loadUsers();

    }

    render() {
        return (
            <div>
                <h2> User List {this.users.length}</h2 >
                {
                    this.users.map(user => (<div><MyInput key={user.id.value} column={user.name}></MyInput></div>))
                }
            </div>)
    }
}
export default UserList; 