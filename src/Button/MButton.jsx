import { useSelector } from "react-redux"
import store from "../store/Mode"
import { modeAction } from "../store/Mode"
export default function MButton(){
    const mode = useSelector(state=>state.data.toggle)
    const activate = ()=>{
        store.dispatch(modeAction.toggleButton())
      }
    return (
        <button className={`mx-6 fixed z-50 p-4 rounded-full ${ mode?'dark:bg-white': 'bg-orange-400'}`} onClick={activate}>{mode?'Dark':'Light'}</button>
    )
}