export type ApexChart = {
  width?: string | number
  height?: string | number
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'candlestick'
    | 'boxPlot'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | 'rangeArea'
    | 'treemap'
  foreColor?: string
  fontFamily?: string
  background?: string
  offsetX?: number
  offsetY?: number
  dropShadow?: ApexDropShadow & {
    enabledOnSeries?: undefined | number[]
    color?: string | string[]
  }
  events?: {
    animationEnd?(chart: any, options?: any): void
    beforeMount?(chart: any, options?: any): void
    mounted?(chart: any, options?: any): void
    updated?(chart: any, options?: any): void
    mouseMove?(e: any, chart?: any, options?: any): void
    mouseLeave?(e: any, chart?: any, options?: any): void
    click?(e: any, chart?: any, options?: any): void
    xAxisLabelClick?(e: any, chart?: any, options?: any): void
    legendClick?(chart: any, seriesIndex?: number, options?: any): void
    markerClick?(e: any, chart?: any, options?: any): void
    selection?(chart: any, options?: any): void
    dataPointSelection?(e: any, chart?: any, options?: any): void
    dataPointMouseEnter?(e: any, chart?: any, options?: any): void
    dataPointMouseLeave?(e: any, chart?: any, options?: any): void
    beforeZoom?(chart: any, options?: any): void
    beforeResetZoom?(chart: any, options?: any): void
    zoomed?(chart: any, options?: any): void
    scrolled?(chart: any, options?: any): void
    brushScrolled?(chart: any, options?: any): void
  }
  brush?: {
    enabled?: boolean
    autoScaleYaxis?: boolean
    target?: string
  }
  id?: string
  group?: string
  locales?: ApexLocale[]
  defaultLocale?: string
  parentHeightOffset?: number
  redrawOnParentResize?: boolean
  redrawOnWindowResize?: boolean | Function
  sparkline?: {
    enabled?: boolean
  }
  stacked?: boolean
  stackType?: 'normal' | '100%'
  toolbar?: {
    show?: boolean
    offsetX?: number
    offsetY?: number
    tools?: {
      download?: boolean | string
      selection?: boolean | string
      zoom?: boolean | string
      zoomin?: boolean | string
      zoomout?: boolean | string
      pan?: boolean | string
      reset?: boolean | string
      customIcons?: {
        icon?: string
        title?: string
        index?: number
        class?: string
        click?(chart?: any, options?: any, e?: any): any
      }[]
    }
    export?: {
      csv?: {
        filename?: undefined | string
        columnDelimiter?: string
        headerCategory?: string
        headerValue?: string
        dateFormatter?(timestamp?: number): any
      },
      svg?: {
        filename?: undefined | string
      }
      png?: {
        filename?: undefined | string
      }
    }
    autoSelected?: 'zoom' | 'selection' | 'pan'
  }
  zoom?: {
    enabled?: boolean
    type?: 'x' | 'y' | 'xy'
    autoScaleYaxis?: boolean
    zoomedArea?: {
      fill?: {
        color?: string
        opacity?: number
      }
      stroke?: {
        color?: string
        opacity?: number
        width?: number
      }
    }
  }
  selection?: {
    enabled?: boolean
    type?: string
    fill?: {
      color?: string
      opacity?: number
    }
    stroke?: {
      width?: number
      color?: string
      opacity?: number
      dashArray?: number
    }
    xaxis?: {
      min?: number
      max?: number
    }
    yaxis?: {
      min?: number
      max?: number
    }
  }
  animations?: {
    enabled?: boolean
    easing?: 'linear' | 'easein' | 'easeout' | 'easeinout'
    speed?: number
    animateGradually?: {
      enabled?: boolean
      delay?: number
    }
    dynamicAnimation?: {
      enabled?: boolean
      speed?: number
    }
  }
}
export type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric'
  categories?: any;
  overwriteCategories?: number[] | string[] | undefined;
  offsetX?: number;
  offsetY?: number;
  sorted?: boolean;
  labels?: {
    show?: boolean
    rotate?: number
    rotateAlways?: boolean
    hideOverlappingLabels?: boolean
    showDuplicates?: boolean
    trim?: boolean
    minHeight?: number
    maxHeight?: number
    style?: {
      colors?: string | string[]
      fontSize?: string
      fontFamily?: string
      fontWeight?: string | number
      cssClass?: string
    }
    offsetX?: number
    offsetY?: number
    format?: string
    formatter?(value: string, timestamp?: number, opts?:any): string | string[]
    datetimeUTC?: boolean
    datetimeFormatter?: {
      year?: string
      month?: string
      day?: string
      hour?: string
      minute?: string
      second?: string
    }
  }
  group?: {
      groups?: { title: string, cols: number }[],
      style?:  {
        colors?: string | string[]
        fontSize?: string
        fontFamily?: string
        fontWeight?: string | number
        cssClass?: string
      }
  }
  axisBorder?: {
    show?: boolean
    color?: string
    offsetX?: number
    offsetY?: number
    strokeWidth?: number
  }
  axisTicks?: {
    show?: boolean
    borderType?: string
    color?: string
    height?: number
    offsetX?: number
    offsetY?: number
  }
  tickPlacement?: string
  tickAmount?: number | 'dataPoints'
  min?: number
  max?: number
  range?: number
  floating?: boolean
  decimalsInFloat?: number
  position?: string
  title?: {
    text?: string
    offsetX?: number
    offsetY?: number
    style?: {
      color?: string
      fontFamily?: string
      fontWeight?: string | number
      fontSize?: string
      cssClass?: string
    }
  }
  crosshairs?: {
    show?: boolean
    width?: number | string
    position?: string
    opacity?: number
    stroke?: {
      color?: string
      width?: number
      dashArray?: number
    }
    fill?: {
      type?: string
      color?: string
      gradient?: {
        colorFrom?: string
        colorTo?: string
        stops?: number[]
        opacityFrom?: number
        opacityTo?: number
      }
    }
    dropShadow?: ApexDropShadow
  }
  tooltip?: {
    enabled?: boolean
    offsetY?: number
    formatter?(value: string, opts?: object): string
    style?: {
      fontSize?: string
      fontFamily?: string
    }
  }
}
export type ApexStroke = {
  show?: boolean
  curve?: 'smooth' | 'straight' | 'stepline' | ('smooth' | 'straight' | 'stepline')[]
  lineCap?: 'butt' | 'square' | 'round'
  colors?: string[]
  width?: number | number[]
  dashArray?: number | number[]
  fill?: ApexFill
}