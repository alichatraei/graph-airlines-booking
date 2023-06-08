import { ReactElement, useLayoutEffect, useState } from 'react'
import IReactPortalProps from './interfaces/IReactPortalProps'
import { createPortal } from 'react-dom'
import { createWrapperAndAppendToBody } from '@utils/utils'

const ReactPortal = ({
  wrapperId = 'react-portal-wrapper',
  children,
}: IReactPortalProps): ReactElement | null => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)
  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId)
    }
    setWrapperElement(element)
  }, [wrapperId])

  // wrapperElement state will be null on the very first render.
  if (!wrapperElement) return null

  return createPortal(children, wrapperElement)
}

export default ReactPortal
