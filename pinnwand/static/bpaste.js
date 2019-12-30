window.addEventListener("load", function(event) {
    var bar = document.querySelector("section.paste-submit");

    if(!bar) {
        return false;
    }

    var but = document.createElement("a");

    but.text = "Add another file.";
    but.href = "#";

    but.addEventListener("click", function(event) {
        event.preventDefault();

        new_file_add();
    })

    bar.appendChild(but);
});

function new_file_add() {
    var template = document.querySelector("section.file-template").cloneNode(true);
    template.className = "file-part";

    document.querySelector("main.page-create").insertBefore(
        template,
        document.querySelector("section.paste-submit")
    );
}