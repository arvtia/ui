

export function Normal () {
   return(
      <>
         <BendoGridEg>
            <Card11>Hy</Card11>
            <Card12>Ho</Card12>
         </BendoGridEg>
      </>
   )
}


export function BendoGridEg( children) {
   return (
      <>
         <div className="grid grid-cols-1 md:cols-2 lg:cols-3 grid-rows-7 ">
            {children}
         </div>
      </>  
   )
}

export function Card11 ( className , children){
   return(
      <>
         <div className={`w-full bg-neutral-100 ${className}`}>
            <h1 className="text-center items-center text-neutral-900 ">{children}</h1>
         </div>
      </>
   )
}

export function Card12 ( className , children){
   return(
      <>
         <div className={`w-full bg-neutral-200 ${className}`}>
            <h1 className="text-center items-center text-neutral-900 ">{children}</h1>
         </div>
      </>
   )
}

export function Card13 ( className , children){
   return(
      <>
         <div className={`w-full bg-neutral-300 ${className}`}>
            <h1 className="text-center items-center text-neutral-900 ">{children}</h1>
         </div>
      </>
   )
}

export function Card14 ( className , children){
   return(
      <>
         <div className={`w-full bg-neutral-400 ${className}`}>
            <h1 className="text-center items-center text-neutral-900 ">{children}</h1>
         </div>
      </>
   )
}

export function Card15 ( className , children){
   return(
      <>
         <div className={`w-full bg-neutral-500 ${className}`}>
            <h1 className="text-center items-center text-neutral-900 ">{children}</h1>
         </div>
      </>
   )
}

export function Card16 ( className , children){
   return(
      <>
         <div className={`w-full bg-neutral-600 ${className}`}>
            <h1 className="text-center items-center text-neutral-900 ">{children}</h1>
         </div>
      </>
   )
}



