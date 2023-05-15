import React from "react";
import styles from "./SliderRecommBlock.module.css"
import postImage from "../../../../assests/images/MainPage/recommendation/test_img.png"
import { Link } from "react-router-dom";

const SliderRecommBlock= ({postInfo}) => {
  return (
    <div className={styles.sliderBlock}>
      <div className={styles.postImage}>
        <Link to={"/"}>
            <img src={postImage} alt="postIMAGE" />
        </Link>
      </div>
      <div className={styles.postText}>
        <Link to={"/"}><h2>{postInfo.name}</h2></Link>
        <p>{postInfo.discription}</p>
      </div>
      <Link to={"/"} className={styles.continueRead}>Читать дальше</Link>
    </div>
  )
};

export default SliderRecommBlock;
