import type { FunctionalComponent, SVGAttributes } from 'vue'

export interface Options {
  key: string
  value: string
  icon?: FunctionalComponent<SVGAttributes>
}

export interface Language {
  key: string
  label: string
}

export interface Tabs {
  key: string
  title: string
  url: string
}

export interface Column {
  key: string
  title: string
  spanColumns?: number
}