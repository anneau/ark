export type { SizeChangeDetails as SplitterSizeChangeDetails } from '@zag-js/splitter'
export { default as SplitterContext, type SplitterContextProps } from './splitter-context.vue'
export { default as SplitterPanel, type SplitterPanelProps } from './splitter-panel.vue'
export {
  default as SplitterResizeTrigger,
  type SplitterResizeTriggerProps,
} from './splitter-resize-trigger.vue'
export {
  default as SplitterRoot,
  type SplitterRootProps,
  type SplitterRootEmits,
} from './splitter-root.vue'
export { type UseSplitterContext, useSplitterContext } from './use-splitter-context'
export * as Splitter from './splitter'
