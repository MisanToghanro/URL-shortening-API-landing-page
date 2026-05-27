import { useState } from "react"

const Header = () => {

    const navLinks = [
        {label:"Features" , path:"#"},
        {label:"Pricing" , path:"#"},
        {label:"Resources" , path:"#"}
    ]

    const [menu, setMenu] = useState(false);

    return (
        <header className="flex justify-between items-center py-8 px-6 md:px-20">
            {/*left section*/}
            <div className="flex gap-10 items-center">
            <img
            src="/assets/images/logo.svg"
            alt="shortly-logo"
             />

         {/*Desktop view */}
             <nav className="hidden md:block">
                <ul className="flex items-center text-sm gap-6 font-bold text-gray-500 ">
                   {navLinks.map((link, index) => {
                    return(
                        <li key={index} className="hover:text-gray-950">
                            <a href={link.path} >{link.label}</a>
                          </li>
                    )

                   })}
                </ul>
             </nav>

            </div>
            {/*right section*/}
            <div className="hidden md:flex items-center gap-6 font-bold text-gray-500"> 
                <button className="hover:text-gray-950">Login</button>

                <button className="bg-cyan rounded-full px-6 py-2 text-white hover:opacity-70">Sign Up</button>
            </div>

            {/*Mobile view*/}
    <div className="md:hidden relative ">
    <button className="font-bold text-8xl text-gray-500" onClick={() => (setMenu(!menu))}>
                    
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    </button>
               
            {menu && (
            <div className="absolute right-2 top-14 bg-purple w-[320px] rounded-xl p-8 text-white shadow-lg ">
            <nav >
                <ul className="flex flex-col items-center text-sm gap-6 font-bold ">
                   {navLinks.map((link, index) => {
                    return(
                        <li key={index}>
                            <a href={link.path} >{link.label}</a>
                          </li>
                    )

                   })}
                </ul>
             </nav>

         <div className="my-6 h-px bg-gray-500/30"></div>

          <div className="flex flex-col gap-4 font-bold )"> 
                <button >Login</button>

                <button className="bg-cyan rounded-full  py-3  hover:opacity-70">Sign Up</button>
            </div>

        </div>
                )}

            </div>

        </header>
    )
}

export default Header;