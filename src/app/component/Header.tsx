
const  Header = ()=>{
    return (
    <div className="layout-Header">
    <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-black">
    <a className="flex title-font font-extrabold items-center text-gray-900 mb-4 md:mb-0">
     
      <span className="ml-10 text-xl text-white">Hunting Coder</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-2xl justify-center">
      <a className="mr-20 hover:text-red-900">Home</a>
      <a className="mr-20 hover:text-red-900">Contacts</a>
      <a className="mr-20 hover:text-red-900">Profile</a>
      <a className="mr-20 hover:text-red-900">Service</a>
      <a className="mr-20 hover:text-red-900">About
      </a>
 
    </nav>
   
  </div>
</header></div>
    
    
    
    )
}
export default Header;