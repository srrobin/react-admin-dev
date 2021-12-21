import "./chart.css";
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({title,grid,dataKey,data}) => {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data} >
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
               { grid && <CartesianGrid  strokeDasharray="3 3"/>}
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
