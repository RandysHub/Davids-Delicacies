
export default function Input({ style = '', label, textArea, ...props }) {
  return (
    <p className="control">
      <label className="">{label}</label>
      {textArea ?
        <textarea className={style} {...props} /> :
        <input className={style} {...props} />}
    </p>
  )
}
