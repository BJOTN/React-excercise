import { useState } from "react"

export default function Post() {
    const [postList, setPostList] = useState([])
    const [postID, setPostID] = useState('')
    const handleGenerator = async () => {
        try {
            if (postList.length < 5) {
                const response = await fetch(` https://jsonplaceholder.typicode.com/posts/${postID}`)
                if (response.ok) {
                    const data = await response.json();
                    if (!postList.find(e => e.id == data.id)) {
                        setPostList((posts) => [...posts, data])
                        setPostID('')
                    } else {
                        alert('This post is already generated')
                    }
                } else {
                    alert('This post dont exist')
                }
            } else {
                alert('You already generated 5 post')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <input type='number' onChange={(e) => setPostID(e.target.value)} value={postID} />
            <button onClick={handleGenerator}>Generate post</button>

            {postList.map((posts) => <div> <h1>{posts.title}</h1><p>{posts.body}</p></div>)}

        </>
    )
}