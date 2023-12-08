import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-sm px-[7%] pt-16 text-zinc-500">
        <div className="text-white flex text-2xl w-32 justify-between mb-4">
          <i><FaFacebookF /></i>
          <i><FaInstagram /></i>
          <i><FaYoutube /></i>
        </div>
        <div className="flex flex-wrap">
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Audio Description</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Help Center</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Gift Cards</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Media Center</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Investor Relations</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Jobs</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Terms of Use</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Privacy</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Legal Notices</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Cookie Preferences</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Corporate Information</Link>
            <Link className="w-1/4 mb-4 block hover:underline" href='/'>Contact Us</Link>
        </div>

        <div>
          <button className="border-[2px] border-zinc-500 p-[5px]">Service Code</button>
          <p></p>
        </div>
    </footer>
  )
}
