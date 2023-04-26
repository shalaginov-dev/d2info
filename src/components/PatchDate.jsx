import {useDispatch} from "react-redux";
import {setAfterDate, setBeforeDate, setPatch} from "../redux/dotaSlice";
import {useEffect, useState} from "react";

export function PatchDate() {
    const dispatch = useDispatch()

    const [active2, setActive2] = useState(true)
    const [active1, setActive1] = useState(false)
    const [active0, setActive0] = useState(false)


    useEffect(() => {
        return () => {
            dispatch(setPatch(`${active2 ? '&patch=7.33' : ''}${active1 ? '&patch=7.32' : ''}${active0 ? '&patch=7.31' : ''}`))
        }
    }, [active2, active1, active0])

    const month = new Date().getMonth() + 1
    const day = new Date().getDate()

    const date = `${new Date().getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`

    useEffect(() => {
        dispatch(setBeforeDate(date))
    }, [])


    return (
        <div className="patch-block">
            <button onClick={() => {setActive2(!active2)}}
                    className={active2 ? `button button-patch` : 'button'}>7.33
            </button>
            <button onClick={() => {setActive1(!active1)}}
                    className={active1 ? `button button-patch` : 'button'}>7.32
            </button>
            <button onClick={() => {setActive0(!active0)}}
                    className={active0 ? `button button-patch` : 'button'}>7.31
            </button>
            <div className="date-block">
                <div>
                    <p>After Date Inclusive</p>
                    <input type="date" defaultValue={'2010-01-01'} onChange={(e) => {
                        dispatch(setAfterDate(e.currentTarget.value))
                    }}/>
                </div>
                <div>
                    <p>Before Date Inclusive</p>
                    <input type="date" defaultValue={date} onChange={(e) => {
                        dispatch(setBeforeDate(e.currentTarget.value))
                    }}/>
                </div>
            </div>
        </div>
    )
}