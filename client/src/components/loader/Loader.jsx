import { useContext } from "react"
import { Context } from "../../main"


const Loader = () => {
    const {loadding} = useContext(Context)
  return (<>
    {
        loadding && (  <div className="w-full h-full fixed top-0 left-0 z-[99999]  bg-[#70707068] ">
        <div className="w-full h-full flex items-center justify-center">

        <span className="w-32 h-32 animate-spin border-t-[6px] border-r-[3px] rounded-full"></span>
        </div>
    </div>)
    }</>
  
  )
}

export default Loader