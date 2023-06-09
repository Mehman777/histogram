import React, { Component } from 'react';
import { AgChartsReact } from 'ag-charts-react';
// Index of the default selection
const defaultSelectionIndex = 26;
class HistogramChart extends Component {
    processRenderer = (params) => {
        alert(555)
        const { datum, fill } = params;
        const isSelected = datum.category === 'B'; // Example: Selecting 'B' category
        const barFill = isSelected ? 'yellow' : fill;
        return { fill: barFill };
    };

    constructor(props) {

        super(props);
        this.chartRef = React.createRef();
        this.defaultSelectionIndex = "6-15.2";
        this.state = {

            selectedColumn: null,
            searchParams:{
                description:[]
            },
            options: {

                title: {
                    text: 'Number of People',
                },
                subtitle: {
                    text: '(click a column for details)',
                },
                data: [
                    { month: '2.7-4.5', units: 1552},
                    { month: '4.5-6', units: 26},
                    { month: '6-15.2', units: 422 },
                    { month: '15.2-25-5', units: 582 },
                    { month: '25.5-48.9', units: 1},
                    { month: '48.9-59.9', units: 0 },
                    { month: '59.9-78.2', units: 188},
                    { month: '78.2-80', units: 14},
                    { month: '1.7-4.5', units: 482},
                    { month: '3.5-6', units: 27 },
                    { month: '5-15.2', units: 428 },
                    { month: '14.2-25-5', units: 145},
                    { month: '24.5-48.9', units: 102},
                    { month: '58.9-78.2', units: 255},
                    { month: '47.9-59.9', units: 11},
                    { month: '77.2-80', units: 26 },
                    { month: '0.7-4.5', units: 1552 },
                    { month: '4.4-6', units: 526 },
                    { month: '6.1-15.2', units: 1422 },
                    { month: '15.9-25-5', units: 1582 },
                    { month: '25.8-48.9', units: 51 },
                    { month: '48.91-59.9', units: 110},
                    { month: '59.91-78.2', units: 1188 },
                    { month: '78.22-80', units: 114 },
                    { month: '1.71-4.5', units: 541},
                    { month: '3.51-6', units: 927 },
                    { month: '5-15.22', units: 528 },
                    { month: '14.21-25-5', units: 245},
                    { month: '24.56-48.9', units: 1102 },
                    { month: '47.91-59.9', units: 1851 },
                    { month: '58.91-78.2', units: 1255 },
                    { month: '77.27-80', units: 826 },

                    { month: '2.78-4.5', units: 1552 },
                    { month: '48.5-6', units: 26 },
                    { month: '68-15.2', units: 422 },
                    { month: '15.28-25-5', units: 582 },
                    { month: '258.5-48.9', units: 1},
                    { month: '59.98-78.2', units: 188 },
                    { month: '78.28-80', units: 14},
                    { month: '1.78-4.5', units: 1450 },
                    { month: '3.58-6', units: 27 },
                    { month: '5-158.2', units: 428 },
                    { month: '14.28-25-5', units: 145},
                    { month: '24.58-48.9', units: 102 },
                    { month: '47.98-59.9', units: 11},
                    { month: '58.98-78.2', units: 255 },
                    { month: '77.28-80', units: 26 },
                    { month: '0.78-4.5', units: 1552 },
                    { month: '4.48-6', units: 526 },
                    { month: '6.18-15.2', units: 1422 },
                    { month: '15.98-25-5', units: 1582},
                    { month: '25.88-48.9', units: 51 },
                    { month: '48.918-59.9', units: 110},
                    { month: '59.918-78.2', units: 1188 },
                    { month: '788.22-80', units: 114 },
                    { month: '1.718-4.5', units: 1407 },
                    { month: '3.518-6', units: 927 },
                    { month: '5-158.22', units: 528},
                    { month: '14.218-25-5', units: 245 },
                    { month: '24.568-48.9', units: 1102 },
                    { month: '47.918-59.9', units: 1511},
                    { month: '58.918-78.2', units: 1255},
                    { month: '77.27-880', units: 826 },

                    { month: '2.70-,.5', units: 2556 },
                    { month: ',.50-6', units: 26 },
                    { month: '6-150.2', units: 522 },
                    { month: '15.20-25-5', units: 582},
                    { month: '25.50-,8.9', units: 1},
                    { month: ',8.90-59.9', units: 0 },
                    { month: '59.9-078.2', units: 188},
                    { month: '78.2-800', units: 14 },
                    { month: '1.7-,.05', units: 1500 },
                    { month: '3.5-60', units: 27 },
                    { month: '5-15.20', units: 428 },
                    { month: '1,.2-205-5', units: 145},
                    { month: '2,.5-,80.9', units: 102 },
                    { month: ',7.9-590.9', units: 11 },
                    { month: '58.9-780.2', units: 255 },
                    { month: '77.2-800', units: 26 },
                    { month: '0.7-,.50', units: 1552 },
                    { month: ',.,-60', units: 526},
                    { month: '6.1-150.2', units: 1422 },
                    { month: '15.9-250-5', units: 1582},
                    { month: '25.8-,8.09', units: 51 },
                    { month: ',8.91-59.09', units: 110 },
                    { month: '59.91-78.02', units: 1188},
                    { month: '78.22-800', units: 114 },
                    { month: '1.71-,.05', units: 1922 },
                    { month: '3.51-60', units: 927},
                    { month: '5-15.220', units: 528},
                    { month: '1,.21-250-5', units: 245 },
                    { month: '2,.56-,80.9', units: 1102},
                    { month: ',7.91-590.9', units: 1111 },
                ],
                series: [
                    {
                        type: 'column',
                        xKey: 'month',
                        yKey: 'units',
                        fills:["blue","green","red"],
                        strokeWidth: 0,
                        postProcess: this.postProcess,
                        tooltip: {
                            enabled: true,
                            renderer: (params) => {
                                const { datum } = params;
                                return `<div>${datum.month}: ${datum.units}</div>`;
                            },
                        },
                        listeners: {
                            nodeClick: (event) => {
                                var datum = event.datum;
                                // window.alert(
                                //     'Cars sold in ' +
                                //     datum[event.xKey] +
                                //     ': ' +
                                //     String(datum[event.yKey]) +
                                //     '\n' +
                                //     listUnitsSoldByBrand(datum['brands'])
                                // );

                                var desc=this.state.searchParams.description;
                                /*desc.push(datum[event.yKey]);
                                alert(1122)*/
                                alert(this.props.selected)
                            },
                            nodeSelect:(event)=>{
                                alert("defsel")
                            }
                        },
                    },
                ],
                axes: [
                    {
                        type: 'category',
                        position: 'bottom',
                        label:{
                            formatter: () => ''
                        },
                        tick: {
                            formatter: () => '', // set the tick label to an empty string to hide the discrete values
                        },
                    },
                    {
                        type: 'number',
                        position: 'left',
                        label:"",
                        tick: {
                            label: "", // set the tick label to an empty string to hide the discrete values
                        },
                    },
                ],
                legend: {
                    enabled: false,
                },
            },
        };
    }
    postProcess = (params) => {
        const { seriesOptions, datum } = params;
        const { fills } = seriesOptions;

        if (datum.category === '6.1-150.2') {
            return { ...seriesOptions, fills: [fills[1]] }; // Customize fill for 'B'
        }

        return seriesOptions; // Use default fills for other categories
    };
    customRenderer = (params) => {
        const { context, fill } = params;
        const isSelected = context.month === '6.1-150.2'; // Example: Selecting 'B' category
        const barFill = isSelected ? 'yellow' : fill;
        return { fill: barFill };
    };
    handleChartCreated = (params) => {
        const chart = params.chart;
        const series = chart.series[0];

        const highlightedItem = series.data[this.defaultSelectionIndex];
        series.toggleDatumSelection(highlightedItem, true);
    };

    // Custom renderer function for column fills
    columnFills = (params) => {
        // const category = params.datum.category;
        // return category === this.state.selectedColumn ? 'blue' : 'black';
        return "cyan"
    };

    // Custom renderer function for column strokes
    columnStrokes = (params) => {
        // const category = params.datum.category;
        // return category === this.state.selectedColumn ? 'violet' : 'green';
        return "violet"
    };

    // Custom listener function for selected column
    customListener = (selectedCategory) => {
        console.log('Selected column:', selectedCategory);
        // Perform additional actions based on the selected column
        // You can modify this function according to your requirements
    };

    // Generate data array using a loop

    render() {

        return (
            <div className={"wrapper"}>
            <AgChartsReact
                options={this.state.options}
                // onChartOptionsChange={this.handleChartOptionsChange} // Attach the event handler
                // onSeriesClick={this.handleColumnSelection} // Optional: handle clicks for additional logic
                //onChartReady={this.handleColumnSelection}
                style={{ height: '300px', width: '100%' }}
            />
            </div>
        );
    }
}

export default HistogramChart;
