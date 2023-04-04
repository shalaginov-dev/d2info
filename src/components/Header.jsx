import {Link, useLocation} from "react-router-dom";

import logoSvg from '../assets/img/pngwing.com (1).png'
import {Search} from "./Helpers/Search";


export function Header() {
    // const loading = useSelector(state => state.dota.loading)
    const location = useLocation()

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="70" src={logoSvg} alt="logo"/>
                        <div>
                            <h1>d2_info</h1>
                        </div>
                    </div>
                </Link>
                {
                    location.pathname === '/heroes' && <Search/>
                }
                <Link to="/">
                    <button onClick={()=>{window.history.back()}} className="button">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="23" height="23">
                            <path
                                d="M15,7H10.17V5.414A2,2,0,0,0,6.756,4L.876,9.879a3,3,0,0,0,0,4.242L6.756,20a2,2,0,0,0,3.414-1.414V17H16a6.006,6.006,0,0,1,6,6,1,1,0,0,0,2,0V16A9.01,9.01,0,0,0,15,7Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
            {/*{loading === STATUS.PENDING && <LinearProgress/>}*/}
        </div>

    )
}