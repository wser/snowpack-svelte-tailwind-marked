import sveltePreprocess from "svelte-preprocess";

svelte({
    // etc...
    preprocess: sveltePreprocess({
        sourceMap: !production,
        postcss: {
            plugins: [
                require("tailwindcss"), 
                require("autoprefixer")
            ],
        },
    }),
})