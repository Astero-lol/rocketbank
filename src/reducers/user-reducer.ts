export type TUserProfile = {
    userName: string;
    photo: string;
};
export type TUserState = {
    profile: TUserProfile;
};

const initialState: TUserState = {
    profile: {
        userName: 'Свят',
        photo: 'https://pp.userapi.com/c852124/v852124524/71ac7/jZNtkw_kIhg.jpg?ava=1'
    }
};

export function userReducer(state = initialState) {
    return state;
}
