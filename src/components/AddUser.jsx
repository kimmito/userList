import React from "react";

class AddUser extends React.Component{
    userAdd = {}
    constructor(props){
        super(props)
        this.state = props.user || {
            first_name: "",
            last_name: "",
            email: "",
            avatar: "https://sneg.top/uploads/posts/2023-04/1680702072_sneg-top-p-kartinki-dlya-feisita-instagram-36.jpg",
            isHappy: false
        }
    }
    render(){
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(event) => this.setState({first_name: event.target.value})}/>
                <input placeholder="Фамилия" onChange={(event) => this.setState({last_name: event.target.value})}/>
                <textarea placeholder="Почта" onChange={(event) => this.setState({email: event.target.value})}/>
                <input placeholder="Ссылка на фото" onChange={(event) => this.setState({avatar: event.target.value})}/>
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy"onChange={(event) => this.setState({isHappy: event.target.checked})}/>
                <button type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                        isHappy: this.state.isHappy,
                    }
                    if(this.props.user){
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.onAdd(this.userAdd)}}>Добавить</button>
            </form>
        )
    }
}

export default AddUser