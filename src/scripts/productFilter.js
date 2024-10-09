// Function to apply filters
function applyFilters() {
    const selectedCategory = document.querySelector('select[name="category"]').value;
    const selectedBrand = document.querySelector('select[name="brand"]').value;
    const selectedPriceRange = document.querySelector('select[name="price"]').value;
    const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);

    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const category = product.dataset.category;
        const brand = product.dataset.brand;
        const price = parseFloat(product.dataset.price);

        const categoryMatch = selectedCategory === '' || category === selectedCategory;
        const brandMatch = selectedBrand === '' || brand === selectedBrand;
        const priceMatch = price >= minPrice && (maxPrice === Infinity || price <= maxPrice);

        if (categoryMatch && brandMatch && priceMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Add event listeners to filter controls
document.addEventListener('DOMContentLoaded', () => {
    const filterControls = document.querySelectorAll('.filter-control');
    filterControls.forEach(control => {
        control.addEventListener('change', applyFilters);
    });
});