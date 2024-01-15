import { CheckboxProps } from './Checkbox';

const Checkbox = ({
  checked
}:CheckboxProps) => {

  return (
    <input type="checkbox" checked={checked} className="checkbox" />
  )
}

export default Checkbox