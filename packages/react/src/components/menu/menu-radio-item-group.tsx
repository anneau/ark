import { mergeProps } from '@zag-js/react'
import { forwardRef, useId } from 'react'
import type { Assign, Optional } from '../../types'
import { createSplitProps } from '../../utils/create-split-props'
import { type HTMLArkProps, ark } from '../factory'
import { useMenuContext } from './use-menu-context'
import { MenuItemGroupProvider, type UseMenuItemGroupContext } from './use-menu-item-group-context'

type OptionalUseMenuItemGroupContext = Optional<UseMenuItemGroupContext, 'id'>

export interface MenuRadioItemGroupProps
  extends Assign<HTMLArkProps<'div'>, OptionalUseMenuItemGroupContext> {}

export const MenuRadioItemGroup = forwardRef<HTMLDivElement, MenuRadioItemGroupProps>(
  (props, ref) => {
    const [optionalItemGroupProps, localProps] =
      createSplitProps<OptionalUseMenuItemGroupContext>()(props, ['id', 'onValueChange', 'value'])
    const menu = useMenuContext()
    const id = useId()
    const itemGroupProps = { id, ...optionalItemGroupProps }
    const mergedProps = mergeProps(menu.getItemGroupProps({ id: itemGroupProps.id }), localProps)

    return (
      <MenuItemGroupProvider value={itemGroupProps}>
        <ark.div {...mergedProps} ref={ref} />
      </MenuItemGroupProvider>
    )
  },
)

MenuRadioItemGroup.displayName = 'MenuRadioItemGroup'
