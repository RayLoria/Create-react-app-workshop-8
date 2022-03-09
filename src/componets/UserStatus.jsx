import { useState } from 'react'

function UserStatus() {
    const [ isLoggedIn ] = useState(false);
     const [ userName ] = useState('eoviedo')
    //If / else
    
    if(isLoggedIn) {
        return (

                    <div>
                          Welcome dear user
                    </div> 
            );
    } else {
        return (
            <div>
                Login
            </div> 
        );
    }
 
 
//  return(
//     isLoggedIn ?  <div>
//                     Welcome { userName }
//                    </div>
//                 :
//                     <div>
//                         Login
//                     </div> 
//  ); 

/*Logico*/
    // return (
    //     (isLoggedIn && (
    //         <div>
    //             Welcome { userName }
    //         </div>
    //     )) || (
    //         <div>
    //             Login
    //         </div> 
    //     )
    // )
   
  //In line
    return (
        <div>
            { isLoggedIn ? (
                <span>Welcome { userName } </span>
                ):(
                    <span> Login </span>
                )
            }
        </div>
    )
    
}

export default UserStatus;