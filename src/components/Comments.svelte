<script lang="ts">
    import { theme } from "@lib/store";
    import { onMount } from "svelte";

    let container: HTMLDivElement;
    let themeValue: string;

    theme.subscribe(value => {
        themeValue = value;
        const iframe = <HTMLIFrameElement>document.querySelector("iframe.giscus-frame");
        if (iframe) {
            iframe.contentWindow.postMessage({
                giscus: {
                    setConfig: {
                        theme: value,
                    },
                },
            }, "https://giscus.app");
        }
    });

    onMount(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://giscus.app/client.js");
        script.setAttribute("data-repo", "ntenebruso/blog-comments");
        script.setAttribute("data-repo-id", "R_kgDOJiAR1A");
        script.setAttribute("data-category", "Comments");
        script.setAttribute("data-category-id", "DIC_kwDOJiAR1M4CWdk0");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "0");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "top");
        script.setAttribute("data-theme", themeValue);
        script.setAttribute("data-lang", "en");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async", "true")
        container.append(script);
    });
</script>

<div bind:this={container}></div>