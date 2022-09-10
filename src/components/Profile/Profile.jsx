import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';


const Profile = () => {
  return <div className={s.content}>
    <div>
      <img className={s.img} src='https://image.shutterstock.com/image-vector/surfing-beach-svg-illustration-design-260nw-2181165831.jpg' />
    </div>
    <div>
      ava + description
    </div>
    
    <MyPosts />
    <Post message='Hello World' like='15'/>
    <Post message='Hello best buddy in the World' like='20' />
    

  </div>

}

export default Profile;