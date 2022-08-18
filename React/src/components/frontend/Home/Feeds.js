import React from 'react'
import profile from '../assets/images/profile-1.jpg'
import profile2 from '../assets/images/profile-2.jpg'
import profile3 from '../assets/images/profile-3.jpg'
import profile4 from '../assets/images/profile-4.jpg'
import profile5 from '../assets/images/profile-5.jpg'
import profile6 from '../assets/images/profile-6.jpg'
import feed from '../assets/images/feed-1.jpg'
import feed2 from '../assets/images/feed-2.jpg'
import feed3 from '../assets/images/feed-3.jpg'


const Feeds = () => {
  return (
    <>
      <div className="feeds">

<div className="feed">
  <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={profile6} alt="" />
      </div>

      <div className="info">
        <h3>Lana Rose</h3>
        <small>Dubai, 15 MINUTES AGO</small>
      </div>
    </div>

    <span className="edit">
      <i className="uil uil-ellipsis-h"></i>
    </span>
  </div>

  <div className="photo">
    <img src={feed2} alt="" />
  </div>

  <div className="action-button">
    <div className="interaction-buttons">
      <span><i className="uil uil-heart"></i></span>
      <span><i className="uil uil-comment-dots"></i></span>
      <span><i className="uil uil-share-alt"></i></span>
    </div>

    <div className="bookmark">
      <span><i className="uil uil-bookmark-full"></i></span>
    </div>
  </div>

  <div className="liked-by">
    <span>  <img src={profile2} alt="" /> </span>
    <span>  <img src={profile4} alt="" /> </span>
    <span>  <img src={profile5} alt="" /> </span>
    <p>Linked by <b>Ernest Achiever</b> and 2,323 others</p>
  </div>

  <div className="caption">
    <p>
      <b>Lana Rose </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id qui.
      <span className="harsh-tag">#lifesycle</span>
    </p>
  </div>
  <div className="text-muted comments">View all 299 comments</div>
</div>


<div className="feed">
  <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={profile3} alt="" />
      </div>

      <div className="info">
        <h3>Lana Rose</h3>
        <small>Dubai, 15 MINUTES AGO</small>
      </div>
    </div>

    <span className="edit">
      <i className="uil uil-ellipsis-h"></i>
    </span>
  </div>

  <div className="photo">
    <img src={feed} alt="" />
  </div>

  <div className="action-button">
    <div className="interaction-buttons">
      <span><i className="uil uil-heart"></i></span>
      <span><i className="uil uil-comment-dots"></i></span>
      <span><i className="uil uil-share-alt"></i></span>
    </div>

    <div className="bookmark">
      <span><i className="uil uil-bookmark-full"></i></span>
    </div>
  </div>

  <div className="liked-by">
    <span>  <img src={profile} alt="" /> </span>
    <span>  <img src={profile3} alt="" /> </span>
    <span>  <img src={profile6} alt="" /> </span>
    <p>Linked by <b>Ernest Achiever</b> and 2,323 others</p>
  </div>

  <div className="caption">
    <p>
      <b>Lana Rose </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id qui.
      <span className="harsh-tag">#lifesycle</span>
    </p>
  </div>
  <div className="text-muted comments">View all 299 comments</div>
</div>

<div className="feed">
  <div className="head">
    <div className="user">
      <div className="profile-photo">
        <img src={profile6} alt="" />
      </div>

      <div className="info">
        <h3>Lana Rose</h3>
        <small>Dubai, 15 MINUTES AGO</small>
      </div>
    </div>

    <span className="edit">
      <i className="uil uil-ellipsis-h"></i>
    </span>
  </div>

  <div className="photo">
    <img src={feed3} alt="" />
  </div>

  <div className="action-button">
    <div className="interaction-buttons">
      <span><i className="uil uil-heart"></i></span>
      <span><i className="uil uil-comment-dots"></i></span>
      <span><i className="uil uil-share-alt"></i></span>
    </div>

    <div className="bookmark">
      <span><i className="uil uil-bookmark-full"></i></span>
    </div>
  </div>

  <div className="liked-by">
    <span>  <img src={profile2} alt="" /> </span>
    <span>  <img src={profile4} alt="" /> </span>
    <span>  <img src={profile5} alt="" /> </span>
    <p>Linked by <b>Ernest Achiever</b> and 2,323 others</p>
  </div>

  <div className="caption">
    <p>
      <b>Lana Rose </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam id qui.
      <span className="harsh-tag">#lifesycle</span>
    </p>
  </div>
  <div className="text-muted comments">View all 299 comments</div>
</div>

</div>
    </>
  )
}

export default Feeds