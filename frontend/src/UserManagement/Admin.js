import React, {useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';

const USR = props =>{
    const {user} = useContext(AuthContext);
    console.log(user._gender);
}
//test3
//test
//test2
export default USR;