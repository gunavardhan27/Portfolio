import { useSelector } from "react-redux"
import store from "../store/Mode"
import { modeAction } from "../store/Mode"
export default function MButton(){
    const mode = useSelector(state=>state.data.toggle)
    const activate = ()=>{
        store.dispatch(modeAction.toggleButton())
      }
    return (
        <button className={`mx-6 fixed z-50 p-4 w-[80px] h-[80px] shadow-xl shadow-black rounded-full bg-white 
            dark:shadow-yellow-100 dark:bg-orange-800`} onClick={activate}>{mode?'Dark':'Light'}</button>
    )
}