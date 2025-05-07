import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Container from "@mui/material/Container";

export default function Posts() {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch('/posts/my-first-post.md')
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);


    return (
        <>
            <Container>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "6rem"}}>
                        <p>tehstjhskjdfgnljkdfg</p>
                    </div>
                    <div>
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>
            </Container>

        </>

    );
}
