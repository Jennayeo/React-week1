// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";

const BucketList = (props) => {
  const bucket_list = useSelector(state => state.bucket.list);
  console.log(bucket_list);
  // store에 있는값(=state)가지고옴
  // state에 버킷에있는 리스트를 저장
  // console.log(props);
  // const my_lists = props.bucket_list;
  
  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle className="list_item" key={index} 
          // 프로그래스바 색 변경
          color={list.completed? "orange":"aliceblue"}
          onClick={() => {
          props.history.push('/detail/'+index);
          }}>
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${props => props.color};
`;

export default BucketList;