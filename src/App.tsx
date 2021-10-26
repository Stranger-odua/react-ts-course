import React from 'react';
import Card, {CardVariant} from "./components/Card";


const App = () => {
  return (
    <div>
      <Card onClick={
        (num) => console.log('Click !', num)}
            width='200px'
            height='200px'
            variant={CardVariant.primary}>
        <button>Кнопка</button>
        <div>qqqq</div>
      </Card>
    </div>
  );
};

export default App;
