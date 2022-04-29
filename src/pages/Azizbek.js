import React from "react"
import { Input } from 'antd';

const Azizbek = () => {

    const data = [
        {
            name: "name",
            label: "Ismingizni kiriting",
            type: "text",
        },
        {
            name: "email",
            label: "E-mailni kiriting",
            type: "email",
            required: true,
        },
        {
            name: "age",
            label: "Yoshingizni kiriting",
            type: "text",
        },
        {
            name: "username",
            label: "Familiyangizni kiriting",
            type: "text",
        },
        {
            name: "sex",
            label: "Jinsingizni kiriting",
            type: "text",
        },
        
    ]

    return (
        <div>
            <div>
                {
                    data.map((data, i) => (
                        <div>
                            <div>{data.name}</div>
                            <Input required={data.required} placeholder={data.label} type={data.type} style={{ fontSize: 16, color: '#1890ff', width: 600, }} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Azizbek