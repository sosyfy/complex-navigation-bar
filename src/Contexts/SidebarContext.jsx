import { createContext , useState } from "react";


const SidebarContext = createContext()

export function SidebarProvider({children}){
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar= ()=>{
      setIsOpen(isOpen => !isOpen)
  }

    return (
        <SidebarContext.Provider value={{isOpen, toggleSidebar}} >{children}</SidebarContext.Provider>
    )
}

export default SidebarContext ;