
const Heading = ({className, title}) => {
  return (
    <div
    className={`${className} max-2-[50rem] mx-auto mb-12 lg:mb-20`}>
        {title && <h2 className="h2">{title}</h2>}
    </div>
  )
}

export default Heading
