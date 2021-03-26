import React from "react";
import {Grid,Image, Text} from "../elements"
const Post = (props) => {

    return (
    <div>
      <Grid>
          <Grid is_flex>
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
            <Text>{props.insert_dt}</Text>
          </Grid>
          <Grid padding="16px">
            <Text bold>{props.contents}</Text>
          </Grid>
          <Grid>
            <Image shape= "rectangle" src={props.src}/>
          </Grid>
          <Grid padding="16px">
            <Text bold>댓글 {props.comment_cnt}개</Text>
          </Grid>
      </Grid>
    </div>
    );
}

Post.defaultProps ={
  user_info: {
    user_name: "Bradlee",
    user_profile: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/22QT/image/p-RX98d_34y9ElK_Qfwz8OfHhxM.jpg",
  },
  image_url: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/22QT/image/p-RX98d_34y9ElK_Qfwz8OfHhxM.jpg",
  contents: "내가 시바견이다!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",

};

export default Post;