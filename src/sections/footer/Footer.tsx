import { Links } from "@/shared/data/links/links";
import { hrefLink } from "@/shared/data/links/types";

const Footer = () => {
  return (
    <footer className="w-full bg-terminal bg-no-repeat bg-cover text-white py-10">
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
        <nav className="flex gap-6 mb-4">
          <ul className="nav-ul">
            {Links.map((item: hrefLink) => {
              if (item.id === 3) return null;  // Skip if id is 3
              return (
                <li key={item.id} className="nav-li">
                  <a href={item.href} className="nav-li_a">
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-5">
        <a
    href="https://codepen.io/EricGro2000"
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/assets/codepen.png" alt="Codepen" className="w-6 h-6" />
  </a>
  <a
    href="https://github.com/ericgro2000"
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/assets/github.png" alt="Github" className="w-6 h-6" />
  </a>
        </div>
        <p className="text-white-500 text-sm mt-4">
            © {new Date().getFullYear()} Eric's Portfolio. All rights unreserved.
            <br />
            Furthermore, it's MIT and open-source! Check out my GitHub. 😎
            </p>
      </div>
    </footer>
  );
};

export default Footer;
