import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { AutoComplete } from "primereact/autocomplete";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { ToggleButton } from "primereact/togglebutton";
import { CountryService } from "../../service/CountryService";

const Bank = () => {
    const [cities, setCities] = useState([]);
    const [filteredCity, setFilteredCity] = useState(null);
    const [city, setCity] = useState("");

    const [districts, setDistricts] = useState([]);
    const [filteredDistrict, setFilteredDistrict] = useState(null);
    const [district, setDistrict] = useState("");

    const [states, setStates] = useState([]);
    const [filteredState, setFilteredState] = useState(null);
    const [state, setState] = useState("");

    const [business, setBusiness] = useState("");
    const [businessData, setBusinessData] = useState("");

    const [models] = useState(null);
    // const [customers2] = useState([]);
    // const [idFrozen, setIdFrozen] = useState(false);
    // const [product, setProduct] = useState(null);
    // const [products] = useState(null);
    // const [setDeleteProductDialog] = useState(false);
    // const [setProductDialog] = useState(false);

    const businessSelectItems = [
        { label: "PT. Alam Sampurna Makmur", value: "PT. Alam Sampurna Makmur" },
        { label: "PT. Niaga Citra Abadi", value: "PT. Niaga Citra Abadi" },
        { label: "PT. Sampurna Makmur Sejahtera", value: "PT. Sampurna Makmur Sejahtera" },
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
        setBusinessData(businessSelectItems);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    // const balanceTemplate = (rowData) => {
    //     return <span className="text-bold">{formatCurrency(rowData.balance)}</span>;
    // };

    // const countryBodyTemplate = (rowData) => {
    //     return (
    //         <React.Fragment>
    //             <img alt="flag" src="assets/demo/images/flags/flag_placeholder.png" className={`flag flag-${rowData.country.code}`} width={30} />
    //             <span style={{ marginLeft: ".5em", verticalAlign: "middle" }} className="image-text">
    //                 {rowData.country.name}
    //             </span>
    //         </React.Fragment>
    //     );
    // };

    // const representativeBodyTemplate = (rowData) => {
    //     const representative = rowData.representative;
    //     return (
    //         <React.Fragment>
    //             <img alt={representative.name} src={`images/avatar/${representative.image}`} onError={(e) => (e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")} width={32} style={{ verticalAlign: "middle" }} />
    //             <span style={{ marginLeft: ".5em", verticalAlign: "middle" }} className="image-text">
    //                 {representative.name}
    //             </span>
    //         </React.Fragment>
    //     );
    // };

    // const dateBodyTemplate = (rowData) => {
    //     return formatDate(rowData.date);
    // };

    // const statusBodyTemplate = (rowData) => {
    //     return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    // };

    // const formatDate = (value) => {
    //     return value.toLocaleDateString("en-US", {
    //         day: "2-digit",
    //         month: "2-digit",
    //         year: "numeric",
    //     });
    // };

    // const formatCurrency = (value) => {
    //     return value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    // };

    // const actionBodyTemplate = (rowData) => {
    //     return (
    //         <React.Fragment>
    //             <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-text mb-2" onClick={() => editProduct(rowData)} />
    //             <Button icon="pi pi-trash" className="p-button-rounded p-button-warning p-button-text mb-2" onClick={() => confirmDeleteProduct(rowData)} />
    //         </React.Fragment>
    //     );
    // };

    // const editProduct = (product) => {
    //     setProduct({ ...product });
    //     setProductDialog(true);
    // };

    // const confirmDeleteProduct = (product) => {
    //     setProduct(product);
    //     setDeleteProductDialog(true);
    // };

    const leftContents = (
        <React.Fragment>
            <Button label="Back" icon="pi pi-angle-left" className="p-button-secondary p-button-text mr-2" />
            <Button label="New" icon="pi pi-plus" className="p-button-secondary p-button-text" />
            <Button label="Save" icon="pi pi-save" className="p-button-secondary p-button-text" />
            <Button label="Print" icon="pi pi-print" className="p-button-secondary p-button-text mr-2" />
            <Button label="Refresh" icon="pi pi-refresh" className="p-button-secondary p-button-text" />
        </React.Fragment>
    );

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
        <div className="card">
            <div className="col-12 md:col-12 mb-4">
                <div>
                    <Toolbar left={leftContents} className="mb-3" />
                </div>
                <div className="grid">
                    <div className="col-6">
                        <div className="card p-fluid">
                            <div className="col-12">
                                <h5>Bank</h5>
                                <div className="field">
                                    <div className="col-12">
                                        <InputText type="text" placeholder="Name"></InputText>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="col-12">
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
                                <div className="col-12 md: col-3">
                                    <Button label="Save" className="p-button-raised p-button-success p-button-text"></Button>
                                </div>
                                <div className="col-12 md: col-3">
                                    <Button label="Back" className="p-button-raised p-button-secondary p-button-text mb-2"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-6"> */}
                    <div className="col-12 xl:col-6">
                        <div className="card">
                            <h5>Recent Bank</h5>
                            <DataTable
                                value={models}
                                scrollable
                                scrollHeight="400px"
                                paginator
                                rows={10}
                                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                                responsiveLayout="scroll"
                            >
                                <Column field="name" header="Name" filter filterPlaceholder="Search by name" sortable style={{ width: "35%" }} />
                                <Column field="city" header="City" filter filterPlaceholder="Search by city" sortable style={{ width: "35%" }} />
                                <Column field="district" header="District" filter filterPlaceholder="Search by district" sortable style={{ width: "35%" }} />
                                <Column field="state" header="State" filter filterPlaceholder="Search by state" sortable style={{ width: "35%" }} />
                                <Column field="businessunit" header="Business Unit" filter filterPlaceholder="Search by Business Unit" sortable style={{ width: "35%" }} />
                            </DataTable>
                        </div>
                        {/* <ToggleButton checked={idFrozen} onChange={(e) => setIdFrozen(e.value)} onIcon="pi pi-lock" offIcon="pi pi-lock-open" onLabel="Unfreeze Id" offLabel="Freeze Id" style={{ width: "10rem" }} /> */}

                        {/* <DataTable value={models} scrollable scrollHeight="400px" paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll" stripedRows>
                        <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: "%" }} />
                        <Column field="body" header="Body" headerStyle={{ width: "%" }} filter sortable></Column>
                        <Column body={actionBodyTemplate} exportable={true} style={{ minWidth: "8rem" }}></Column>
                        </DataTable> */}
                        {/* <div className="card h-full"></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bank;
