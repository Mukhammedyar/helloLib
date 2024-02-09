import React from 'react'

export default function Saved({item}) {
  return (
    <div>
    {item.saved ? (
  <i class="bx bxs-bookmark absolute bottom-0 right-0 shadow-md  text-lg p-1 px-2 bg-red-600 rounded-full text-red-200 hover:text-white ease-in transition-all"></i>
  ) : (
  ""
  )}
</div>
  )
}
