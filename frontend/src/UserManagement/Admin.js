import React, {useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';

const USR = props =>{
    const {user} = useContext(AuthContext);
    console.log(user._gender);
}
//test3
//test
//
//test3
export default USR;