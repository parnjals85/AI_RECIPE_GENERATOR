// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

// const Protected_routes = ({ children }) => {
//   const { isAuthenticated, isLoading } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       navigate("/login");
//     }
//   }, [isAuthenticated, isLoading, navigate]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (isAuthenticated) {
//     return children;
//   }

//   return null;
// };

// export default Protected_routes;

import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
 export default function Protected_routes({children}){
    const {isAuthenticated , isLoading} = useAuth0();

    if(isLoading){
        return <p className="text-center mt-10">Loading....</p>
    }
    return isAuthenticated ? children : <Navigate to='/login' replace/>
 }

