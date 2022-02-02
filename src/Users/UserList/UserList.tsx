import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USERS_LIST } from "../../redux/constants";
import UserTable from "../UserTable/UserTable";
import { IUsersList } from "../../redux/reducers/usersReducer";

import styles from './UserList.module.css';

const Userlist = () =>
{
    const dispatch = useDispatch();
    const usersList = useSelector((state : IUsersList) => state.users);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getUsersList = async () => {
                setIsLoading(true);
                const response = await fetch('https://immense-bastion-95145.herokuapp.com/api/users');
                const data = await response.json();
                if(data.errors){
                    setIsLoading(false);
                    setError(data.errors.detail);
                    return;
                }
                dispatch({
                    type: FETCH_USERS_LIST,
                    payload: {users: data.users},
                });
                setIsLoading(false);
        };
        getUsersList();
    }, []);

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <h1 className={styles.title}>Users List</h1>
            </header>
            {isLoading && <div className={`${styles.message} ${styles.loading}`}> Loading ...</div>}
            {!isLoading && error && <div className={`${styles.message} ${styles.error}`}>Unable to fetch users !!!</div>}
            {!isLoading && !error && usersList.length === 0 && <div className={`${styles.message} ${styles.emptyUsers}`}> Empty users list </div>}
            {!isLoading && !error && usersList.length > 0 && <UserTable/>}
        </div>
    );
};

export default Userlist;