import React from 'react'
import { useSnapshot } from "valtio"

import state from "../store";

interface CustomButtonProps {
  type: string;
  title?: string;
  handleClick: () => void;
  customStyles?: string;
  textStyles?: string;
}

const CustomButton = ({
  type,
  title,
  handleClick,
  customStyles,
  textStyles
}: CustomButtonProps) => {
  const snap = useSnapshot(state);

  const generateStyles = (type: string) => {
    if (type === 'filled') {
      return {
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        color: '#F97316'
      }
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton