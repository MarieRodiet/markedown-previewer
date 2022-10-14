type EditorProps = {
  markdown: string
  handleMarkdown: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}
export default function Editor({ handleMarkdown, markdown }: EditorProps) {
  return (
    <form>
      <div className="flex justify-center overscroll-auto w-full">
        <div className="m-10 p-15 w-full">
          <label htmlFor="editor" className="form-label inline-block mb-2 text-white text-lg">
            Write your Markdown
          </label>
          <textarea
            id="editor"
            name="editor"
            onChange={(e) => handleMarkdown(e)}
            value={markdown}
            className="
        form-control
        block
        w-full
        text-l
        font-normal
        text-gray-700
        bg-white 
        border border-solid border-gray-300
        rounded
        p-4
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            rows={10}
          ></textarea>
        </div>
      </div>
    </form>
  )
}
