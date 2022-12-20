import { Fragment, useState } from 'react';
import { Header } from './components/Header';
import { PatientList } from './components/PatientList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Header />
      <PatientList />
    </Fragment>
  );
}

export default App;
