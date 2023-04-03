import {memo} from "react";


const InfoBlock = memo(({nickname, hero, responseData}) => {
    console.log(JSON.stringify(responseData))
    return (
        <div className="container">
            <div className="info-block">
                <h4>{nickname} {hero} {7.32}</h4>
                <textarea name="" id="" cols="30" rows="10">
                    {
                        `${responseData.nickname}
                        wins: ${responseData.wins}
                        losses: ${responseData.losses}
                        total: ${responseData.total}
                        winrate: ${responseData.winrate.toFixed(2)}
                        kills: ${responseData.kills.toFixed(2)}`
                    }
                </textarea>
            </div>
        </div>
    )
})

export default InfoBlock