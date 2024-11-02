import { Globe } from "@/components/shared/globe"
import {sampleArcs} from "@/data/sampleArcs"

import React from 'react'

const MissionPage = () => {
  return (
    <div>
       <Globe data={sampleArcs}  />
    </div>
  )
}

export default MissionPage