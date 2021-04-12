import React from 'react';

const Cat = (props) => {
    console.log(props.match);
    return (<div>내 고양이 이름은 {props.match.params.cat_name}이에요.</div>);
};

export default Cat;