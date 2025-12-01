import { createContext, useContext } from "react";

export const EmojiContext = createContext()

// export const EmojiProvider = ({value,children})=>{
//     <EmojiContext.Provider value={value}>{children}</EmojiContext.Provider>
// }

// export const useEmoji = ()=>useContext(EmojiContext)