import { DualAxes, G2 } from '@antv/g2plot';
import data from "@/json/mock/charts.json"
import { useEffect, useState } from "react";

export default function Trend() {
    const [dualAxesExample, setDualAxesExample] = useState<any>(null)
    const { registerTheme } = G2;
    const legendColorMap = new Map()
    const colors10 = ['#139E4B', '#0023C0', '#45D174', '#275AF2', '#BE408C', '#BE408C',];
    /** 20色板 */
    const colors20 = ['#139E4B', '#0023C0', '#45D174', '#275AF2', '#BE408C', '#BE408C', '#942D93'];

    const { billData, profitData } = dataSummary()

    useEffect(() => {
        if (data.length) {
            if (dualAxesExample) {
                dualAxesExample.update({
                    data: [billData, profitData],
                })
            } else {
                console.log(12345);
                dualAxesExample?.destroy();
                dualAxes()
            }
        }
        return () => { }
    }, [data])

    registerTheme('custom-theme', {
        colors10,
        /** 20色板 */
        colors20,
    });
    function dataSummary() {
        const collect: object[] = [];
        const pay: object[] = [];
        const collectProfit: object[] = [];
        const payProfit: object[] = [];
        data.forEach(item => {
            collect.push({ time: item.settleDate, value: item.inCount, type: '代收笔数' })
            pay.push({ time: item.settleDate, value: item.outCount, type: '代付笔数' })
            collectProfit.push({ time: item.settleDate, count: item.inProfit, type: '代收利润' })
            payProfit.push({ time: item.settleDate, count: item.outProfit, type: '代付利润' })
        })

        return {
            billData: collect.concat(pay),
            profitData: collectProfit.concat(payProfit)
        }
    }

    Array.from(new Set(billData.map((item: any) => item.type))).concat(Array.from(new Set(profitData.map((item: any) => item.type)))).forEach((item, index) => {
        legendColorMap.set(item, colors10[index])
    })

    function dualAxes() {
        const dualAxes = new DualAxes('container', {
            data: [billData, profitData],
            xField: "time",
            yField: ['value', 'count'],
            geometryOptions: [
                {
                    geometry: 'column',
                    isStack: true,
                    seriesField: 'type',
                    columnWidthRatio: 0.2,
                },
                {
                    geometry: 'line',
                    isStack: true,
                    seriesField: 'type',
                },
            ],
            legend: {
                marker: {
                    symbol: 'circle',
                    style: {
                        lineWidth: 2,
                        r: 3,
                        stroke: '#5AD8A6',
                        fill: '#fff',
                    },
                },

                position: 'top-left',
                itemName: {
                    formatter: (val) => {
                        return `@${val}`
                    },
                    style: (val) => {
                        return {
                            fill: legendColorMap.get(val.name),
                        }
                    },
                },
            },
            interactions: [
                {
                    type: 'element-highlight',
                },
                {
                    type: 'active-region',
                },
            ],
            theme: 'custom-theme',
        });

        dualAxes.render();
        if (dualAxesExample) return
        setDualAxesExample(dualAxes)
    }

    return <>
        <div id="container" style={{ height: "300px", width: "600px" }}></div>
    </>
}