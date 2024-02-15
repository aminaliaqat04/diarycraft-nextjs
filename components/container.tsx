import React from "react";

type ContainerProps = {
  children: React.ReactNode
}

export default function Container({children}: ContainerProps) {
  return (
    <div className="xl:w-[90%] mx-auto bg-white min-h-screen flex flex-col justify-between">
      {children}
    </div>
  )
}
