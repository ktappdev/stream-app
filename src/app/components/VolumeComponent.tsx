
import * as React from "react"

import { Progress } from "@/components/ui/progress"
import { ImVolumeHigh } from "react-icons/im"

export default function VolumeComponent() {

  return (
    <div className="flex items-center justify-end gap-2">
      <p className="text-mytheme-greyText text-sm font-thin ">3:30 / 4:20</p>
      <ImVolumeHigh />
      <Progress value={70} className="w-36" />
    </div>

  )
}

