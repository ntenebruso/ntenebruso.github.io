<script>
    import { theme } from "@lib/store";
    import { onMount } from "svelte";

    let container;
    let themeValue;

    theme.subscribe(value => {
        themeValue = value;
        const iframe = document.querySelector(".utterances-frame");
        if (iframe) {
            console.log(`github-${value}`);
            iframe.contentWindow.postMessage({ type: "set-theme", theme: `github-${value}` }, "https://utteranc.es");
        }
    });

    onMount(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://utteranc.es/client.js");
        script.setAttribute("repo", "ntenebruso/blog-comments");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", `github-${themeValue}`);
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async", true);
        container.append(script);
    });
</script>

<div bind:this={container}></div>