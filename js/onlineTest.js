const embededLinks = [
    { name: "countChar", id: "hurucix" },
    { name: "adder", id: "lifavus" },
    { name: "batchRegister", id: "noragik" },
    { name: "combineReducer", id: "fajujik" },
    { name: "explain", id: "nevegud" },
    { name: "sequential", id: "himobiw" },
    { name: "parallel", id: "bewezuf" }
];

window.activeLink = null;

embededLinks.forEach((v, i) => {
    let a = document.createElement("a");
    const href = `//jsbin.com/${v.id}/edit?js,output`;
    a.href = href;
    a.textContent = v.name;
    a.onclick = e => {
        e.preventDefault();
        //modify iframe's src
        const iframe = document.querySelector("iframe");
        if (iframe.src.indexOf(v.id) < 0) iframe.src = href;

        //remove active class for last clicked anchor
        if (window.activeLink) {
            window.activeLink.classList.remove("active");
        }

        //add active class for the current clicked anchor
        window.activeLink = e.currentTarget;
        window.activeLink.classList.add("active");
    };
    document.querySelector("#links").appendChild(a);
});
