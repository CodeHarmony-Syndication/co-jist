import './App.css';
import { Checkbox } from './components/Checkbox/Checkbox.tsx';

function App() {

  return (
    <>
      <Checkbox
        label="Remember me"
        checked={true}
      />
    </>
  )
}

export default App