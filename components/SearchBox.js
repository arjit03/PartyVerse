import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import companies from "../data/companies.json";

export default function SearchBox({ initialValue = "", onSearch, fullWidth = false }) {
    const [value, setValue] = useState(initialValue);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const router = useRouter();
    const searchBoxRef = useRef(null);

    // Sync with external changes
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    // Close suggestions when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Generate suggestions based on input
    function generateSuggestions(query) {
        if (!query || query.length < 3) {
            setSuggestions([]);
            setShowSuggestions(false);
            return;
        }

        const q = query.toLowerCase();
        const results = [];
        const seen = new Set();

        // Search in companies
        companies.forEach(company => {
            // Company names
            if (company.name.toLowerCase().includes(q) && !seen.has(company.name)) {
                results.push({
                    type: 'company',
                    text: company.name,
                    subtitle: `${company.city}, ${company.state}`,
                    searchValue: company.name,
                    icon: 'icon-office'
                });
                seen.add(company.name);
            }

            // Cities
            const cityMatch = company.city.toLowerCase().includes(q);
            const cityKey = `${company.city}, ${company.state}`;
            if (cityMatch && !seen.has(cityKey)) {
                results.push({
                    type: 'location',
                    text: company.city,
                    subtitle: company.state,
                    searchValue: company.city,
                    icon: 'icon-pin'
                });
                seen.add(cityKey);
            }

            // States
            if (company.state.toLowerCase().includes(q) && !seen.has(company.state)) {
                results.push({
                    type: 'location',
                    text: company.state,
                    subtitle: 'State',
                    searchValue: company.state,
                    icon: 'icon-pin'
                });
                seen.add(company.state);
            }

            // Categories
            company.categories.forEach(category => {
                if (category.toLowerCase().includes(q) && !seen.has(category)) {
                    results.push({
                        type: 'category',
                        text: category,
                        subtitle: 'Category',
                        searchValue: category,
                        icon: 'icon-list'
                    });
                    seen.add(category);
                }
            });
        });

        // Limit to 8 suggestions
        setSuggestions(results.slice(0, 8));
        setShowSuggestions(results.length > 0);
    }

    function handleInputChange(e) {
        const newValue = e.target.value;
        setValue(newValue);
        setSelectedIndex(-1);
        generateSuggestions(newValue);
    }

    function handleSuggestionClick(suggestion) {
        setValue(suggestion.searchValue);
        setShowSuggestions(false);
        
        // Trigger search with the selected value
        if (onSearch) {
            onSearch(suggestion.searchValue);
        } else {
            const query = { ...router.query, search: suggestion.searchValue };
            router.push({
                pathname: "/companies",
                query,
            }, undefined, { shallow: true });
        }
    }

    function handleKeyDown(e) {
        if (!showSuggestions || suggestions.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => 
                    prev < suggestions.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                if (selectedIndex >= 0) {
                    e.preventDefault();
                    handleSuggestionClick(suggestions[selectedIndex]);
                }
                break;
            case 'Escape':
                setShowSuggestions(false);
                setSelectedIndex(-1);
                break;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        // If a suggestion is selected, use it
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
            handleSuggestionClick(suggestions[selectedIndex]);
            return;
        }

        // Close suggestions
        setShowSuggestions(false);

        // If onSearch callback is provided (v4 companies page), use it
        if (onSearch) {
            onSearch(value.trim());
            return;
        }

        // Otherwise use router navigation (v3 style for homepage)
        const query = { ...router.query };

        // CASE 1: input is empty
        if (!value.trim()) {
            // If search already exists, remove it
            if (query.search) {
                delete query.search;

                router.push({
                    pathname: "/companies",
                    query,
                }, undefined, { shallow: true });
            }
            // Otherwise do nothing
            return;
        }

        // CASE 2: input has value push it to the router.
        query.search = value;

        router.push({
            pathname: "/companies",
            query,
        }, undefined, { shallow: true });
    }

    // Use different classes based on fullWidth prop
    const containerClasses = fullWidth 
        ? "mainSearch bg-white px-20 py-15 rounded-100"
        : "mainSearch -w-900 bg-white px-10 py-10 rounded-100";

    return (
        <div ref={searchBoxRef} style={{ position: 'relative' }}>
            <form onSubmit={handleSubmit}>
                <div className={containerClasses}>
                    <div className="button-grid items-center">

                        {/* Search input */}
                        <div className="searchMenu-loc px-30 lg:px-0 flex-1">
                            <h4 className="text-15 fw-500 ls-2 lh-16 text-black">
                                Search
                            </h4>

                            <div className="text-15 text-light-1 ls-2 lh-16">
                                <input
                                    type="search"
                                    name="search"
                                    placeholder="Search by city, state, or company"
                                    value={value}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    onFocus={() => value.length >= 3 && generateSuggestions(value)}
                                    className="js-search text-dark-1"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="button-item">
                            <button
                                type="submit"
                                className="mainSearch__submit button -dark-1 h-60 px-35 rounded-100 bg-blue-1 text-white"
                            >
                                <i className="icon-search text-20 mr-10"></i>
                                Search
                            </button>
                        </div>

                    </div>
                </div>
            </form>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
                <div 
                    className="search-suggestions"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        marginTop: '8px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        zIndex: 999,
                        maxHeight: '400px',
                        overflowY: 'auto'
                    }}
                >
                    <div style={{ padding: '8px 0' }}>
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                onMouseEnter={() => setSelectedIndex(index)}
                                onMouseLeave={() => setSelectedIndex(-1)}
                                style={{
                                    padding: '12px 20px',
                                    cursor: 'pointer',
                                    backgroundColor: selectedIndex === index ? '#f5f7fa' : 'white',
                                    transition: 'background-color 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px'
                                }}
                            >
                                <div style={{ 
                                    color: '#3b71fe', 
                                    fontSize: '16px',
                                    minWidth: '20px'
                                }}>
                                    <i className={suggestion.icon}></i>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ 
                                        fontWeight: 500, 
                                        color: '#1a1a1a',
                                        fontSize: '15px'
                                    }}>
                                        {suggestion.text}
                                    </div>
                                    <div style={{ 
                                        fontSize: '13px', 
                                        color: '#8592a3',
                                        marginTop: '2px'
                                    }}>
                                        {suggestion.subtitle}
                                    </div>
                                </div>
                                <div style={{ 
                                    color: '#8592a3',
                                    fontSize: '14px'
                                }}>
                                    <i className="icon-arrow-top-right"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
