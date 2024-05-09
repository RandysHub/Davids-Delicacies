
export default function Input({ id, style = '', label, textArea, ...props }) {
  return (
    <p className="control">
      <label htmlFor={id} className="">{label}</label>
      {textArea ?
        <textarea id={id} className={style} {...props} /> :
        <input id={id} name={id} className={style} required {...props} />}
    </p>
  )
}
