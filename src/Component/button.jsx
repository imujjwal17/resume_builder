const Button = ({title}) => {
  return (
    <div >
       <button className="flex flex-col justify-center bg-blue-400 w-fit p-3 rounded-xl hover:bg-blue-600 text-white space-x-4 ">{title}</button>
    </div>
  )
}

export default Button;
