import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTeamPlayer} from "../redux/dotaSlice";
import {memo} from "react";


export const TeamBlock = memo(({id, title, image, players}) =>{
    const dispatch = useDispatch()

    const handlePickPlayer = (player) => {
        dispatch(setTeamPlayer(player))
    }

    return (
        <div className="team-block-wrapper">
            <div className="team-block">
                <div className="team-block-link">
                    <img
                        className="team-block__image"
                        src={image}
                        alt="teamLogo"
                    />
                </div>
                {
                    players.map((p, i) => <div className="team-block-player" key={i}>
                        <Link onClick={() => {handlePickPlayer(p)}} to={`/heroes`}>{p.nickname}</Link>
                    </div>)
                }
            </div>
        </div>
    )
})