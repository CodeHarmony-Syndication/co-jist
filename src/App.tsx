import './App.css'
import { InputField } from './components/InputField/InputField.tsx';
import { InputFieldColor, InputFieldSize, InputFieldVariant } from './components/InputField/InputField.ts';

function App() {

  return (
    <>
      <InputField 
        size={InputFieldSize.Large}
        variant={InputFieldVariant.Default}
        color={InputFieldColor.Secondary}
        type="text"
        placeholder="Search..."
      />
    </>
  )
}

export default App
