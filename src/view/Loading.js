const Loading = ({ isLoading }) => {
    let style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    let bgStyle = {
        background: 'rgba(0,0,0,.2)',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0',
        left: '0'
    }
    return (
        <>
            <div className={`${isLoading ? 'd-block' : 'd-none'}`}>
                <div style={bgStyle}>
                    <div style={style}>
                        <div className="load-4">
                            <div className="ring-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading;