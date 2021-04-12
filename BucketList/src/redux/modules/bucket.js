// bucket.js

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

// Initial State
const initialState = {
    list: ['영화관가기', '책 읽기', '코딩하기'],
};


// Action Creators
// 컴포넌트로 불러와야하니 export바로 붙여줌
export const loadBucket = (bucket) => {
    return {type:LOAD, bucket}; // 이미 기본값을 지정해줬기때문에 데이터를(bucket) 줄 필요없음, 아래와 모양새 맞추기위해 넣어줬음
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket}; // bucket이라는 텍스트를 받아서 던져줌
}

export const deleteBucket = (bucket) => {
    return {type: DELETE, bucket};
}
  

// Reducer
export default function reducer(state = initialState, action = {}){
    // 파라미터 두개 가져옴(state, action)
  switch (action.type) {
    // do reducer stuff
    // action.type = LOAD 또는 CREATE
    case "bucket/LOAD": {
        return state;
    }
    // LOAD는 그냥 데이터 가져오는거

    case "bucket/CREATE": {
        const new_bucket_list = [...state.list, action.bucket];
        // 새 배열 넣으려면 기존 배열 필요함: state.list
        // 새 텍스트는 action.bucket(위에서 정함)
        return {list: new_bucket_list};
        break;
    }
    // CREATE는 텍스트를 받아와서 새 배열을 만들고 딕셔너리 안에있는 리스트라는 키값에 그 새 새배열을 넣어줌

    case "bucket/DELETE": {
        // 디테일 페이지 index사용해서 삭제 구현
        // 새로운 리스트 만듦
        const bucket_list = state.list.filter((l, idx) => {
            // array filter를 사용해 받아온 인덱스와 똑같으면 리턴하지않고, 다르면 값을 리턴한다.
            // 첫번째 인자 l=배열의 하나하나, 두번째 인자 idx=인덱스값(배열의 순번)
            if(idx !== action.bucket){
                return l;
            }
        });
            return {list: bucket_list};
    }
    default:
        return state;
  }
}
