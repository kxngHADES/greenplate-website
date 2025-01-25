import React from 'react'

const MagicButton = ({
  title, icon, position, handleClick, otherClasses}:{
  title: string;
  icon: React.ReactNode, position: string; handleClick?: () => void; otherClasses?:string;}

) => {
  return (
    <button className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 font-bold text-white tracking-wide transition-colors duration-200 ${otherClasses} hover:scale-110 hover:bg-[#21e065]`}>
        {/*{position === "left" && icon}*/}
        {title}
        {/*{position === "right" && icon}*/}
    </button>
  )
}

export default MagicButton


