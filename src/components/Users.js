import React from "react";
import User from "./User";


class Users extends React.Component{
    render() {
        if (this.props.users.length > 0){
            const reversedUsers = [...this.props.users].reverse();
            return (
                <div>
                    {reversedUsers.map((el) => (
                        <User key={el.id} user={el} onEdit={this.props.onEdit} onDelete={this.props.onDelete} />
                    ))}
                </div>
            )}
        else
            return (
                <div className="user">
                    <h3>Пользователей нет</h3>
                </div>)
    }
}

export default Users