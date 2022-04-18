import './App.css';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-red-300">Salom gruppa</h1>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
    </div>
  );
}

export default App;
