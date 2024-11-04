
import AfterCrm from "@/components/shared/afterCrm"
import BetterGrow from "@/components/shared/BetterGrow"
import Hero from "@/components/shared/hero"
import Products from "@/components/shared/products"
import Solitions from "@/components/shared/solitions"
import Suponsores from "@/components/shared/sponsores"
import Whatscrm from "@/components/shared/whatscrm"




export default function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <Hero/>
      <Suponsores className="my-16"/> 
      <Whatscrm/>
      <div className="mt-6"></div>
      <Solitions/>
      <div className="mt-6"></div>
      <Products/>
      <div className="mt-6"></div>
      <AfterCrm/>
      <div className="mt-6"></div>
      <BetterGrow/>
      <div className="mt-6"></div>
     </div>
  )
}
