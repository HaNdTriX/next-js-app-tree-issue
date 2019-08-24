import React from 'react'
import ReactDOMServer from 'react-dom/server'

const IndexPage = (props) => {
  console.log('props.foo', props.foo)
  return (
    <div>Fooo</div>
  )
}

IndexPage.getInitialProps = ({ AppTree }) => {
  const props = {
    foo: 'bar'
  }

  console.log('RENDER INSIDE: getInitialProps')
  ReactDOMServer.renderToString(
    <AppTree {...props} />
  )

  console.log('RENDER OUTSIDE: getInitialProps')

  return props
}

export default IndexPage
