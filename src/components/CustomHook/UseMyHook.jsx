import {useEffect}from 'react'

const UseMyHook=(number)=> {
    useEffect(() => {
        console.log("I am 1st")
        if(number => 1 ){
          document.title = `Chats (${number})`
        }
        else{
         document.title = "Chats "
 
        }
      },[number])
}
export default UseMyHook;