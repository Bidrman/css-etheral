import React from 'react'

const Container = ({ className = 'container', children }) => {
    return <div className={className}>{children}</div>
}

export default Container
