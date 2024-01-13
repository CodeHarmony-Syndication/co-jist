import './App.css'
import { InputField } from './components/InputField/InputField.tsx';
import { InputFieldSize, InputFieldColor, InputFieldVariant } from './components/InputField/InputField.ts';

function App() {

  return (
    <>
      <InputField 
        size={InputFieldSize.Large}
        color={InputFieldColor.Secondary}
        variant={InputFieldVariant.Bordered}
        type="text"
        placeholder="Search..."
        labelText="Click on me"
      />
    </>
  )
}

export default App
