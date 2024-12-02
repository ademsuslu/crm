
import AfterCrm from "@/components/shared/afterCrm"
import BetterGrow from "@/components/shared/BetterGrow"
import Charts from "@/components/shared/Charts"
import Hero from "@/components/shared/hero"
import Prices from "@/components/shared/prices"
import Products from "@/components/shared/products"
import Solitions from "@/components/shared/solitions"
import Suponsores from "@/components/shared/sponsores"
import Whatscrm from "@/components/shared/whatscrm"

export default async function Home() {
//  create a fetch for get
  const response = await fetch(`${process.env.NEXT_API_URL}/plans`,{cache:"no-store"})
  const data = await response.json()
  // render the home page with fetched data
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
      <Prices data={data} />
      <div className="mt-6"></div>
      <Products/>
      <div className="mt-6"></div>
      <AfterCrm/>
      <div className="mt-6"></div>
      <BetterGrow/>
  
     </div>
  )
}
