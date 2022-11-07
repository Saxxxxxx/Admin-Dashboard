import React from "react";
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PyramidSeries,
  AccumulationLegend,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import { PyramidData } from "../../data/dummy";

const Pyramid = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Food Calories" />
      <div className="w-full">
        <AccumulationChartComponent
          title="Pyramid Chart Food Calories"
          legendSettings={{ position: "Bottom" }}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[
              PyramidSeries,
              AccumulationDataLabel,
              AccumulationLegend,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              type="Pyramid"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              dataLabel={{ visible: true, name: "text" }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;
