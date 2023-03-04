<script>
    export let theme = localStorage.getItem("theme") ?? "dark";

    function handleClick() {
        theme = theme == "dark" ? "light" : "dark";
        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }
</script>

<button
    id="toggle-btn"
    class="rounded-full w-10 h-10 dark:bg-zinc-800 bg-gray-200 border-[1px] border-gray-300 dark:border-zinc-700 leading-[0px]"
    aria-label="Toggle theme"
    on:click={handleClick}
>
{#if theme == "dark"}
    <i class="fa-solid fa-moon"></i>
{:else}
    <i class="fa-solid fa-sun"></i>
{/if}

</button>