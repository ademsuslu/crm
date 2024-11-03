
import Hero from "@/components/shared/hero"
import Suponsores from "@/components/shared/sponsores"
import Whatscrm from "@/components/shared/whatscrm"




export default function Home() {
  return (
    <div className="flex flex-col space-y-6">
      <Hero/>
      <Suponsores className="my-16"/> 
      <Whatscrm/>
      <div className="mt-6"></div>
     </div>
  )
}
