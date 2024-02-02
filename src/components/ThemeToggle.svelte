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
    class="rounded-full w-10 h-10 dark:bg-zinc-800 bg-zinc-100 border-[1px] border-zinc-200 dark:border-zinc-700 leading-[0px] flex items-center justify-center"
    aria-label="Toggle theme"
    on:click={handleClick}
>
{#if themeValue == "dark"}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
{:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-medium"><circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg>
{/if}

</button>