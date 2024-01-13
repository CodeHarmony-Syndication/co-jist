import './App.css'
import { InputField } from './components/InputField/InputField.tsx';
import { InputFieldSize, InputFieldColor, InputFieldVariant } from './components/InputField/InputField.ts';

function App() {

  return (
    <>
      <InputField 
        size={InputFieldSize.Large}
        color={InputFieldColor.None}
        variant={InputFieldVariant.Bordered}
        type="text"
        placeholder="Placeholder text"
        isDisabled={false}
        label="Text label"
      />
    </>
  )
}

export default App
