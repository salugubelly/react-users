import { useDispatch, useSelector } from "react-redux";

import { IUsersList, IUser, ISelectedUserIdList } from "../../redux/reducers/usersReducer";
import { SELECTED_LIST_INFO } from "../../redux/constants";

import styles from "./UserTable.module.css";

const UserTable = () =>
{
    const dispatch = useDispatch();
    const usersList: IUser[] = useSelector((state: IUsersList) => state.users);
    const selectedUserIds: ISelectedUserIdList  = useSelector((state: IUsersList) => state.selectedUserIdList);

    const tableHeaders = [ 'Select', 'Name', 'Company' ];
    const handleOnChange = (currentUserId: number) =>
    {
        const updatedCheckedState = { ...selectedUserIds, [ currentUserId ]: !selectedUserIds[ currentUserId ] };
        dispatch({
            type: SELECTED_LIST_INFO,
            payload: {selectedUserIdList: updatedCheckedState},
        });
    };

    return (
        <div className={styles.root}>
            <table>
                <thead>
                <tr>
                    {tableHeaders.map(header => <th key={header}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                {usersList.map((user: IUser) =>
                {
                    return (
                        <tr key={user.id}>
                            <td><input
                                type="checkbox"
                                checked={selectedUserIds[user.id]}
                                onChange={() => handleOnChange(user.id)}
                            /></td>
                            <td>{user.name}</td>
                            <td>{user.company}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;