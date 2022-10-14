import React from 'react'
import Editor from './Editor'
import Preview from './Preview'
import './App.css'
import { useState } from 'react'
import { defaultMarkdown } from './markdown'

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown)

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value)
  }
  return (
    <div className="w-full text-center bg-blue py-20 min-h-screen">
      <h1 className="py-5 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Markdown Previewer
      </h1>
      <Editor handleMarkdown={(e) => handleChange(e)} markdown={markdown} />
      <Preview toPreview={markdown} />
    </div>
  )
}

export default App
