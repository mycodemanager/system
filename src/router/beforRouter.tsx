import { useNavigate, useLocation } from "react-router-dom";

export default function BeforRouter(props:{children: JSX.Element}) {
    const {pathname} = useLocation();
    console.log(useLocation());
    
    if(localStorage.getItem("system_token")){
        // if()
        return props.children;
    }else{
        return props.children;
    }

}