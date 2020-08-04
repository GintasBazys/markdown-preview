import React, {useState, useEffect} from 'react';
import marked from "marked";
import DOMPurify from "dompurify";
import "./App.css";

function App() {

    const [content, setContent] = useState("");

    const initialContent = "# Welcome to my React Markdown Previewer!<hr>";

    useEffect(() => {

      setContent(initialContent);
    }, []);

    useEffect(() => {
        document.getElementById('preview').innerHTML =
            marked(DOMPurify.sanitize(content));
    }, [content]);


    const handleChange = event => {
        setContent(event.target.value)
    }

    const handleKeyPress = event => {
        if(event.key === "Enter") {
            setContent(event.target.value + "<hr>")
        }
    }

    return (
    <div className="App">
      <div id="editor">
        Editor
        <textarea
            type="text"
            rows="12"
            cols="12"
            value={content}
            onKeyPress={handleKeyPress}
            onChange={handleChange}/>
      </div>
        <div className="preview-text">PREVIEW</div>
        <div id="preview">
        </div>
    </div>
  );
}

export default App;
