import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPlayerStat} from "../redux/asyncActions";
import InfoBlock from "../components/InfoBlock";
import {STATUS} from "../redux/dotaSlice";
import Preloader from "../components/Helpers/Preloader";
import { useNavigate } from "react-router-dom";


function InfoPage() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {player, hero, responseData} = useSelector(state => state.dota)
    const loading = useSelector(state => state.dota.loading)

    useEffect(() => {
        if (player.id !== '' && hero.id !== '')
            dispatch(fetchPlayerStat({playerId: player.id, heroId: hero.id, patch: '7.32'}))
        else{
            navigate('/')
            }
    }, [])

    return (
        loading === STATUS.PENDING || loading === STATUS.IDLE
            ? <Preloader/>
            : <InfoBlock nickname={player.nickname} hero={hero.name} responseData={responseData}/>
    )
}

export default InfoPage