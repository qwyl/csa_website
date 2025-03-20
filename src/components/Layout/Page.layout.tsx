import React from "react"

const PageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] mx-20 mt-24 flex flex-col gap-10'>
            {children}
        </div>
    )
}

export default PageLayout
 
export const WidePageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] mx-20 mt-20 flex flex-col gap-10 [&>*:last-child]:mb-40'>
            {children}
        </div>
    )
}

export const FullWidthPageLayout = ({ children }: any) => {
    return (
        <div className='min-h-[90vh] flex flex-col gap-10'>
            {children}
        </div>
    )
}