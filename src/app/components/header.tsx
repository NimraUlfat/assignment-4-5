import Link from "next/link"
export default function Header(){
    return(
        <header className="text-gray-600 body-font-bold">
            <div className="header">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <a className="flex title-font font-medium items-center text-grey-900 mb-4 md:mb-5">
    
      <span className="text-4xl font-bold dark:text-white">CultureQuest</span>
    </a>
    <nav className="md:ml-auto font-bold flex flex-wrap items-center text-base justify-center">
      <Link href={"/"}>
      <li className="mr-9 text-white">Home</li></Link>
      <Link href={"/about-us"}>
      <li className="mr-9 text-white">About us</li></Link>
      <Link href={"/contact-us"}>
      <li className="mr-9 text-white">Contact us</li></Link>
    </nav>
  </div>
  </div>
</header>
    )
}