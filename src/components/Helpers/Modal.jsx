import s from './Modal.module.scss'



export function Modal({active, value, onActiveModalClick, onConfirmCLick}) {
    return (
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => onActiveModalClick(false)}>
            <div className={active ? `${s.modalContent} ${s.active}` : s.modalContent}
                 onClick={e => e.stopPropagation()}>
                <p>{value}</p>
                <div className={s.buttonsBlock}>
                    <button className='button pay-btn' onClick={() => onActiveModalClick(false)}>Отмена</button>
                    <button className='button pay-btn' onClick={() => onConfirmCLick()}>Ок</button>
                </div>
            </div>
        </div>
    )
}

export function SimpleModal({active, value, onActiveModalClick, onConfirmCLick}) {
    return (
        <div className={active ? `${s.modal} ${s.active}` : s.modal} onClick={() => onActiveModalClick(false)}>
            <div className={active ? `${s.modalContent} ${s.active}` : s.modalContent}
                 onClick={e => e.stopPropagation()}>
                <p>{value}</p>
                <div className={s.buttonsBlock}>
                    <button className='button pay-btn' onClick={() => onConfirmCLick()}>Ок</button>
                </div>
            </div>
        </div>
    )
}

