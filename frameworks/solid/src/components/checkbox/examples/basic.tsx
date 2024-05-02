import { CheckIcon } from 'lucide-solid'
import { Checkbox } from '../..'

export const Basic = () => (
  <Checkbox.Root>
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
)
