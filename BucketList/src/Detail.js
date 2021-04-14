import React from "react";
import styled from "styled-components";
// mateiral ui
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

// redux hook을 불러온다.
import {useSelector, useDispatch} from "react-redux";
// 내가 만든 액션 생성 함수 불러온다.
import {deleteBucketFB, updateBucketFB} from "./redux/modules/bucket";


const Detail = (props) => {

    // 삭제버튼 구현 dispatch 사용
    const dispatch = useDispatch();
    //이제 온클릭에 연결

    // 스토어에서 상태값(데이터) 가져오기
    // return <h1>상세 페이지입니다!</h1>;
    const bucket_list = useSelector((state) => state.bucket.list);
    
    // url 파라미터에서 인덱스 가져오기
    // parseint = 다른형을 숫자로 바꿔주는 것
    const bucket_index = parseInt(props.match.params.index);

    // 히스토리를 가지고있는지 확인
    console.log(props);

    return (
        <div>
            <h1>{bucket_list[bucket_index].text}</h1>
            <ButtonGroup>
                <Button
                    style={{
                        color: "pink"
                    }}
                    onClick={() => {
                        dispatch(deleteBucketFB(bucket_index)); // 괄호 안에는 액션 생성 함수 들어감
                        props.history.push('/');
                        // props.history.goBack();
                    }}>
                    삭제하기
                </Button>
                <Button onClick={() => {
                    dispatch(updateBucketFB(bucket_index));
                    props.history.goBack();
                }}>
                    일정완료
                </Button>
            </ButtonGroup>
            
            
        </div>
    );
};

export default Detail;