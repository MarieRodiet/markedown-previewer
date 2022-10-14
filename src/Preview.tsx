//@ts-ignore
// import { marked } from 'https://cdn.skypack.dev/marked@4.0.0'

type PreviewProps = {
  toPreview: string
}

export default function Preview({ toPreview }: PreviewProps) {
  window.marked.setOptions({ renderer: new window.marked.Renderer(), breaks: true, sanitize: true })
  let html = window.marked.parse(toPreview)

  return (
    <section
      className="
      flow-root
      bg-lightBlue
      rounded block
      m-10
      p-4
      flex 
      justify-center
      minHeight"
      id="preview"
      dangerouslySetInnerHTML={{ __html: html }}
    ></section>
  )
}
