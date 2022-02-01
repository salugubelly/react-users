import { useSelector } from "react-redux";
import { IUsersList, IUser } from "../../redux/reducers/usersReducer";
import styles from './UserInfo.module.css';

const UserInfo = () =>
{
    const usersList       = useSelector((state: IUsersList) => state.users);
    const selectedUserIdList: any = useSelector((state: IUsersList) => state.selectedUserIdList);
    const filteredUsers = usersList.filter((user: IUser) => selectedUserIdList[user.id]);

    return (
        <div className={styles.root}>
            <h1 className={styles.header}> Selected Users Info</h1>
                {
                    filteredUsers.map((selectedUser: IUser, index: number) =>
                    {
                        return (
                            <div key={`container-${index}`}>
                            <hr/>
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
                }
        </div>
    )

};
export default UserInfo;