import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const test = React.createElement('div', {
    id: 'test-id',
    className: 'test-class',
    onClick: () => {
        alert('hello')
    }
}, <div>Hello</div>);

const onClick = () => {
    alert('hello from CustomButton')
};
const btnId = 'btn-test-id';

const CustomButton = (props) => {
    console.log(props);
    const {id, children} = props;

    return (
        <button onClick={onClick} id={id}>{children}</button>
    );
};


const testBtn = React.createElement(CustomButton, {id: 'test-btn-2'}, 'Press-me');

ReactDOM.render(
    <CustomButton id={btnId}>srf afeaw</CustomButton>,
    document.getElementById('root')
);


