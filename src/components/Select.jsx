import React , {useId} from "react";

function Select({
    options,
    label,
    className="",
    ...props
},ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1" htmlFor={id}>{label}</label>
            )}
            <select id={id} ref={ref} className={`w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 duration-200${className}`} {...props}>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
export default React.forwardRef(Select)