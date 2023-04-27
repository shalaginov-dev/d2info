import {TeamBlock} from '../components/TeamBlock'
import {useSelector} from "react-redux";

function TeamsPage() {
    const {items} = useSelector(state => state.dota)
    return (
        <div className="container">
            <div className="region-weu">WEU</div>
            <div className="region-sea">SEA</div>
            <div className="content__items">
                {
                    items.map((team) => (<TeamBlock key={team.id} {...team}/>))
                }
            </div>
        </div>
    )
}

export default TeamsPage