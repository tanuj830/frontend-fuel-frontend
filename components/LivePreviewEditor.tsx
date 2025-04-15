import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';


const LivePreviewEditor = () => {
  return (
    <div>
      <LiveProvider code={`<button onClick={() => alert('Hi!')}>Click</button>`}>
  <LiveEditor />
  <LiveError />
  <LivePreview />
</LiveProvider>

    </div>
  )
}

export default LivePreviewEditor
