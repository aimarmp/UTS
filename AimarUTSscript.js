document.getElementById("sidebarToggle").addEventListener("click", function(event) {
    var sidebar = document.getElementById("Sidebar");
    sidebar.style.display = (sidebar.style.display === "none") ? "block" : "none";
    event.stopPropagation();
});

function w3_close() {
    document.getElementById("Sidebar").style.display = "none";
}

document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("Sidebar");
    if (sidebar.style.display === "block" && event.target !== sidebar && !sidebar.contains(event.target)) {
        sidebar.style.display = "none";
    }
});

document.querySelectorAll('.dropdown, .dropdown-list, .dropdown_').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.classList.toggle('hidden');
}

function goToTargetDiv(targetId) {
    window.location.href = `Kegiatan.html#${targetId}`;
}










