import { useDispatch, useSelector } from "react-redux";

import UserTable from "../UserTable/UserTable";
import { IUsersList } from "../../redux/reducers/usersReducer";

import styles from './UserList.module.css';

const Userlist = () =>
{
    const dispatch = useDispatch();
    const usersList = useSelector((state : IUsersList) => state.users);

    const fetchUsersList = async () =>
    {
        const response = await fetch('https://immense-bastion-95145.herokuapp.com/api/users');
        const data = await response.json();
        dispatch({type: "FETCH_USERS_LIST", users: data.users})

    };

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <h1 className={styles.title}> User List </h1>
                <button className={styles.fetchBtn} onClick={fetchUsersList}> Fetch Users</button>
            </header>
            {usersList.length > 0 && <UserTable/>}
        </div>
    );
};

export default Userlist;