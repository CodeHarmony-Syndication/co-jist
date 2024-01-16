import './App.css';
import { InputFile } from './components/InputFile/InputFile.tsx';
import { InputFileSize, InputFileColor, InputFileVariant } from './components/InputFile/InputFile.ts';

function App() {

  return (
    <>
      <InputFile
        size={InputFileSize.Medium}
        color={InputFileColor.None}
        variant={InputFileVariant.Bordered}
        label="Pick a file"
      />
    </>
  )
}

export default App
