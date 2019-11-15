import React from 'react';
import LoginForm from './LoginForm'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {Button} from 'reactstrap'
firebase.initializeApp({
    apiKey: 'AIzaSyCWN-hlZO8rRK_hz4ep6JSkiqu3utWcd-8',
    authDomain: 'bigdig-f886e.firebaseapp.com'
})


class Login extends React.Component {

    state = {
        isSignIn: false,
    }
    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                isSignIn: !!user,
            })
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.isSignIn ?
                        <div>
                            <h1> You have Signed In !</h1>
                            <Button onClick={() => firebase.auth().signOut()}>Sign out!</Button>
                        </div>
                        :
                        <div>
                            <div>
                                <LoginForm/>
                            </div>
                            <div>
                                <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Login;