import React from 'react'

const Dummy = () => {
  return (
    <div>
        <style jsx global>{
            `
                .dummy{background:yellow}
            `
        }</style>
      <span className='dummy'>Dummy</span>
    </div>
  )
}

export default Dummy
