// bucket.js
import {firestore} from "../../firebase";

// 콜렉션을 전역변수로 만들어둠
// 파이어스토어에서 콜렉션을 갖고오는데 콜렉션 이름 "bucket"
const bucket_db = firestore.collection("bucket");

// Actions
const LOAD = "bucket/LOAD"; // initial state대신 불러옴
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
//일정완료
const UPDATE = "bucket/UPDATE";

// Initial State
const initialState = {
    list: [
        {text: "영화관가기", completed: false},
        {text: "책 읽기", completed: false},
        {text: "코딩하기", completed: false}
    ]
    // list: ['영화관가기', '책 읽기', '코딩하기'],
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

export const updateBucket = (bucket) => {
    return {type: UPDATE, bucket};
    // bucket엔 배열의 인덱스 넣어줄것임 // bucket 대신 index처럼 직관적인 값 넣어도됨
}
  
// 통신하는 함수
export const loadBucketFB = () => {
    // 파이어스토어에서 데이터 가져오기만 할거니까 변수 필요없음
    // dispatch, getState -> getState: 모듈에있는 스테이트값 가지고옴 하지만 여기선 불필요
    return function (dispatch) {
        // 통신한다 = 데이터 가져온다 (데이터 전부)
        bucket_db.get().then((docs) => {
            let bucket_data = [];
            // docs를 forEach돌려서 하나하나 넣어준다
            docs.forEach((doc) => {
                // if문 사용 doc에 있는지 없는지 판별
                if(doc.exists){
                    // bucke_data에 기존에 있던 데이터 다 넣어주고, doc에서 데이터 가져와준다.
                    // ...doc.data => doc에 있는 데이터 하나하나를 딕셔너리에 넣어줌
                    bucket_data = [...bucket_data, {id:doc.id, ...doc.data()}];
                }
            });

            console.log(bucket_data); // 첫페이지 들어가서 불러오려면 App.js와 연결해줘야 콘솔 찍힘
            // 리듀서는 액션에 디스패치됐을때 리듀서에서 처리하는 것이니
            // 리듀서 불러오기전에 디스패치 먼저 해줌
            dispatch(loadBucket(bucket_data));
            // dispatch(액션크리에이터)
        });
    };
};

// 추가하기
export const addBucketFB = (bucket) => {
    // bucket이라는 text 받아옴
    return function (dispatch){
        // completed는 처음이니까 false
        let bucket_data = {text: bucket, completed: false};

        // bucket_db에 bucket_data 추가
        bucket_db.add(bucket_data).then(docRef => {
            // 추가가됐다면 bucket_data에 id를 하나더 넣어서 실제로 리덕스에 저장
            bucket_data = {...bucket_data, id: docRef.id};
            // createBucket이라는 액션 디스패치
            // 버킷_data그대로 다 넘겨줌
            dispatch(createBucket(bucket_data));
        });
    };
};

// 수정하기(일정완료)
export const updateBucketFB = (bucket) => {
// 직관적으로하려면 bucket대신 index라고 해도좋음
    return function(dispatch, getState){
        // 수정되기전의 데이터를 담는 변수
        // getState = 리덕스 스토어에있는 어떤 state들을 가져다줌
        // bucket=index 이 리스트의 어떤 인덱스에있는 것을 가져온다
        const _bucket_data = getState().bucket.list[bucket];
        console.log(_bucket_data); // 기존에있는 데이터가왔는지 확인

        // update하려면 일단 update하기위한 데이터 만들어줘야한다. (어떻게 업데이트 해줄지)
        let bucket_data = {..._bucket_data, completed: true};
        // 업데이트하기전에 id줘야 딱 하나 지정해서 변경 가능
        //  수정이 완료되면 고칠거니까  .then

        // 아이디가 없다면 에러가 날테니 처음부터 리턴시켜줘서 파이어스토어에 요청 안한다.
        if(!bucket_data.id) {
            return;
        }

        bucket_db.doc(bucket_data.id).update(bucket_data).then(docRef => {
            dispatch(updateBucket(bucket));
            // bucket(=index)만 넣어주면 알아서 리듀서가 수정
        }).catch(error => {
            console.log(error);
    });
}
}
// 삭제하기
export const deleteBucketFB = (bucket) => {
    // 여기서 bucket도 index로 써도됨
    return function(dispatch, getState){
        // 버킷에있는 bucket번째있는 리스트 가져와라
        const _bucket_data = getState().bucket.list[bucket];
        
        // 아이디가 없다면 에러가 날테니 처음부터 리턴시켜줘서 파이어스토어에 요청 안한다.
        if(!_bucket_data.id) {
            return;
        }

        // bucket데이터의 아이디 가져와서 지정 후 delete
        // 그 다음(삭제 된 후)dispatch 
        bucket_db.doc(_bucket_data.id).delete().then(docRef => {
            dispatch(deleteBucket(bucket));
        // 삭제 중 오류가 나면 then이 아니라 catch로 빠져 아래를 실행
        }).catch(error => {
            console.log(error);
        });
    }
}

// Reducer
export default function reducer(state = initialState, action = {}){
    // 파라미터 두개 가져옴(state, action)
  switch (action.type) {
    // do reducer stuff
    // action.type = LOAD 또는 CREATE
    case "bucket/LOAD": {
        // 길이가 0 보다 클때만 리턴
        if(action.bucket.length > 0){
            return {list: action.bucket};
        }
        // 데이터 없을땐 initialstate그대로 보여줌
         return state;
    }
    // LOAD는 그냥 데이터 가져오는거

    case "bucket/CREATE": {
        const new_bucket_list = [
            ...state.list,
            //  {text: action.bucket, completed: false}];
            action.bucket, 
        ];
        // 새 배열 넣으려면 기존 배열 필요함: state.list
        // 새 텍스트는 action.bucket(위에서 정함)
        return {list: new_bucket_list};
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

    case "bucket/UPDATE": {
        const bucket_list = state.list.map((l, idx) => {

            if(idx === action.bucket){
                // 인덱스 값이 같다면 이 딕셔너리에서 completed만 true로 바꿔준다.
                return {...l, completed: true};
            } else{
                // 나머지는 그대로 리턴
                return l;}
        });
        // 리턴에 넣어줄만한 값을 만들어야한다. 변수명 bucket_list
        // 완료로 형태가 바뀐 리스트가 들어가야한다.
        // 기존 리스트를 맵돌려준다. 
        return {list:bucket_list};
        }
    default:
        return state;
  }
}
