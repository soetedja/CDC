
import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Card, CardSection, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm'; // Step 3

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyABEunkx7qzFRnkGgAVCWBNyN9Mij_opkk',
            authDomain: 'auth-ea908.firebaseapp.com',
            databaseURL: 'https://auth-ea908.firebaseio.com',
            storageBucket: 'auth-ea908.appspot.com',
            messagingSenderId: '713490709098'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (<Card>
                            <CardSection>
                                <Button onPress={() => firebase.auth().signOut()} >Log out</Button>
                            </CardSection>
                        </Card>);
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;

        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
