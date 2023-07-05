import style from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={style.backdrop}>
            <div className={style.loader}>
                <div className={style.box}></div>
                <div className={style.box}></div>
                <div className={style.box}></div>
            </div>
        </div>
    )
}

export default Loading