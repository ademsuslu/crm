
import AfterCrm from "@/components/shared/afterCrm"
import BetterGrow from "@/components/shared/BetterGrow"
import Charts from "@/components/shared/Charts"
import Footer from "@/components/shared/footer"
import Hero from "@/components/shared/hero"
import Prices from "@/components/shared/prices"
import Products from "@/components/shared/products"
import Solitions from "@/components/shared/solitions"
import Suponsores from "@/components/shared/sponsores"
import Whatscrm from "@/components/shared/whatscrm"

export default function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="mt-6"></div>
      <Hero/>
      <div className="mt-6"></div>
      <Suponsores/> 
      <div className="mt-6"></div>
      <Whatscrm/>
      <div className="mt-6"></div>
      <Solitions/>
      <div className="mt-6"></div>
      <Charts/>
      <div className="mt-6"></div>
      <Prices />
      <div className="mt-6"></div>
      <Products/>
      <div className="mt-6"></div>
      <AfterCrm/>
      <div className="mt-6"></div>
      <BetterGrow/>
      <div className="mt-6"></div>
     <Footer/>
      <div className="mt-3"></div>
     </div>
  )
}
