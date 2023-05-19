import * as React from 'react';


const Lout = ({children, className=""}:{children:any, className:string}) => {
    return ( <div className={`w-full h-full inline-block z-0  p-32 dark:bg-dark ${className}`}>{children}</div> );
}
 
export default Lout;