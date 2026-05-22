
const Footer = () => {

    const footerLinks = [
        {
            title: "Features",
            links:["Link Shortening", "Branded Links", " Analytics"]
        },
        {
            title:"Resources",
            links:["Blog", "Developers", "Support"]
        },
        {
            title:"Company",
            links:[" About","Our Team", "Careers", "Contact"]
        }
    ]
const socialLogos = [
  {
    name: "Facebook",
    src: "/assets/images/icon-facebook.svg",
    path: "#",
  },
  {
    name: "Twitter",
    src: "/assets/images/icon-twitter.svg",
    path: "#",
  },
  {
    name: "Pinterest",
    src: "/assets/images/icon-pinterest.svg",
    path: "#",
  },
  {
    name: "Instagram",
    src: "/assets/images/icon-instagram.svg",
    path: "#",
  },
];
    return (
        <footer className="bg-(--clr-gray-950) text-white py-16">
            <div className="flex  flex-col md:flex-row items-center gap-12 md:justify-between md:items-start mx-auto container">
                <img src="/assets/images/logo.svg" alt="shorlty-logo"  className="brightness-0 invert"/>

                {/*Footer Links*/}
                <div className="flex flex-col md:flex-row gap-10 text-center md:text-left">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="mb-4 font-bold">{section.title}</h3>

                            <ul className="space-y-3 text-sm text-gray-500">
                                 {section.links.map((link, indx) => (
                                    <li key={indx} href="#" className="transition hover:text-(--clr-cyan)">
                                        <a >{link}</a>
                                    </li>
                                 ))}
                            </ul>

                        </div>
                    ))}
                </div>

                {/*Social Links*/}
                <div className="flex items-center gap-6">
                   {socialLogos.map((logo, index) => (
                    
                    <a key={index} href={logo.path} aria-label={logo.name} className="transition hover:opacity-70">
                         <img src={logo.src} alt={logo.name}/>
                    </a>
                ))}
                </div>
            </div>

        </footer>
    )
}
export default Footer;