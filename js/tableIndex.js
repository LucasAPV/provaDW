document.addEventListener("DOMContentLoaded", function() {
    const table = new DataTable("#myTable", {
        perPage: 5,
        perPageSelect: [5, 10, 25],
        sortable: true,
        searchable: true,
    });
});