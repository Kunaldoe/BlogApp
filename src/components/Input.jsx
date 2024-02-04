import React , {useID} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type='text', 
    className="", 
    ...props}, 
    ref) {
    const id = useID()
    return (
        <div className="w-full">
        {label &&(
                <label className="inline-block mb-1 pl-1" htmlFor={id}>{label}</label>
        )} 
        <input type={type} id={id} ref={ref} className={`w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 duration-200${className}`} {...props} />
        </div>
    )
})

export default Input
