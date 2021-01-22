import {userPageApi} from "../../api";
import {Dispatch} from "react";
import {RootState} from "../index";
import {userPageReducer} from "./index";

export const userPageThunk = () => {

    function getUsers() {
        return async function(dispatch: Dispatch<any>, getState:()=>RootState) {
            const response = await userPageApi.getUsers()
            console.log(response)
            switch (response.status) {
                case 200:
                    dispatch(userPageReducer.actions.setUserList(response.data))
                    break
                default:
                    break
            }
        }
    }

    return {
        getUsers
    }
}