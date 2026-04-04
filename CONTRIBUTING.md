# Add an icon

Whether you're planning on adding an icon to the extension listed in the issues tab on GitHub or another icon, you can do so at this link:

* Obtain the logo
* Using image editing software or something capable, convert it into an SVG with a 512x512 (1:1) viewbox
* Upload it to public/icons and /files or /folders depending on whichever icon type you're adding
* Edit `src/entrypoints/github.content.ts` and add the reference to either dictionary (should be self explanatory)
    * Please note that you should not include any '.' at the start of the matching string as those are checked for automatically
    * Also note that you can use `*` only at the end of the matching string to fill in anything past the `*`, do not use `*.` or `.*` for matching.