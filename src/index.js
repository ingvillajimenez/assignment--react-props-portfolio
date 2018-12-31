import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {skills, eduList, jobsList} from './data/datasource';

ReactDOM.render(<App skills={skills} eduList={eduList} jobsList={jobsList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
