'use strict';

import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { AgChartsReact } from 'ag-charts-react';
import {getData} from "../data";

export default class ChartExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
                    { month: '2.7-4.5', units: 1552, brands: { BMW: 10, Toyota: 15 } },
                    { month: '4.5-6', units: 26, brands: { Ford: 17, BMW: 10 } },
                    { month: '6-15.2', units: 422, brands: { Nissan: 20, Toyota: 22 } },
                    { month: '15.2-25-5', units: 582, brands: { BMW: 10, Toyota: 15 } },
                    { month: '25.5-48.9', units: 1, brands: { Ford: 17, BMW: 10 } },
                    { month: '48.9-59.9', units: 0, brands: { Nissan: 20, Toyota: 22 } },
                    { month: '59.9-78.2', units: 188, brands: { BMW: 10, Toyota: 15 } },
                    { month: '78.2-80', units: 14, brands: { Ford: 17, BMW: 10 } },
                ],
                series: [
                    {
                        type: 'column',
                        xKey: 'month',
                        yKey: 'units',
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
                                desc.push(datum[event.yKey])
                                alert(desc)
                            },
                        },
                    },
                ],
                axes: [
                    {
                        type: 'category',
                        position: 'bottom',
                    },
                    {
                        type: 'number',
                        position: 'left',
                    },
                ],
                legend: {
                    enabled: false,
                },
            },
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="wrapper">
                <AgChartsReact options={this.state.options} />
            </div>
        );
    }
}
function listUnitsSoldByBrand(brands) {
    var result = '';
    for (var key in brands) {
        result += key + ': ' + brands[key] + '\n';
    }
    return result;
}
const root = createRoot(document.getElementById('root'));
root.render(<ChartExample />);