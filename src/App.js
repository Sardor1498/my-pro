import * as React from 'react'
import { AntLayout } from './components/Layout/Layout2'
// import 'antd/dist/antd.css';

const App = () => {

  const [hidden, setHidden] = React.useState(false)

  function Click() {
    if(hidden === true) {
      setHidden(false)
    }else{
      setHidden(true)
    }
  }
  return (
    <div className="App">
      <AntLayout Click={Click} hidden={hidden} />
      {/* <DynamicForm /> */}
    </div>
  );
}

export default App;
