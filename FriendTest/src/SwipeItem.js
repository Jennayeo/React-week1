// import React from "react";
// import styled from "styled-components";
// import img from "./jenna_mimoticon.png";

// const SwipeItem = React.memo(({onSwipe}) => {

//     const swipe_div = React.useRef(null);
//     React.useEffect(() => {
//         const reset = () => {

//         }

//         const touchSTart = () => {

//         }

//         const touchEnd = () => {

//         }

//         const touchMove = () => {

//         }
        
//         const touchCancel = () => {

//         }

//         swipe_div.current.addEventListener("touchstart", touchStart);
//         swipe_div.current.addEventListener("touchmove", touchMove);
//         swipe_div.current.addEventListener("touchend", touchEnd);
//         swipe_div.current.addEventListener("touchcancel", touchCancel);

//         return () => {
//             if(!swipe_div.current) {
//                 return;
//             }
//         }

//     }, []);
//     return (
//         <DragItem>
//             <img src={img}/>
//         </DragItem>
//     )

// });

// const DragItem = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100vw;
//     height: 100vh;
//     // z-ndex: 10;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     & > div {
//         background-color: #ffd6aa;
//         border-radius: 500px;
//     }
//     & img{
//         max-width: 150px;
//     }
// `;

// // 스와이프 없을때 에러방지
// SwipeItem.default.props = {
//     onSweip: () => {},
// }

// export default SwipeItem;