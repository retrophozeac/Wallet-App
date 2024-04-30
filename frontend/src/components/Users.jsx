import { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from "./Button";

export function Users(){
    const [users,setUsers] = useState([{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 1
    }])
    
    // useEffect(async ()=>{
    //     try {
    //         const response = await axios.get('<https://api.example.com/data>');
    //         setUsers(response.data);
    //       } catch (error) {
    //         console.error('Error:', error);
    //       }
    // },[])

    return(
        <>
            <div>
                Users
            </div>
            <div>
                <input placeholder="Search Users..." className="w-full px-2 py-1 border rounded border-slate-200 "></input>
            </div>
            <div>
                {users.map(user=><User user={user}/>)}
            </div>
        </>
    )


}

function User({user}){
    return(
        <div className="flex justify-between pt-2">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                    <div className="flex flex-col justify-center h-ful">
                        <div>
                            {user.firstName} {user.lastName}
                        </div>
                    </div>
                
            </div>

            <div className="flex flex-col justify-center h-ful">
                <Button label={"Send Money"} />
            </div>

        </div>
    )
}



