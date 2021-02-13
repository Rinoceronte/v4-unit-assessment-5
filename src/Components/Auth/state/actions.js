
export const updateUser = (user) => {
    return {
        type: 'UPDATE_USER',
        payload: user
    }
}

export const logout = () => {
        return {
        type: 'LOGOUT',
        payload: {username: '', profile_pic: ''}
    }
}
