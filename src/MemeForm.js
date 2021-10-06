import { useState } from "react";
import { useDispatch } from "react-redux"
import "./MemeForm.css";

const MemeForm = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({ top: '', bottom: '', url: '' });

    const handleChange = e => {
        dispatch({ type: "UPDATE_FORM", field: e.target.name, data: e.target.value });
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD", data: form });
        setForm({ top: '', bottom: '', url: '' });
    }

    return (
        <form className="meme-form" onSubmit={handleSubmit}>
            <label htmlFor="top">Top Label</label>
            <input
                name="top"
                id="top"
                type="text"
                value={form.top}
                onChange={handleChange}
            />
            <label htmlFor="bottom">Bottom Label</label>
            <input
                name="bottom"
                id="bottom"
                type="text"
                value={form.bottom}
                onChange={handleChange}
            />
            <label htmlFor="url">URL</label>
            <input
                name="url"
                id="url"
                type="text"
                value={form.url}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default MemeForm;