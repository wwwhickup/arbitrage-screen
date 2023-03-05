import { ApexStroke } from "./chartType";

const chart: ApexChart = {
  height: 350,
  type: "line",
  id: "realtime",
  animations: {
    enabled: true,
    easing: 'linear',
    dynamicAnimation: {
      speed: 1000
    }
  },
  toolbar: {
    show: true
  },
  zoom: {
    enabled: true
  }
}
const stroke: ApexStroke = {
  curve: "smooth",
  width: 1,
}
const title: ApexTitleSubtitle = {
  text: "Line with Annotations",
  align: "left"
}
const xaxis: ApexXAxis = {
  type: "datetime",
  labels: {
    datetimeUTC: true
  },
  tickPlacement: 'on',
}
const yaxis: ApexYAxis = {
  labels: {
    formatter: (value) => { return `${value.toFixed(1)} %`}
  }
}
const legend: ApexLegend = {
  show: true,
  position: 'right',
  horizontalAlign: 'center',
  
}
const annotations: ApexAnnotations = {
  yaxis: [
    {
      y: 8200,
      borderColor: "#00E396",
      label: {
        borderColor: "#00E396",
        style: {
          color: "#fff",
          background: "#00E396"
        },
        text: "Support"
      }
    },
    {
      y: 8600,
      y2: 9000,
      borderColor: "#FEB019",
      opacity: 0.1,
      label: {
        borderColor: "#333",
        style: {
          fontSize: "10px",
          color: "#333",
          background: "#FEB019"
        },
        text: "Y-axis range"
      }
    }
  ],
  xaxis: [
    {
      x: new Date("23 Nov 2017").getTime(),
      strokeDashArray: 0,
      borderColor: "#775DD0",
      label: {
        borderColor: "#775DD0",
        style: {
          color: "#fff",
          background: "#775DD0"
        },
        text: "Anno Test"
      }
    },
    {
      x: new Date("26 Nov 2017").getTime(),
      x2: new Date("28 Nov 2017").getTime(),
      borderColor: "#B3F7CA",
      opacity: 0.5,
      label: {
        borderColor: "#B3F7CA",
        style: {
          fontSize: "10px",
          color: "#fff",
          background: "#00E396"
        },
        offsetY: -10,
        text: "X-axis range"
      }
    }
  ],
  points: [
    {
      x: new Date("01 Dec 2017").getTime(),
      y: 8607.55,
      marker: {
        size: 8,
        fillColor: "#fff",
        strokeColor: "red",
        radius: 2,
        cssClass: "apexcharts-custom-class"
      },
      label: {
        borderColor: "#FF4560",
        offsetY: 0,
        style: {
          color: "#fff",
          background: "#FF4560"
        },

        text: "Point Annotation"
      }
    }
  ]
}

export const option = {
  chart,
  stroke,
  title,
  xaxis,
  yaxis,
  legend,
  dataLabels: {
    enabled: false
  },
  grid: {
    padding: {
      right: 30,
      left: 20
    }
  },
  labels: [],
  markers: {
    size: 3
  },
};
