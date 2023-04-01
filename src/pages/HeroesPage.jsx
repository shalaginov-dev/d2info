import {heroes} from "../assets/heroes";
import {setHero} from "../redux/dotaSlice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {memo} from "react";

export const HeroesPage = memo(() => {
    const dispatch = useDispatch()

    const handlePickHero = (hero) => {
        dispatch(setHero({id: hero.id, name: hero.name}))
    }

    return (
        <div className="container">
            <div className="heroes-block">
                {
                    heroes.map((hero, i) => <Link key={i} onClick={() => {
                    }} to={`/info`}>
                        <img onClick={() => {
                            handlePickHero(hero)
                        }} src={hero.img} alt="ww"/>
                    </Link>)
                }
            </div>
        </div>
    )
})

