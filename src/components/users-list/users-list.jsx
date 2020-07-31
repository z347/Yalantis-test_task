import React, { Component } from 'react';

import MonthList from './month-list/month-list.jsx';
import ErrorIndicator from '../basic/error-indicator/error-indicator.jsx';
import Spinner from '../basic/spiner/spinner.jsx';
import UsersService from '../../services/users-service.js';
import sortUsers from '../../utils/sort-users.js';

class UsersList extends Component {
    state = {
        users: [],
        loading: true,
        error: null
    };

    usersService = new UsersService();

    componentDidMount() {
        this.usersLoaded();
    }

    usersLoaded = () => {
        this.usersService
            .getUsers()
            .then(this.onUsersLoaded)
            .catch(this.onError);
    };

    onUsersLoaded = (users) => {
        const sortedUsers = sortUsers(users);

        this.setState({
            users,
            loading: false,
            error: false,
            december: sortedUsers.december,
            november: sortedUsers.november,
            october: sortedUsers.october,
            september: sortedUsers.september,
            august: sortedUsers.august,
            july: sortedUsers.july,
            june: sortedUsers.june,
            may: sortedUsers.may,
            april: sortedUsers.april,
            march: sortedUsers.march,
            february: sortedUsers.february,
            january: sortedUsers.january
        });
    };

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        });
    };

    render() {
        const { loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <MonthList state={this.state} /> : null;

        return (
            <div className="container-lg">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

export default UsersList;
