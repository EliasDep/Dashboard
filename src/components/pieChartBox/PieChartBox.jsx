import React from "react"
import './piechartbox.scss'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"


const data = [
    {name: "Mobile", value: 400, color: "#0088fe"},
    {name: "Desktop", value: 300, color: "#00c49f"},
    {name: "Laptop", value: 300, color: "#ffbb28"},
    {name: "Tablet", value: 200, color: "#ff8042"}
]


const PieChartBox = () => {

    return (

        <div className="pieChartBox">
            <h1>Leads by Source</h1>

            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip contentStyle={{background:"white", borderRadius:"5PX"}}/>
                        <Pie
                        data={data}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                        </Pie>
                        <Pie
                        data={data}
                        cx={420}
                        cy={200}
                        startAngle={180}
                        endAngle={0}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        >
                        {data.map((item) => (
                            <Cell key={item.name} fill={TextMetrics.color} />
                        ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className="options">
                {data.map ((item) => (

                    <div className="option" key={item.name}>

                        <div className="title">
                            <div className="dot" style={{backgroundColor: item.color}}></div>
                            <span>{item.name}</span>
                        </div>

                        <span>{item.value}</span>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox