import React, { Component } from 'react';
import { AuthUserContext, withAuthorization } from '../../components/Session';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.firebase.auth.W)

        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.user(this.props.firebase.auth.W).get().then((res) => {
            if (res._document.proto.fields.isAdmin.booleanValue === true) {
                this.props.firebase.users().get().then((querySnapshot) => {
                    const usersList = querySnapshot.docs.map((doc) => ({
                        ...doc._document.proto.fields,
                        uid: doc._key.path.segments[6],
                    }));
                    this.setState({
                        loading: false,
                        users: usersList,
                    });
                });
            } else {
                this.setState({
                    loading: "error"
                })
            }
        }).catch(() => {
            alert("failure")
        });


    }

    componentWillUnmount() { }


    render() {
        const { users, loading } = this.state;

        if(this.state.loading === "error") {
            return <h2>Access Denied. Contact Administrator to Request Permissions.</h2>
        }

        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <div>
                        <h1>Admin: {authUser.email}</h1>
                        {loading && <div>Loading ...</div>}
                        <h3>Customers</h3>
                        <h3>Users</h3>
                        <UserList users={users} />
                        

                    </div>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <span>
                    <strong>ID:</strong> {user.uid}
                </span>
                <span>
                    <strong>E-Mail:</strong> {user.email.stringValue}
                </span>
                <span>
                    <strong>Username:</strong> {user.username.stringValue}
                </span>
            </li>
        ))}
    </ul>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AdminPage);