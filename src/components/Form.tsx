import { useMemo, useState } from "react";

const MOCK_DATA = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics' },
    { id: 2, name: 'Mechanical Keyboard', category: 'Electronics' },
    { id: 3, name: 'Running Shoes', category: 'Apparel' },
    { id: 4, name: 'Coffee Mug', category: 'Kitchen' },
    { id: 5, name: 'Gaming Monitor', category: 'Electronics' },
    { id: 6, name: 'Cotton T-Shirt', category: 'Apparel' },
    { id: 7, name: 'Chef Knife', category: 'Kitchen' },
    { id: 8, name: 'Bluetooth Speaker', category: 'Electronics' },
];

// To implement a client-side list with pagination and filtering
// in React, you must always apply the filters first,
// calculate the pagination metrics second, and slice
// the filtered data last. If you reverse this order and
// paginate before filtering, your search inputs will only
// search within the current active page instead
// of the entire dataset.
const Form = () => {
    const [items] = useState(MOCK_DATA);
    // 2. Filter States
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // 3. Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Adjust page size here

    // 4. STEP 1: Filter the dataset globally
    const filteredItems = useMemo(() => {
        // Reset to page 1 whenever filters change to avoid out-of-bounds pages
        setCurrentPage(1);

        return items.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [items, searchTerm, selectedCategory]);

    // 5. STEP 2: Compute pagination boundaries
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    // 6. STEP 3: Slice the filtered items to get only the current page items
    const paginatedItems = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredItems.slice(startIndex, endIndex);
    }, [filteredItems, currentPage, itemsPerPage]);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '500px' }}>
            <h2>Product Catalog</h2>

            {/* --- FILTER CONTROLS --- */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '8px', flex: 1 }}
                />

                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ padding: '8px' }}
                >
                    <option value="All">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Kitchen">Kitchen</option>
                </select>
            </div>

            {/* --- RENDERED LIST --- */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {paginatedItems.map((item) => (
                    <li
                        key={item.id}
                        style={{ padding: '10px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }}
                    >
                        <span><strong>{item.name}</strong></span>
                        <span style={{ color: '#888', fontSize: '0.9em' }}>{item.category}</span>
                    </li>
                ))}
                {paginatedItems.length === 0 && <p>No items found.</p>}
            </ul>

            {/* --- PAGINATION CONTROLS --- */}
            {totalPages > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        style={{ padding: '6px 12px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                    >
                        Previous
                    </button>

                    <span>Page {currentPage} of {totalPages}</span>

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        style={{ padding: '6px 12px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default Form