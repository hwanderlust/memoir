import React from 'react'

const Picture = ({ sizes, src, srcset, alt }) => {
  return (
    <img className="left__pic" sizes={sizes} src={src} srcset={srcset} alt={alt} />
  )
}

export default Picture;