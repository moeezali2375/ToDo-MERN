import logo from "../assets/logo.svg";

const Header = ({children,theme,setTheme}) => {
    return (
        <header>
            <span className="logo">
                <img src={logo} alt="" />
                <span>{children}</span>
            </span>
            <span className="themeSelector">
                <span onClick={()=>setTheme('light')} className={theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={()=>setTheme('medium')} className={theme === "medium" ? "medium activeTheme" : "medium"} ></span>
                <span onClick={()=>setTheme('dark')} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={()=>setTheme('gradientOne')} className={theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"} ></span>
                <span onClick={()=>setTheme('gradientTwo')} className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"} ></span>
                <span onClick={()=>setTheme('gradientThree')} className={theme === "gradientThree" ? "gradientThree activeTheme" : "gradientThree"}></span>
            </span>
        </header>
    )
}

export default Header;