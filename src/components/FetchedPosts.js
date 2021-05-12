import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {fetchPost} from "../redux/actions";
import Post from "./Post";

const FetchedPosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state =>
        state.posts.fetchedPosts
    )
    const loading = useSelector(state =>
        state.app.loading
    )

    if (loading) {
        return <div>Loading...</div>
    }

    if (!posts.length) {
        return <button
            className='btn btn-primary'
            onClick={() => dispatch(fetchPost())}
        >Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}
export default FetchedPosts