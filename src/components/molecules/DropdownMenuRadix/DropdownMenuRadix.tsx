import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'src/components/atoms/Link'

export interface IDropdownMenuRadixProps {}

const DropdownMenuRadix = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>Hello</DropdownMenu.Trigger>

    <DropdownMenu.Content>
      <Link href='/'>Hello</Link>
      <Link href='/'>Hello</Link>
      <DropdownMenu.Label />
      <DropdownMenu.Item />

      <DropdownMenu.Group>
        <DropdownMenu.Item />
      </DropdownMenu.Group>

      <DropdownMenu.CheckboxItem>
        <DropdownMenu.ItemIndicator />
      </DropdownMenu.CheckboxItem>

      <DropdownMenu.RadioGroup>
        <DropdownMenu.RadioItem value='34'>
          <DropdownMenu.ItemIndicator />
        </DropdownMenu.RadioItem>
      </DropdownMenu.RadioGroup>

      <DropdownMenu.Root>
        <DropdownMenu.TriggerItem />
        <DropdownMenu.Content />
      </DropdownMenu.Root>

      <DropdownMenu.Separator />
      <DropdownMenu.Arrow />
    </DropdownMenu.Content>
  </DropdownMenu.Root>
)

export default DropdownMenuRadix
