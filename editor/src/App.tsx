import React from 'react';
import './App.css';
import ParamEditor from './Editor.tsx';

// Ваши реальные данные для params и model
const realParams = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string',
  },
];

const realModel = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
  ],
  colors: [
    {
      id: 1,
      name: 'Красный',
      code: '#FF0000',
    },
    {
      id: 2,
      name: 'Синий',
      code: '#0000FF',
    },
  ],
};

const App: React.FC = () => {
  return (
    <div className="App">
      <ParamEditor params={realParams} model={realModel} />
    </div>
  );
};

export default App;
