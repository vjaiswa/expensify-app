import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) =>(
    <div>
        <h1>Info</h1>
        <p>This is my info: {props.name}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAuth && <WrappedComponent {...props}/>}
        </div>
    )
}

const AuthComponent = requireAuthentication(Info)

ReactDOM.render(<AuthComponent isAuth = {true} name = "Vijay"/>, document.getElementById('app'))
