import React, { useState } from "react";
import DynamicForm from "../components/DynamicForm";
import { LoginFields } from "../fields/fields";
 
const Login = () => {
  const [disabled, setDisabled] = useState(true);


  return (
    <div>
            <DynamicForm disabled={disabled}  fields={LoginFields} />
        
    </div>
  )
}
export default Login