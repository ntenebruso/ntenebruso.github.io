<script lang="ts">
    import { theme } from "@lib/store.ts";

    let themeValue: string;

    theme.subscribe(value => {
        themeValue = value;
    })

    function handleClick() {
        theme.update(value => (value == "dark" ? "light" : "dark"));
        if (themeValue == "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", themeValue);
    }
</script>

<button
    id="toggle-btn"
    class="rounded-full w-10 h-10 dark:bg-zinc-800 bg-gray-200 border-[1px] border-gray-300 dark:border-zinc-700 leading-[0px]"
    aria-label="Toggle theme"
    on:click={handleClick}
>
{#if themeValue == "dark"}
    <i class="fa-solid fa-moon"></i>
{:else}
    <i class="fa-solid fa-sun"></i>
{/if}

</button>