import { useSelector } from "react-redux";
import {IUsersList, IUser, ISelectedUserIdList} from "../../redux/reducers/usersReducer";
import styles from './UserInfo.module.css';

const UserInfo = () =>
{
    const usersList: IUser[] = useSelector((state: IUsersList) => state.users);
    const selectedUserIdList: ISelectedUserIdList = useSelector((state: IUsersList) => state.selectedUserIdList);

    const selectedUsers: IUser[] = usersList.filter((user: IUser) => selectedUserIdList[user.id]);

    const displaySelectedUsersList = (selectedUsers: IUser[] ) => {
        return selectedUsers.map((selectedUser: IUser, index: number) =>
        {
            return (
                <div key={`container-${index}`}>
                    <h4>{selectedUser.name} Details: </h4>
                    <ul key={`list-${index}`}>
                        <li key={"age-"+{index}}> Age : {selectedUser.profile.age}</li>
                        <li key={"gender-"+{index}}> Gender : {selectedUser.profile.gender}</li>
                        <li key={"planet-"+{index}}> Planet : {selectedUser.profile.planet}</li>
                        <li key={"species-"+{index}}> Species : {selectedUser.profile.species}</li>
                        <li key={"status-"+{index}}> Status : {selectedUser.profile.status}</li>
                    </ul>
                </div>
            )
        })
    };

    return (
        <div className={styles.root}>
            <header className={styles.header}>
                <h1 className={styles.title}> Selected Users Info</h1>
            </header>
            { selectedUsers.length === 0 && (<div className={styles.emptySelected}>No selected users</div>)}
            { selectedUsers.length > 0 && displaySelectedUsersList(selectedUsers)}
        </div>
    )

};
export default UserInfo;