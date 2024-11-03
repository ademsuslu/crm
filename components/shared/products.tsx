import { projects } from "@/data/projects";
import { HoverEffect } from "../ui/card-hover-effect";

 const Products =() =>{
  
    return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export default Products
