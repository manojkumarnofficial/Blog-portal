import { Footer, FooterCopyright, FooterDivider } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

export default function footer() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 ">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Macy's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>       
                <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href="http://dazzsoftwaresolutions.netlify.app"
                        target="_blank"
                        rel="noopener noreference"
                    >
                        Dazz Solutions
                    </Footer.Link>
                    <Footer.Link
                        href="/about"
                        target="_blank"
                        rel="noopener noreference"
                    >
                        Macy's Blog
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>       
                <Footer.Title title="Follow us"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href="https://github.com/manojkumarnofficial"
                        target="_blank"
                        rel="noopener noreference"
                    >
                        GitHub
                    </Footer.Link>
                    <Footer.Link
                        href="#"
                    >
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>       
                <Footer.Title title="Legal"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href="#"
                    >
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                        href="#"
                    >
                        Terms & Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
          </div>
        </div>  
        <FooterDivider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Macy's blog" year={new Date().getFullYear()}
            />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook}/>
                <Footer.Icon href="#" icon={BsInstagram}/>
                <Footer.Icon href="#" icon={BsTwitter}/>
                <Footer.Icon href="https://github.com/manojkumarnofficial" icon={BsGithub}/>
                <Footer.Icon href="#" icon={BsLinkedin}/>
            </div>
        </div>
      </div>
    </Footer>
  );
}
