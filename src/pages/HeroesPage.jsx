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
    const {player, hero, searchValue} = useSelector(state => state.dota)
    const navigate = useNavigate()
    // const words = [{name: 'spray'}, {name: 'limit'}, {name: 'elite'}, {name: 'exuberant'}, {name: 'destruction'}, {name: 'present'}]
    // const result = words.filter(word => !word.name.indexOf('e'))
    // console.log(result)
    const filteredStrHeroes = strHeroes.filter(word => !word.name.toLowerCase().indexOf(searchValue))
    const filteredAgiHeroes = agiHeroes.filter(word => !word.name.toLowerCase().indexOf(searchValue))
    const filteredIntHeroes = intHeroes.filter(word => !word.name.toLowerCase().indexOf(searchValue))


    useEffect(() => {
        if (player.id === '' && hero.id === '') navigate('/')
    }, [])
    const handlePickHero = (hero) => {
        dispatch(setHero({id: hero.id, name: hero.name}))
    }

    return (
        <div className="container">
            <div className="heroes-block">
                {
                    filteredStrHeroes.length !== 0 && <div className="heroes-title">
                        <img src={str} alt="str"/>
                        STRENGTH
                    </div>
                }
                <div>
                    {
                        filteredStrHeroes.map((hero, i) => <Link key={i} onClick={() => {
                        }} to={`/info`}>
                            <img className="hero-icon" onClick={() => {
                                handlePickHero(hero)
                            }} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
                {
                    filteredAgiHeroes.length !== 0 && <div className="heroes-title">
                        <img src={agi} alt="str"/>
                        AGILITY
                    </div>
                }
                <div>
                    {
                        filteredAgiHeroes.map((hero, i) => <Link key={i} onClick={() => {
                        }} to={`/info`}>
                            <img className="hero-icon" onClick={() => {
                                handlePickHero(hero)
                            }} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
                {
                    filteredIntHeroes.length !== 0 && <div className="heroes-title">
                        <img src={int} alt="str"/>
                        INTELLIGENCE
                    </div>
                }
                <div>
                    {
                        filteredIntHeroes.map((hero, i) => <Link key={i} onClick={() => {
                        }} to={`/info`}>
                            <img className="hero-icon" onClick={() => {
                                handlePickHero(hero)
                            }} src={hero.img} alt="ww"/>
                        </Link>)
                    }
                </div>
            </div>
        </div>
    )
})

