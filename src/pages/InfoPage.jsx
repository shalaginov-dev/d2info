import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPlayerStat} from "../redux/asyncActions";
import InfoBlock from "../components/InfoBlock";
import {STATUS} from "../redux/dotaSlice";
import Preloader from "../components/Helpers/Preloader";
import {useNavigate} from "react-router-dom";
import {format} from "fecha";


function InfoPage() {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const {player, hero, patch, afterDate, beforeDate, responseData} = useSelector(state => state.dota)
    const loading = useSelector(state => state.dota.loading)

    const formatAfterDate = format(new Date(afterDate), 'DD[%2F]MM[%2F]YYYY')
    const formatBeforeDate = format(new Date(beforeDate), 'DD[%2F]MM[%2F]YYYY')

    useEffect(() => {
        if (player.id !== '' && hero.id !== '')
            dispatch(fetchPlayerStat({
                playerId: player.id,
                heroId: hero.id,
                patch: patch,
                afterDate: formatAfterDate,
                beforeDate: formatBeforeDate
            }))
        else {
            navigate('/')
        }
    }, [])

    return (
        loading === STATUS.PENDING || loading === STATUS.IDLE
            ? <Preloader/>
            : <InfoBlock nickname={player.nickname} hero={hero.name} responseData={responseData} patch={patch}/>
    )
}

export default InfoPage