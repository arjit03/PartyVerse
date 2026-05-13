import { getStates } from "../lib/dataSource";

export default function FilterBar({ filters, onFilterChange }) {
    const states = getStates();
    const { categories, state, rating, sort } = filters;

    function updateQuery(key, value) {
        onFilterChange(key, value);
    }

    // Handle category toggle (add or remove from array)
    function toggleCategory(category) {
        const currentCategories = categories || [];
        if (currentCategories.includes(category)) {
            // Remove category
            const newCategories = currentCategories.filter(c => c !== category);
            updateQuery("categories", newCategories);
        } else {
            // Add category
            updateQuery("categories", [...currentCategories, category]);
        }
    }

    // Clear all categories
    function clearCategories() {
        updateQuery("categories", []);
    }

    return (
        <aside className="sidebar y-gap-40">
            <div className="sidebar__item">
                <h5 className="text-18 fw-500 mb-10">Category</h5>
                <div className="sidebar-checkbox">
                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={!categories || categories.length === 0}
                                        onChange={clearCategories}
                                    />
                                    <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                </div>
                                <div className="text-15 ml-10">All Categories</div>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={categories && categories.includes("Princess")}
                                        onChange={() => toggleCategory("Princess")}
                                    />
                                    <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                </div>
                                <div className="text-15 ml-10">Princess</div>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={categories && categories.includes("Superhero")}
                                        onChange={() => toggleCategory("Superhero")}
                                    />
                                    <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                </div>
                                <div className="text-15 ml-10">Superhero</div>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={categories && categories.includes("Mascot")}
                                        onChange={() => toggleCategory("Mascot")}
                                    />
                                    <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                </div>
                                <div className="text-15 ml-10">Mascot</div>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-10 items-center justify-between">
                        <div className="col-auto">
                            <div className="d-flex items-center">
                                <div className="form-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={categories && categories.includes("Party Rentals")}
                                        onChange={() => toggleCategory("Party Rentals")}
                                    />
                                    <div className="form-checkbox__mark">
                                        <div className="form-checkbox__icon icon-check"></div>
                                    </div>
                                </div>
                                <div className="text-15 ml-10">Party Rentals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar__item">
                <h5 className="text-18 fw-500 mb-10">State</h5>
                <div className="single-field relative d-flex items-center">
                    <select
                        className="pl-15 border-light text-dark-1 h-50 rounded-8 col-12"
                        value={state || ""}
                        onChange={(e) => updateQuery("state", e.target.value)}
                    >
                        <option value="">All States</option>
                        {states.map((st) => (
                            <option key={st} value={st}>
                                {st}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="sidebar__item">
                <h5 className="text-18 fw-500 mb-10">Star Rating</h5>
                <div className="row y-gap-10 x-gap-10 pt-10">
                    <div className="col-auto">
                        <button
                            onClick={() => updateQuery("rating", rating === "1" ? "" : "1")}
                            className={`button py-5 px-20 rounded-100 ${rating === "1" ? "bg-blue-1 text-white" : "-blue-1 bg-blue-1-05 text-blue-1"}`}
                        >
                            1+
                        </button>
                    </div>

                    <div className="col-auto">
                        <button
                            onClick={() => updateQuery("rating", rating === "2" ? "" : "2")}
                            className={`button py-5 px-20 rounded-100 ${rating === "2" ? "bg-blue-1 text-white" : "-blue-1 bg-blue-1-05 text-blue-1"}`}
                        >
                            2+
                        </button>
                    </div>

                    <div className="col-auto">
                        <button
                            onClick={() => updateQuery("rating", rating === "3" ? "" : "3")}
                            className={`button py-5 px-20 rounded-100 ${rating === "3" ? "bg-blue-1 text-white" : "-blue-1 bg-blue-1-05 text-blue-1"}`}
                        >
                            3+
                        </button>
                    </div>

                    <div className="col-auto">
                        <button
                            onClick={() => updateQuery("rating", rating === "4" ? "" : "4")}
                            className={`button py-5 px-20 rounded-100 ${rating === "4" ? "bg-blue-1 text-white" : "-blue-1 bg-blue-1-05 text-blue-1"}`}
                        >
                            4+
                        </button>
                    </div>
                </div>
            </div>

            <div className="sidebar__item">
                <h5 className="text-18 fw-500 mb-10">Sort By</h5>
                <div className="single-field relative d-flex items-center">
                    <select
                        className="pl-15 border-light text-dark-1 h-50 rounded-8 col-12"
                        value={sort || ""}
                        onChange={(e) => updateQuery("sort", e.target.value)}
                    >
                        <option value="">Default</option>
                        <option value="featured">Featured</option>
                        <option value="rating">Highest Rating</option>
                    </select>
                </div>
            </div>
        </aside>
    );
}
