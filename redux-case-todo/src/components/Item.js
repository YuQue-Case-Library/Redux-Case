import React from 'react';
import './index.css';

export default ({item: { id, text, completed }, onRemove, onChangeStatus }) => (
  <li className="item">
    <span onClick={() => onChangeStatus(id)} style={{textDecoration: completed ? 'line-through' : ''}}>{text}</span>
    <span className="close" onClick={() => onRemove(id)}>x</span>
  </li>
);