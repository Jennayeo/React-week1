import React from "react";
import {useSelector, useDispatch} from "react-redux";

const Detail = (props) => {

    // return <h1>상세 페이지입니다!</h1>;
    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(bucket_list, props);

    // parseint = 다른형을 숫자로 바꿔주는 것
    const bucket_index = parseInt(props.match.params.index);
    
    return <h1>{bucket_list[bucket_index]}</h1>;


}

export default Detail;