import {FC, ReactNode} from 'react'

export type WrapperProps = {
  children?: ReactNode
}

const Wrapper: FC<WrapperProps> = props => {
  return <ul>{props.children}</ul>
}

export default Wrapper
