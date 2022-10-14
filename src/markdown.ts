export const defaultMarkdown: string = `# header
## Link:
[visit google](https://www.google.com)
### An Image:
![the react way to render a list](https://d3n0h9tb65y8q.cloudfront.net/public_assets/assets/000/002/336/original/What_are_keys_in_React.png?1640091613)
Inline Code:
example of some \`npm i -S react react-dom\` inline code
### Code Block
*Typescript Code Example*
\`\`\`javascript
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
\`\`\`

### List Item:
1. First item
2. Second item
3. Third item
4. Fourth item
### a Blockquote:
> Dorothy followed her through many of the beautiful rooms in her castle.
### bolded text:
Love**is**bold
  `
