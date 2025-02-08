import React from 'react'
import Image from 'next/image'

const FooterSecond = () => {
  return (
    <div><div className="bg-green-600 border-t border-gray-700  mb-0 pt-6 flex flex-wrap justify-between items-center w-full px-4 py-4 absolute bottom-0 left-0">
    <p className="text-center w-full md:w-auto mb-4 md:mb-0 md:text-left">Copyright © 2022 pocofood. All Rights Reserved.</p>
    <div className="flex space-x-4">
      {["dzHrpa_ZiDcn8G5Oxwl1XdQhinJ3MUQNq3bUrCyCaKI", "u7PnzOToIbtzLD8FlH31e-JmW5-A19P-da7Gd2cqeBE", "SF8WnTXknqpKnfstgwwdjt16Aeeb0UPxvP_P1Fx7y68", "FHyQFs3oAjBpS1VFaEUeCn7-R6aRrqXbFt4xMI9mgtY", "XApUyI0i7XQfDVsbJQCP9B6BhPixkqiLFjZ2q4NsuDg", "M7OUVq68xveEJG82veAk-hUGeV48y-KDO8sPO-pWxgU"].map((id) => (
        <Image key={id} src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`} alt="Payment logo" width={50} height={30} className="h-8" />
      ))}
    </div>
  </div></div>
  )
}

export default FooterSecond