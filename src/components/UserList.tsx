import React, { Component } from 'react';
import { Users } from '../users/users';
import { context } from '../common';
import MyInput, { MyCheckBox } from './my-input';


class UserList extends Component {
    count = 0;
    users: Users[] = [];

    async loadUsers() {
        this.users = await context.for(Users).find({
            orderBy: u => u.name
        });
        this.setState({});

    }
    componentDidMount() {
        this.loadUsers();

    }
    async deleteUser(user: Users) {
        await user.delete();
        this.loadUsers();
    }
    async saveUser(user: Users) {
        await user.save();
        this.setState({});
    }


    render() {
        const renderSaveButton = (user: Users) => {
            if (user.wasChanged())
                return <button onClick={() => this.saveUser(user)}>Save Changes</button>
        }
        return (
            <div>
                <h2> User List {this.users.length}</h2 >
                {
                    this.users.map(user => (<div key={user.id.value}>
                        <MyInput column={user.name} change={() => this.setState({})}/>
                        <MyCheckBox column={user.isAdmin} change={() => this.setState({})}/> admin | 
                        created on: {user.createdDate.displayValue}
                        {renderSaveButton(user)}
                        <button onClick={() => this.deleteUser(user)} > Delete</button>
                    </div>))
                }
            </div>)
    }
}
export default UserList; 