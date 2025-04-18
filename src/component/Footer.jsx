import { Link } from "react-router";

function Footer() {
  return (
    <footer className="text-center bg-neutral-600/35 text-neutral-400 py-2">
      <div className="flex items-center justify-center gap-4">
        <Link to="/">About</Link>
        <span>|</span>
        <Link to="/">Contact</Link>
      </div>
      <p className="text-sm">&#169; All rights reserved</p>
    </footer>
  );
}

export default Footer;
