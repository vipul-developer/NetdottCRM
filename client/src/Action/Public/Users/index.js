import axios from "axios";
import { SIGNIN_USER,AUTH_USER,LOGOUT_USER } from "../../ActionTypes";
import { USER_SERVER } from "../../../Utils/misc";
export function singinUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                    .then(response => response.data);
        return {
            type: SIGNIN_USER,
            payload: request
        }
}
