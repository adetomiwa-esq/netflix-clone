import Link from "next/link";

export default function Footer() {
  return (
    <footer>
        <div></div>
        <div className="flex flex-wrap">
            <Link className="w-1/4 block hover:underline" href='/'>Audio Description</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Help Center</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Gift Cards</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Media Center</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Investor Relations</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Jobs</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Terms of Use</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Privacy</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Legal Notices</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Cookie Preferences</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Corporate Information</Link>
            <Link className="w-1/4 block hover:underline" href='/'>Contact Us</Link>
        </div>
    </footer>
  )
}
