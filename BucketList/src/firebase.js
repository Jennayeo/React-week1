import firebase from "firebase/app";
import "firebase/firestore";
// 우린 파이어스토어 쓸거니까

const firebaseConfig = {
    // 대시보드에서 가져와야하는 config정보
    // config
        apiKey: "AIzaSyBaMpKlNN-t-E9uinf4IGWZCNIcjJDNxCI",
        authDomain: "test-0413-45f0c.firebaseapp.com",
        projectId: "test-0413-45f0c",
        storageBucket: "test-0413-45f0c.appspot.com",
        messagingSenderId: "995598540683",
        appId: "1:995598540683:web:527f801d1e560b5b32598e",
        measurementId: "G-Q0FDQZ65EX"
};

firebase.initializeApp(firebaseConfig);
// 파이어베이스컨피그 설정으로 앱 초기화

const firestore = firebase.firestore();
// firestore에 어떤 인스턴스가 있을건데 그 변수를 넣어두고 가져다씀

export {firestore};