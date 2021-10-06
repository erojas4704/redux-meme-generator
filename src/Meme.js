import "./meme.css"

const Meme = ({ meme, handleDelete }) => {
    return (
        <>
            <div className="meme-container" style={{ backgroundImage: `url('${meme.url}')` }}>
                <img alt="stop asking" src={meme.url} style={{ visibility: "hidden" }} />
                <div className="meme-text text-top">{meme.top}</div>
                <div className="meme-text text-bottom">{meme.bottom}</div>
            </div>

            {handleDelete && <button onClick={() => handleDelete(meme)}>X</button>}
        </>
    )
}

export default Meme;