import { useDispatch, useSelector } from "react-redux";
import Meme from "./Meme";
import MemeForm from "./MemeForm";
//import html2canvas from "html2canvas";
import { useRef } from "react";

const MemeGenerator = () => {
    const top = useSelector(store => store.top);
    const url = useSelector(store => store.url);
    const bottom = useSelector(store => store.bottom);
    const memes = useSelector(store => store.memes);
    const memeRef = useRef();
    const dispatch = useDispatch();
    //const [canvasDataURL, setCanvasDataURL] = useState(null);

    // const save = async () => {
    //     console.log(memeRef.current);
    //     const c = await html2canvas(memeRef.current, { allowTaint: true, foreignObjectRendering: true});

    //     // const link = document.createElement('a');
    //     // link.download = 'download.png';
    //     // link.href = c.toDataURL();
    //     // link.click();
    //     setCanvasDataURL(c.toDataURL());
    // }

    const deleteMeme = meme => {
        dispatch({ type: "REMOVE", data: meme.id });
    }

    return (
        <div>
            <MemeForm />
            <div ref={memeRef} style={{ display: 'inline-block' }}>
                <Meme meme={{ top, bottom, url }} />
            </div>
            <div className="meme-collection">
                {memes.map(meme => <Meme handleDelete={deleteMeme} meme={meme} key={meme.id} />)}
            </div>
        </div>
    )
}

export default MemeGenerator;