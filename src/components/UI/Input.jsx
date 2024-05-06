
export default function Input({ label, textArea, ...props }) {
  return (
    <>
      {textArea ?
        <textarea className={style} {...props} /> :
        <input className={style} {...props} />}
      <label className="">{label}</label>
    </>
  )
}
