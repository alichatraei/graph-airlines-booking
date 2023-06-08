import { ReactElement } from 'react'
import IDialogProps from './interfaces/IDialogProps'
import ReactPortal from '@components/ReactPortal/Portal'

const Dialog = ({
  id = 'modal',
  className = '',
  children,
}: IDialogProps): ReactElement => {
  return (
    <ReactPortal>
      <div
        id={id}
        className={`modal modal-bottom sm:modal-middle  ${className}`}
      >
        <div className="modal-box">{children}</div>
      </div>
    </ReactPortal>
  )
}

export default Dialog
