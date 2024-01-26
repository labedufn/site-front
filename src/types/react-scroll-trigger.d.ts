declare module "react-scroll-trigger" {
  import { Component, ReactNode } from "react";

  interface ScrollTriggerProps {
    children?: ReactNode;
    onEnter?: () => void;
    onExit?: () => void;
    onProgress?: (progress: number) => void;
  }

  export default class ScrollTrigger extends Component<ScrollTriggerProps> {}
}
