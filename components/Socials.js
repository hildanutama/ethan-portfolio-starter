import Link from "next/link";
import {RiTwitterLine, RiInstagramLine, RiLinkedinLine} from 'react-icons/ri';

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://twitter.com/hanjar_utama'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiTwitterLine/>
    </Link>
    <Link href={'https://www.instagram.com/hanjarutama/'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/hildanutama/'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>
  </div>;
};

export default Socials;
