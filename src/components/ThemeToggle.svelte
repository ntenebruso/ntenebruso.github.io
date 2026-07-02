<script lang="ts">
    import { theme } from "@lib/store.ts";
    
    let themeValue: string;

    theme.subscribe(value => {
        themeValue = value;
    })

    function handleClick() {
        theme.update(value => (value == "dark" ? "light" : "dark"));
        if (themeValue == "dark") {
            document.documentElement.dataset.theme = "dark";
        } else {
            document.documentElement.dataset.theme = "light";
        }
        localStorage.setItem("theme", themeValue);
    }
</script>

<button
    id="toggle-btn"
    class="cursor-pointer rounded-full w-10 h-10 bg-accent border border-border leading-0 text-[24px] flex items-center justify-center"
    aria-label="Toggle theme"
    on:click={handleClick}
>
{#if themeValue == "dark"}
    <i class="icon-moon"></i>
{:else}
    <i class="icon-sun-medium"></i>
{/if}

</button>