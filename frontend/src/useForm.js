import { useState } from 'react'
import validateInfo from './validateInfo';
import axios from 'axios';


const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        alert("in handle")
        e.preventDefault()
        setErrors(validateInfo(values))
        //$.post("google.com",values);
        //window.location.href = "http://www.w3schools.com";
        axios.post("http://localhost:8070/formcards/add",values).then(()=>{
            alert("Card Added")
        }).catch((err)=>{
            alert(err)
        })
    };

    const handleSubmit2 = e => {
        alert("in handle")
        e.preventDefault()
        axios.post("http://localhost:8070/userpayments/add",values).then(()=>{
            alert("Record Added")
        }).catch((err)=>{
            alert(err)
        })
    };

    const handleSubmit3 = e => {
        alert("in handle")
        e.preventDefault()
        axios.post("http://localhost:8070/salarys/add",values).then(()=>{
            alert("Record Added")
        }).catch((err)=>{
            alert(err)
        })
    };
    
    return { handleChange, handleFocus,handleSubmit2,handleSubmit3, handleSubmit, values, errors };
};

export default useForm; 