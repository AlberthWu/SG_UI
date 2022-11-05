import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
import { CountryService } from '../../service/CountryService';
import { PostsService } from '../../service/PostsService';

const FormSJ = () => {
    const [countries, setCountries] = useState([]);

    const [selectedCountry2, setSelectedCountry2] = useState(null);

    const [filteredCountries, setFilteredCountries] = useState(null);

    const countryservice = new CountryService();
    const postService = new PostsService();

    useEffect(() => {
        postService.getLoket().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchCountry = (event) => {
        setTimeout(() => {
            let _filteredCountries;
            if (!event.query.trim().length) {
                _filteredCountries = [...countries];
            }
            else {
                _filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredCountries(_filteredCountries);
        }, 250);
    }


    return (
        <div className="card">
            <h5>Dropdown, Templating and Force Selection</h5>
            <AutoComplete value={selectedCountry2} suggestions={filteredCountries} completeMethod={searchCountry} field="name" dropdown forceSelection onChange={(e) => setSelectedCountry2(e.value)} aria-label="Countries" dropdownAriaLabel="Select Country" />

        </div>
    )

};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(FormSJ, comparisonFn);
