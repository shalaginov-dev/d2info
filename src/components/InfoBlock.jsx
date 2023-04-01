import {memo} from "react";


const InfoBlock = memo(({nickname, hero})=> {

    return (
        <div className="container">
            <div className="info-block">
                <h4>{nickname} {hero} {7.32}</h4>
                {/*<h4>1212</h4>*/}
            </div>
        </div>
    )
})

export default InfoBlock