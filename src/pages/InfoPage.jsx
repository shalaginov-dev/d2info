import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPlayerStat} from "../redux/asyncActions";
import InfoBlock from "../components/InfoBlock";
import {STATUS} from "../redux/dotaSlice";
import Preloader from "../components/Helpers/Preloader";


function InfoPage() {
    console.log('info render')
    const dispatch = useDispatch()
    const {player, hero, responseData} = useSelector(state => state.dota)
    const loading = useSelector(state => state.dota.loading)

    useEffect(() => {
        if (player.id !== '' && hero.id !== '')
            dispatch(fetchPlayerStat({playerId: player.id, heroId: hero.id, patch: '7.32'}))
    }, [])

    return (
        loading === STATUS.PENDING
            ? <Preloader/>
            : <InfoBlock nickname={player.nickname} hero={hero.name} responseData={responseData}/>
    )
}

export default InfoPage