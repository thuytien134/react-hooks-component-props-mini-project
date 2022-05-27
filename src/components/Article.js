import React from "react"


function Article({title,date ="January 1, 1970",preview,minutes}){
let cup = ""
const emoji1 ="☕️"
const emoji2 ="🍱"
debugger
if(minutes < 30){
    
    const LEN = Math.ceil(minutes/5)
    const arr = new Array(LEN).fill(emoji1)
     cup = arr.join('')
     debugger
    }
else{
    const LEN = Math.ceil(minutes/10)
    const arr = new Array(LEN).fill(emoji2)
     cup = arr.join('')
}
 return (
       <article>
           <h3>{title}</h3>
           <small>
               {date}
               {cup}
               {minutes} min read
            </small>
           <p>{preview}</p>
       </article>
    )
}
export default Article