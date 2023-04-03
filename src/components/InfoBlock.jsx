import {memo, useEffect, useState} from "react";
import {SimpleModal} from "./Helpers/Modal";
import {useSelector} from "react-redux";
import {STATUS} from "../redux/dotaSlice";
import {useNavigate} from "react-router-dom";


const InfoBlock = memo(({nickname, hero, responseData}) => {
    const [modalActive, setModalActive] = useState(false)
    const loading = useSelector(state => state.dota.loading)
    const navigate = useNavigate()

    useEffect(() => {
        if (loading === STATUS.FAILED) {
            setModalActive(true)
        }
    }, [loading])


    return (
        loading === STATUS.FAILED ? <SimpleModal
                active={modalActive}
                onConfirmCLick={() => {navigate('/')}}
                value={'Info not found =('}
                onActiveModalClick={() => {navigate('/')}}
            /> :
            <div className="container">
                <div className="info-block">
                    <h4>{nickname} {hero} {7.32}</h4>
                    {
                        <textarea autoFocus defaultValue={`
                         ${responseData.nickname}
                        wins: ${responseData.wins}
                        losses: ${responseData.losses}
                        total: ${responseData.total}
                        winrate: ${responseData.winrate.toFixed(2)}
                        kills: ${responseData.kills.toFixed(2)}
                        `} name="info" id="" cols="30" rows="10"/>
                    }
                </div>
            </div>
    )
})

export default InfoBlock