export const ADDUSER = "ADDUSER";
export const REMOVEUSER = "REMOVEUSER";

export const addUser = (user, data) => ({ type: ADDUSER, payload: { user, data }})
export const removeUser = () => ({ type: REMOVEUSER });

export const thunkFunctionCreator = (userId = 1) => async (dispatch, getState) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const data = await res.json()
    dispatch(addUser({name: 'Jane', age: 40}, data))
}