import './Post.css'
import {PermMedia, EmojiEmotions, LocationOn} from '@material-ui/icons'
import {useSelector} from 'react-redux'


const Post = () => {
    const userLoginDetails= useSelector(state=> state.userLoginDetails)
    const {userDetails}= userLoginDetails
    return (
        <div className="post_main_container">
            <div className="post_container">
                <div className="top_part">
                    <img src={userDetails.profilePicture} alt="" className="postProfile" />
                    <input type="text" placeholder="What's on your mind" className="postInput" />
                </div>
                <hr/>
                <div className="bottom_part">
                    <div className="postOptions">
                        <div className="postOptionsIcons">
                            <PermMedia htmlColor="coral" className="postIcon" />
                            <span className="postIconDetail">Photos/Video</span>
                        </div>
                        <div className="postOptionsIcons">
                            <LocationOn htmlColor="lightblue" className="postIcon" />
                            <span className="postIconDetail">Location</span>
                        </div>
                        <div className="postOptionsIcons">
                            <EmojiEmotions htmlColor="greenyellow" className="postIcon" />
                            <span className="postIconDetail">Feelings</span>
                        </div>
                    </div>
                    <button type="button" className="share">Share</button>
                </div>
            </div>
        </div>
    )
}

export default Post
