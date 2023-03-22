import {heroes} from "../assets/img/herosIcons/heroes";
import {setHero} from "../redux/dotaSlice";
import {useDispatch} from "react-redux";

function HeroesPage() {
    const dispatch = useDispatch()

    const handlePickHero = (hero) => {
        dispatch(setHero(hero))
    }

    return (
        <div className="container">
            <div className="heroes-block">
                {
                    heroes.map((h, i) => <img key={i} onClick={()=>{handlePickHero(h)}} src={h.icon} alt="ww"/>)
                }
            </div>
        </div>
    )
}

export default HeroesPage