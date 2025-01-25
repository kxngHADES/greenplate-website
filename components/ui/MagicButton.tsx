import React from 'react'

const MagicButton = ({
  title, icon, position, handleClick, otherClasses}:{
  title: string;
  icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?:string;}

) => {
  return (
    <button className="inline-flex items-center gap-2 px-12 py-8 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-110 hover:bg-[#21e065] transition-colors duration-200">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
    </button>
  )
}

export default MagicButton


