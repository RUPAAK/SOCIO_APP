import React, {useState} from 'react'
import './Post.css'
import {PermMedia, EmojiEmotions, LocationOn} from '@material-ui/icons'
import {useSelector} from 'react-redux'
import axios from 'axios'


const Post = () => {

    const [photo, setphoto] = useState('')
    const [desc, setdesc] = useState('')
    const userLoginDetails= useSelector(state=> state.userLoginDetails)
    const {userDetails}= userLoginDetails

    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        const formData= new FormData()
        formData.append('photoPp', photo)
        formData.append('userId', userDetails._id)
        formData.append('desc', desc)
        await axios.post('http://localhost:5000/api/posts', formData).then((response)=> console.log(response))
        .catch((e)=> console.log(e))
        setdesc('')
    }
    return (
        <div className="post_main_container">
            <form className="post_container" onSubmit={onSubmitHandler}>
                <div className="top_part">
                    <img src={userDetails && userDetails.profilePicture} alt="" className="postProfile" />
                    <input onChange={(e)=> setdesc(e.target.value)} type="text" placeholder="What's on your mind" value={desc} className="postInput" />
                </div>
                <hr/>
                <div className="bottom_part">
                    <div className="postOptions">
                        <label htmlFor="file" className="postOptionsIcons">
                            <PermMedia htmlColor="coral" className="postIcon" />
                            <span className="postIconDetail">Photos/Video</span>
                            <input onChange={(e)=> setphoto(e.target.files[0])} style={{display: 'none'}} type="file" id="file" accept=".jpeg, .png, .jpg" />
                        </label>
                        <div className="postOptionsIcons">
                            <LocationOn htmlColor="lightblue" className="postIcon" />
                            <span className="postIconDetail">Location</span>
                        </div>
                        <div className="postOptionsIcons">
                            <EmojiEmotions htmlColor="greenyellow" className="postIcon" />
                            <span className="postIconDetail">Feelings</span>
                        </div>
                    </div>
                    <button type="submit" className="share">Share</button>
                </div>
            </form>
        </div>
    )
}

export default Post
