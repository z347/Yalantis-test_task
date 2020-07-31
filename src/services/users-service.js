export default class UsersService {
    _api = 'https://yalantis-react-school-api.yalantis.com/api/task0/users';

    getUsers = async () => {
        const res = await fetch(this._api);

        if (!res.ok) {
            throw new Error(
                `Could not fetch ${this._api}, received ${res.status}`
            );
        }

        return res.json();
    };
}
