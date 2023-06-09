'use strict';

import React, { Component } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import Service from "../services/service";
import * as events from "events";

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
                onSeriesClick: ()=>{
                    alert("salam2")
                },
                data: [],
                series: [
                    {
                        type: 'column',
                        xKey: 'minValue',
                        yKey: 'count',
                        tooltip: {
                            enabled: true,
                            renderer: (params) => {
                                const { datum } = params;
                                return `<div>${datum.minValue}-${datum.maxValue} : ${datum.count}</div>`;
                            },
                        },
                        fills: this.fillColors,
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
                                var a={
                                        id:datum.id,
                                        minValue:datum.minValue,
                                        maxValue:datum.maxValue
                                }
                                desc.push(a);
                                this.setState({desc})
                                //alert(JSON.stringify(desc))
                                this.props.onChange(desc);
                                //alert(this.props.selected)
                            },
                            nodeSelect:()=>{
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
                        label: {
                            fontFamily: "Interstate-Regular",
                            fontSize: 14,
                            color: 'blue',

                        },
                        tick: {
                            label: "", // set the tick label to an empty string to hide the discrete values
                        },
                    },
                ],
                label: {
                    avoidCollisions: true
                },
                legend: {
                    enabled: false,
                },
            },
        };
    }
    fillColors =()=> {this.state.options.data.map((datum) => {
        if (datum.count > 200) {
            return 'green'; // Fill columns with value > 20 as green
        } else {
            return 'blue'; // Fill other columns as blue
        }
    })};
    retrieveHistogramData=()=> {
        var payload={};
        payload["selected"]=223;
        var data=this.state.options;
        Service.getHistogramData(payload)
            .then((response) => {
                data.data=response.data;
                this.setState({
                    data
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    componentDidMount() {
        this.retrieveHistogramData();
    }
    handleColumnSelection(){
        alert("handle column selection");
    }
    render() {
        return (
            <div className="wrapper">
                <AgChartsReact
                    options={this.state.options}
                    handleColumnSelection={this.handleColumnSelection}
                />
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