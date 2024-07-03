declare module "vue-scrollto" {
    import { PluginFunction } from "@vue/runtime-core";

    export interface ScrollOptions {
        container?: string | Element;
        duration?: number;
        easing?: string;
        offset?: number;
        force?: boolean;
        cancelable?: boolean;
        onStart?: (element: Element) => void;
        onDone?: (element: Element) => void;
        onCancel?: (element: Element) => void;
        x?: boolean;
        y?: boolean;
    }

    export interface VueScrollTo {
        (
            element: string | Element,
            duration?: number,
            options?: ScrollOptions
        ): void;
        scrollTo: (
            element: string | Element,
            duration?: number,
            options?: ScrollOptions
        ) => void;
    }

    const VueScrollTo: PluginFunction<VueScrollTo>;
    export default VueScrollTo;
}
