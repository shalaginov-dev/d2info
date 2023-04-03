import {strHeroes} from "../assets/strHeroes";
import {agiHeroes} from "../assets/agiHeroes";
import {intHeroes} from "../assets/intHeroes";
import str from '../assets/img/Strength_attribute_symbol.png'
import agi from '../assets/img/Agility_attribute_symbol.png'
import int from '../assets/img/Intelligence_attribute_symbol.png'

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
                <div className="heroes-title">
                    <img src={str} alt="str"/>
                    STRENGTH
                </div>
                <div>
                    {
                        strHeroes.map((hero, i) => <Link key={i} onClick={() => {
                        }} to={`/info`}>
                            <img onClick={() => {
                                handlePickHero(hero)
                            }} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
                <div className="heroes-title">
                <img src={agi} alt="str"/>
                    AGILITY
                </div>
                <div>
                    {
                        agiHeroes.map((hero, i) => <Link key={i} onClick={() => {
                        }} to={`/info`}>
                            <img onClick={() => {
                                handlePickHero(hero)
                            }} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
                <div className="heroes-title">
                <img src={int} alt="str"/>
                    INTELLIGENCE
                </div>
                <div>
                    {
                        intHeroes.map((hero, i) => <Link key={i} onClick={() => {
                        }} to={`/info`}>
                            <img onClick={() => {
                                handlePickHero(hero)
                            }} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
})

