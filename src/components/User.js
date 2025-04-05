import React from "react";
import AddUser from "./AddUser";
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editForm: false,
        }
    }

    render(){
        const { user } = this.props;

        if (!user) return null;
        return(
            <div className="user">
                <IoCloseCircleSharp className="icon delete-icon" onClick={() => this.props.onDelete(this.props.user.id)}/>
                <IoHammerSharp className="icon edit-icon" onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm,
                    })
                }} />
                <h3>{user.first_name} {user.last_name}</h3>
                <img src={user.avatar} className="avatar" alt="Avatar"/>
                <p>{user.email}</p>
                <b>{user.isHappy ? 'Счастлив :)' : 'Приуныл :('}</b>
                {this.state.editForm && <AddUser user={user} onAdd={this.props.onEdit}/>}
            </div>
        )
    
    }     
}
export default User