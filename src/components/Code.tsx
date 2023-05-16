import { PropsWithChildren } from 'react';
import './Code.css'

interface Props {
  block?: boolean;
}

function Code({ block, children }: PropsWithChildren<Props>) {
  const classes = [ 'base' ]
  if (block) classes.push('block')
  return (
    <div className={classes.join(' ')}>{children}</div>
  )
}

export default Code