

const Footer = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:gap-4 tracking-widest gap-4 bg-[#0c1120]/95 leading-loose text-white px-2">
      <div className="flex flex-col">
        <span>Jojmo</span>
        <small>A Jojmo Limited Company Service · Accra, Ghana</small>
        <span>&copy; {new Date().getFullYear()} Jojmo Transport Services.</span>
        <span>All rights reserved.</span>
        <span>
          Contact support at <pre>support@jojmoltdco.com</pre>
        </span>
      </div>
      
      <hr className="text-white md:hidden" />
      <div>
        <h4 className="underline">Site Map</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
