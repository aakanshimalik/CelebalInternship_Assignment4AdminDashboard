import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";



const Stacked = ({ width, height }) => {
    const { currentMode } = useStateContext();
    const navigate = useNavigate();

    const handleBarClick = () =>{
        navigate('/Bar');
    }
return (
    

        <ChartComponent
            width={width}
            height={height}
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            pointClick={handleBarClick}
            legendSettings={{ background: 'white' }}
           
        >
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
   
);
};

export default Stacked;