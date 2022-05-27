import React from "react"
import Article from "./Article";

function ArticleList({ posts }){
    const myPost = posts.map(a =>{
        return <Article key={a.id} title={a.title} date={a.date} preview={a.preview} minutes={a.minutes}/>
    })
    return (
        <main>
        {myPost}
        </main>
    );
}

export default ArticleList