import {TeamBlock} from '../components/TeamBlock'
import {useSelector} from "react-redux";

function TeamsPage() {

    const {items} = useSelector(state => state.dota)

    return (
        <div className="container">
            <div className="content__items">
                {
                    items.map((p) => (<TeamBlock key={p.id} {...p}/>))
                }
            </div>
        </div>
    )
}

export default TeamsPage