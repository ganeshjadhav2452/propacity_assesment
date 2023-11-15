import { createContext, useState } from "react";

const ContentCategoryContext = createContext()






const ContentCategoryContextProvider = ({ children }) => {
    const [currentContent, setCurrentContent] = useState([])
    return (
        <ContentCategoryContext.Provider value={{ currentContent, setCurrentContent }}>{children}</ContentCategoryContext.Provider>
    )
}

export { ContentCategoryContextProvider }
export default ContentCategoryContext
