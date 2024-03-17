import React from 'react'

interface TabProps {
  tab: any
  handleClick?: () => void
}

const Tab = ({
  tab,
  handleClick
}: TabProps) => {
  return (
    <div>Tab</div>
  )
}

export default Tab