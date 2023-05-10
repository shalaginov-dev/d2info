import {memo, useEffect, useState} from "react";
import {SimpleModal} from "./Helpers/Modal";
import {useSelector} from "react-redux";
import {STATUS} from "../redux/dotaSlice";
import {useNavigate} from "react-router-dom";
import copy from 'copy-to-clipboard'


const InfoBlock = memo(({player, hero, responseData, patch, url}) => {
    const [modalActive, setModalActive] = useState(false)
    const loading = useSelector(state => state.dota.loading)
    const navigate = useNavigate()

    let fixedInfo = {}
    if (!!Object.keys(responseData).length) fixedInfo = {
        ...responseData,
        winrate: Number((responseData.winrate * 100).toFixed(0)),
        kda: Number(responseData.kda.toFixed(2)),
        gpm: Number(responseData.gpm.toFixed(0)),
        xpm: Number(responseData.xpm.toFixed(0)),
        avgKal: responseData.avgKal.toFixed(2),
        lastHits: Number(responseData.lastHits.toFixed(0)),
        denies: Number(responseData.denies.toFixed(0)),
        teamname: player.teamName,
        nickname: player.nickname,
        position: player.position.toUpperCase(),
        heroName: hero.toUpperCase(),
    }

    useEffect(() => {
        if (loading === STATUS.FAILED) {
            setModalActive(true)
        }
    }, [loading])
    useEffect(() => {
        if (hero.id === '') navigate('/')
    }, [])

    const ptch = patch.replace(/[^.\d]/g, '').split('')

    if (ptch.length > 4) ptch.splice(4, 0, '__')
    if (ptch.length > 9) ptch.splice(9, 0, '__')

    const handleCopyUrlClick = () => {
        copy(url)
    }
    const handleCopyJSONClick = () => {
        copy(JSON.stringify(fixedInfo))
    }

    return (
        loading === STATUS.FAILED ? <SimpleModal
                active={modalActive}
                onConfirmCLick={() => {
                    navigate('/')
                }}
                value={'Info not found =('}
                onActiveModalClick={() => {
                    navigate('/')
                }}/>
            : <div className="container">
                <div className="info-block">
                    <h3>{player.nickname} {hero} {ptch}</h3>
                    <div className="url-block">
                        <p>{url}</p>
                        <button className="button" onClick={handleCopyUrlClick}>Copy Link
                        </button>
                    </div>
                    <div className="json-block">
                        {
                            <textarea autoFocus defaultValue={JSON.stringify(fixedInfo)} name="info" id="" cols="76"
                                      rows="8"/>
                        }
                        <button className="button" onClick={handleCopyJSONClick}>Copy JSON
                        </button>
                    </div>
                </div>
            </div>
    )
})

export default InfoBlock