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

export interface IUsersList {
    users: IUser[];
    selectedUserIdList: {};
}

const initialState: IUsersList = {
    users: [],
    selectedUserIdList: {},
};

const createSelectedList = (usersList: IUser[]) => {
    let defaultSelected: any = {};
    usersList.forEach((user: IUser) => {
        defaultSelected[user.id] = false;
    });

    return defaultSelected;
};

const UsersReducer = (state = initialState, action: any) =>
{
    switch (action.type)
    {
        case "FETCH_USERS_LIST":
            return {
                ...state,
                users: action.users,
                selectedUserIdList: createSelectedList(action.users),
            };
        case "SELECTED_LIST_INFO":
            return {
                ...state,
                selectedUserIdList:  {...action.selectedUserIdList}
            };
        default:
            return { ...state }

    }
};

export default UsersReducer;