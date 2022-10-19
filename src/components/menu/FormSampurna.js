import React, {useState, useEffect} from "react";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { MultiSelect } from 'primereact/multiselect';
import { Button } from "primereact/button";
import {CountryService} from '../../service/CountryService';

const Bank = () => {
    const [cities, setCities] = useState([]);
    const [filteredCity, setFilteredCity] = useState(null);
    const [city, setCity] = useState('');

    const [districts, setDistricts] = useState([]);
    const [filteredDistrict, setFilteredDistrict] = useState(null);
    const [district, setDistrict] = useState('');

    const [states, setStates] = useState([]);
    const [filteredState, setFilteredState] = useState(null);
    const [state, setState] = useState('');

    const [business, setBusiness] = useState('');
    const [businessData, setBusinessData] = useState('');

    const businessSelectItems = [
        {label: 'ASM', value: 'ASM'},
        {label: 'NCA', value: 'NCA'},
        {label: 'SMS', value: 'SMS'},
    ];
 
    useEffect(() => {
        const countryService = new CountryService();
        countryService.getCity().then((res) => {
            setCities(res);
        });
    }, []);

    useEffect(() => {
        const countryService = new CountryService();
        countryService.getDistrict().then((res) => {
            setDistricts(res);
        });
    }, []);

    useEffect(() => {
        const countryService = new CountryService();
        countryService.getState().then((res) => {
            setStates(res);
        });
    }, []);

    useEffect(() => {
     setBusinessData (businessSelectItems);
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const searchCity = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < cities.length; i++) {
            const data = cities[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(data);
            }
        }
        setFilteredCity(filtered);
    };

    const searchDistrict = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < districts.length; i++) {
            const data = districts[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(data);
            }
        }
        setFilteredDistrict(filtered);
    };

    const searchState = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < states.length; i++) {
            const data = states[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(data);
            }
        }
        setFilteredState(filtered);
    };

    return (
        <div className="grid p-fluid">
            <div className="col-12 md:col-6"> 
                <div className="card"> 
                    <h5>Bank</h5>
                
                    <div className="grid formgrid">
                        <div className="col-12 mb-2">
                            <InputText type="text" placeholder="Name"></InputText>
                        </div>
                    </div>
                
                    <div className="grid formgrid">
                        <div className="col-12 mb-2">
                            <InputText type="text" placeholder="Swift Code"></InputText>
                        </div>
                    </div>
                       
                    <h5>City</h5>
                    <div className="field col-12">
                        <span className="p-float-label">
                            <AutoComplete id="autocomplete" dropdown value={city} onChange={(e) => setCity(e.value)} suggestions={filteredCity} completeMethod={searchCity} field="name"></AutoComplete>
                        </span>
                    </div>

                    <h5>District</h5>
                    <div className="field col-12">
                        <span className="p-float-label">
                            <AutoComplete id="autocomplete" dropdown value={district} onChange={(e) => setDistrict(e.value)} suggestions={filteredDistrict} completeMethod={searchDistrict} field="name"></AutoComplete>
                        </span>
                    </div>

                    <h5>State</h5>
                    <div className="field col-12">
                    <span className="p-float-label">
                        <AutoComplete id="autocomplete" dropdown value={state} onChange={(e) => setState(e.value)} suggestions={filteredState} completeMethod={searchState} field="name"></AutoComplete>
                    </span> 
                </div>
                    
                    <h5>Business Unit</h5>
                    <div className="field col-12">
                    <span className="p-float-label"> 
                       <MultiSelect display="chip" optionLabel="value" value={business} options={businessData} onChange={(e) => setBusiness(e.value)} />
                    </span>
                    </div>
                <div className=" mb-2">
                    <Button label="Save"></Button></div>
                    <Button label="Back" className="mb-2"></Button>
                </div>
            </div>
        </div>
    )  
}

export default Bank;