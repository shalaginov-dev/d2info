import {strHeroes} from "../assets/strHeroes";
import {agiHeroes} from "../assets/agiHeroes";
import {intHeroes} from "../assets/intHeroes";
import str from '../assets/img/Strength_attribute_symbol.png'
import agi from '../assets/img/Agility_attribute_symbol.png'
import int from '../assets/img/Intelligence_attribute_symbol.png'

import {setHero} from "../redux/dotaSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {memo, useEffect} from "react";

export const HeroesPage = memo(() => {
    const dispatch = useDispatch()
    const {player, hero} = useSelector(state => state.dota)
    const navigate = useNavigate()


    useEffect(() => {
        if (player.id === '' && hero.id === '') navigate('/')
    }, [])
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
                        strHeroes.map((hero, i) => <Link key={i} onClick={() => {}} to={`/info`}>
                            <img className="hero-icon" onClick={() => {handlePickHero(hero)}} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
                <div className="heroes-title">
                <img src={agi} alt="str"/>
                    AGILITY
                </div>
                <div>
                    {
                        agiHeroes.map((hero, i) => <Link key={i} onClick={() => {}} to={`/info`}>
                            <img className="hero-icon" onClick={() => {
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
                        intHeroes.map((hero, i) => <Link key={i} onClick={() => {}} to={`/info`}>
                            <img className="hero-icon" onClick={() => {handlePickHero(hero)}} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
})

