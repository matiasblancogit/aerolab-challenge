
import { Center,CircularProgress } from '@chakra-ui/react';
import React from 'react';

import api from './api';
import { User } from './types';

export interface  Context {
    state:{
        user:User
    },
    actions:{
        addPoints: (amount:number)=>Promise<void>;
    },
}

const UserContext=React.createContext({} as Context);

const UserProvider:React.FC = ({children})=>{
    const [user, setUser] = React.useState<User>();
    const [status, setStatus] = React.useState<"pending"|"resolved"|"rejected">("pending");

   async function handleAddPoints(amount:number){
        if(!user) return;

        return api.points.add(amount).then(()=>{
            setUser({...user,points:user.points+amount})
        })
    }

    React.useEffect(()=>{
        api.fetch().then((user)=>{
            setUser(user);
            setStatus("resolved");
        });
    },[]);

    if(!user || status == "pending"){
        return <Center padding={12}>
                <CircularProgress isIndeterminate color="primary.500"></CircularProgress>
        </Center>
    }

    

    const state:Context['state']={user};
    const actions={
        addPoints: handleAddPoints
    };
    return  <UserContext.Provider value={{state,actions}}>{children}</UserContext.Provider> 
}
export{ UserContext as default, UserProvider as Provider};