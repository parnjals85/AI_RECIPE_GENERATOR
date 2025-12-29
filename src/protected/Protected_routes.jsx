import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected_routes= ({children})=>{
    const authtoken = localStorage.getItem('authtoken');
    const parsetoken = JSON.parse(authtoken);
    const navgate = useNavigate()
    useEffect(()=>{
        if(!parsetoken){
            navgate('/login')
        }
    }, []);
    if (parsetoken) {
        return children
    } 
}

export default Protected_routes