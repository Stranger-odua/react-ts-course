import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import {useHistory} from "react-router-dom";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const history = useHistory()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>(`http://jsonplaceholder.typicode.com/users?_limit=10`) //?_limit=10
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserItem
                    user={user}
                    key={user.id}
                    onClick={(user) => history.push('/users/' + user.id)}
                />}
        />
    );
};

export default UsersPage;
