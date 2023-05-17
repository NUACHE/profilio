import * as React from 'react';


const Layout = ({children, className=""}:{children:any, className:string}) => {
    return ( <div className={`w-full h-full inline-block z-0  p-32 ${className}`}>{children}</div> );
}
 
export default Layout;