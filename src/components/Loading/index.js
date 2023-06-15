import "./Loading.css"

const Loading = () => {
    return (
        <div className="backdrop">
            <div className="loader">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    )
}

export default Loading