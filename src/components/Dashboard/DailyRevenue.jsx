import React from 'react'
import Card from '../Card'
import { CircleDollarSign } from 'lucide-react'

function DailyRevenue() {
  return (
    <Card>
      <div className='flex items-center justify-between mb-2 text-gray-400 '>
        <h4 className=" text-lg font-semibold">Kunlik tushum</h4>
        <CircleDollarSign />
      </div>
      <p className="text-4xl text-white font-medium">$120.3</p>
    </Card>
  )
}

export default DailyRevenue