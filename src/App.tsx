import './App.css';
import { Checkbox } from './components/Checkbox/Checkbox.tsx';
import { CheckboxSize, CheckboxColor } from './components/Checkbox/Checkbox.ts';

function App() {

  return (
    <>
      <Checkbox
        size={CheckboxSize.Large}
        color={CheckboxColor.None}
        label="Remember me"
        checked={false}
      />
    </>
  )
}

export default App