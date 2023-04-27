import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTeamPlayer} from "../redux/dotaSlice";
import {memo} from "react";


export const TeamBlock = memo(({image, players, title}) => {
    const dispatch = useDispatch()

    const handlePickPlayer = (player, title) => {
        dispatch(setTeamPlayer({...player, teamName: title}))
    }

    return (
        <div className="team-block-wrapper">
            <div className="team-block">
                <div className="team-title">{title}</div>
                <div className="team-block-image">
                    <img src={image} alt="teamLogo"/>
                </div>
                {
                    players.map((p, i) =>
                        <Link className="team-block-player" key={i} onClick={() => {handlePickPlayer(p, title)}} to={`/heroes`}>
                            <span>{p.nickname}</span>
                        </Link>
                    )
                }
            </div>
        </div>
    )
})