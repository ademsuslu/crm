import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
<hr />
        <section className="mt-4 flex flex-col justify-center items-center w-full">
            <div className="flex flex-col md:flex-row justify-around items-center w-full">
                <Link className="ga_nav_link hsg-footer__app" href="/" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Download on the App Store">
                    <img className="homepage-mobile-footer-apple" src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/app%20store%20high%20res.png?width=136&amp;height=45&amp;name=app%20store%20high%20res.png" alt="Download on the App Store" width="136" height="45" loading="lazy"  sizes="(max-width: 136px) 100vw, 136px"/>
                </Link>
                <Link className="ga_nav_link hsg-footer__app" href="/" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Get it on Google Play">
                    <img className="homepage-mobile-footer-google" src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/google%20play%20high%20res.png?width=136&amp;height=45&amp;name=google%20play%20high%20res.png" alt="Get it on Google Play" width="136" height="45" loading="lazy"  sizes="(max-width: 136px) 100vw, 136px" />
                </Link>
            
            </div>
            <div className="flex flex-col items-center justify-center my-4 space-y-3">
           <h2 className='text-2xl'>CRM</h2>
            <p className='font-mono'>Copyright © 2024 CRM, Inc.</p>
            </div>
            <div className="hsg-footer__copyright">
            <ul className='flex  space-x-6'>
                <li>
                    <Link href="/" className="underline" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Legal Stuff">
                        Legal Stuff
                    </Link>
                </li>
               
                <li>
                    <Link href="/" className="underline" data-ga_nav_type="footer_nav" data-ga_nav_tree_text="Legal Stuff">
                    Privacy Policy
                    </Link>
                </li>
               
            </ul>
            </div>
        </section>


    </footer>
  )
}

export default Footer