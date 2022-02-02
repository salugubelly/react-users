import { SELECTED_LIST_INFO, FETCH_USERS_LIST } from "../constants";
interface IUserInfo {
    age: number;
    gender: string;
    planet: string;
    species: string;
    status: string;
}

export interface IUser {
    company: string;
    id: number;
    name: string;
    position: string;
    profile: IUserInfo;
    isChecked?: boolean;
}

export interface ISelectedUserIdList {
    [key: number]: boolean;
}

export interface IUsersList {
    users: IUser[];
    selectedUserIdList: ISelectedUserIdList;
}

const initialState: IUsersList = {
    users: [],
    selectedUserIdList: {},
};

const createSelectedList = (usersList: IUser[]) => {
    let defaultSelected: ISelectedUserIdList = {};
    usersList.forEach((user: IUser) => {
        defaultSelected[user.id] = false;
    });

    return defaultSelected;
};

const UsersReducer = (state = initialState, action: any) =>
{
    switch (action.type)
    {
        case FETCH_USERS_LIST:
            return {
                ...state,
                users: action.payload.users,
                selectedUserIdList: createSelectedList(action.payload.users),
            };
        case SELECTED_LIST_INFO:
            return {
                ...state,
                selectedUserIdList:  {...action.payload.selectedUserIdList}
            };
        default:
            return { ...state }

    }
};

export default UsersReducer;