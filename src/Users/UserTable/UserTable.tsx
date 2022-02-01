import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IUsersList, IUser } from "../../redux/reducers/usersReducer";

import styles from "./UserTable.module.css";

const UserTable = () =>
{
    const dispatch                          = useDispatch();
    const usersList                         = useSelector((state: IUsersList) => state.users);
    const selectedUserIdList: any          = useSelector((state: IUsersList) => state.selectedUserIdList);
    const [ checkedState, setCheckedState ] = useState(selectedUserIdList);

    const headers        = [ 'select', 'Name', 'Company' ];
    const handleOnChange = (currentUserId: number) =>
    {
        const updatedCheckedState = { ...checkedState, [ currentUserId ]: !checkedState[ currentUserId ] };
        setCheckedState(updatedCheckedState);

    };
    const fetchUsersInfo = () =>
    {
        dispatch({ type: "SELECTED_LIST_INFO", selectedUserIdList: checkedState })
    };

    return (
        <div className={styles.root}>
            <table>
                <thead>
                    <tr>
                        {headers.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                {usersList.map((user: IUser) =>
                {
                    return (
                        <tr key={user.id}>
                            <td><input
                                type="checkbox"
                                checked={checkedState[ user.id ] || false}
                                onChange={() => handleOnChange(user.id)}
                            /></td>
                            <td>{user.name}</td>
                            <td>{user.company}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button onClick={fetchUsersInfo}> Get Users Info</button>
        </div>
    );
};

export default UserTable;