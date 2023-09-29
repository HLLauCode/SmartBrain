import React from "react";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInUsername: '',
            signInPassword: ''
        }
    }

    onUsernameChange = (e) => {
        this.setState({signInUsername: e.target.value})
    }

    onPasswordChange = (e) => {
        this.setState({signInPassword: e.target.value})
    }

    onSubmit = () => {
        fetch('http://localhost:3001/signin/', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.signInUsername,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })

    }

    render() {
        return (
            <div className="center">
                <div className="w-full max-w-xs">
                
                <form className="shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-3xl font-bold mb-1" >Sign in</h1>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Username"
                        onChange={this.onUsernameChange}
                    />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" 
                        placeholder="******************" 
                        onChange={this.onPasswordChange}
                    />
                    </div>
                    <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={this.onSubmit}
                    >
                        Sign In
                    </button>
                    <button 
                        className="bg-white hover:text-blue-700 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                        onClick={() => this.props.onRouteChange('register')}
                    >
                        Register
                    </button>
                    </div>
                </form>
                </div>
            </div>
    
        )
    }
}

export default SignIn;