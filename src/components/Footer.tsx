import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="container mx-auto max-w-full px-4 sm:px-6 md:px-8 lg:px-20">
      {/* Footer Part 1 */}
      <div className="grid grid-cols-1 gap-8 border-t border-b border-gray-200 py-8 md:grid-cols-5 md:gap-10 md:pt-10 md:pb-10">
        {/* Brand */}
        <div className="text-center md:col-span-2 md:text-left">
          <img
            src={Logo}
            alt="Dev Stack logo"
            className="mx-auto w-32 md:mx-0 md:w-35"
          />

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600 md:mx-0 md:text-base">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <ul className="my-4 flex items-center justify-center gap-3 md:justify-start">
            <li className="nav-item">GitHub</li>
            <li className="text-gray-400 md:hidden">•</li>
            <li className="nav-item">Twitter</li>
            <li className="text-gray-400 md:hidden">•</li>
            <li className="nav-item">LinkedIn</li>
          </ul>
        </div>

        {/* Product */}
        <div className="hidden md:block">
          <h2 className="mb-1 text-[18px] font-bold">PRODUCT</h2>

          <ul className="flex flex-col gap-1 font-semibold">
            <li className="nav-item">Home</li>
            <li className="nav-item">Technologies</li>
            <li className="nav-item">Projects</li>
          </ul>
        </div>

        {/* Company */}
        <div className="hidden md:block">
          <h2 className="mb-1 text-[18px] font-bold">COMPANY</h2>

          <ul className="flex flex-col gap-1 font-semibold">
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">Careers</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="hidden md:block">
          <h2 className="mb-1 text-[18px] font-bold">LEGAL</h2>

          <ul className="flex flex-col gap-1 font-semibold">
            <li className="nav-item">Privacy Policy</li>
            <li className="nav-item">Terms of Services</li>
          </ul>
        </div>
      </div>

      {/* Footer Part 2 */}
      <div className="flex items-center justify-between gap-3 py-6 text-center ">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-4">
          <p className="font-semibold nav-item">Privacy</p>
          <p className="font-semibold text-gray-400 nav-item">Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
