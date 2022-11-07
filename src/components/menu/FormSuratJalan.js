import React, { useState, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { AutoComplete } from "primereact/autocomplete";
import { Fieldset } from 'primereact/fieldset';
import { Accordion, AccordionTab } from "primereact/accordion";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import * as Service from "../../service/PostsService";
import { CountryService } from "../../service/CountryService";

const FormSuratJalan = () => {
    const toast = useRef(null);
    const [models] = useState(null);

    let emptyProduct = {
        id: null,
        name: "",
        image: null,
        description: "",
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: "INSTOCK",
    };
    
    const [product, setProduct] = useState(null);
    // const [cities, setCities] = useState([]);
    const [products, setProducts] = useState(emptyProduct);
    const [setSubmitted] = useState(null);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    // const [setDeleteProductsDialog] = useState(false);
    const [setProductDialog] = useState(false);
    // const [activeIndex, setActiveIndex] = useState(0);
    const [loket, setLoket] = useState([]);

    const [lokets] = useState([]);

    const [jenisOrders, setjenisOrders] = useState([]);
    const [jenisOrder, setjenisOrder] = useState(null);
    const [filteredJenisOrder, setfilteredJenisOrder] = useState(null);

    const [namaSTNKs, setnamaSTNKs] = useState([]);
    const [namaSTNK, setnamaSTNK] = useState(null);
    const [filterednamaSTNK, setfilterednamaSTNK] = useState(null);

    const [driver, setDriver] = useState([]);
    const [drivers, setDrivers] = useState(null);
    const [filtereddriver, setfilteredDriver] = useState(null);

    const [namaRekenings, setnamaRekenings] = useState([]);
    const [namaRekening, setnamaRekening] = useState(null);
    const [filterednamaRekening, setfilterednamaRekening] = useState(null);
    
    const [NoSchedule, setNoSchedule] = useState("");
    const [TglSchedule, setTglSchedule] = useState("");
    const [ExpSchedule, setExpSchedule] = useState("");

    const [TglGPS, setTglGPS] = useState("");
    const [UpdateGPS, setUpdateGPS] = useState("");
    const [dropdownValue, setDropdownValue] = useState(null);
    const [dropdownShift, setDropdownShift] = useState(null);
    
    const [dropdownStatus, setDropdownStatus] = useState(null);
    const dt = useRef(null);
    // const [checked1, setChecked1] = useState(false);

    // const searchLoket = (event) => {
    //     const filtered = [];
    //     const query = event.query;
    //     for (let i = 0; i < lokets.length; i++) {
    //         const data = lokets[i];
    //         if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
    //             filtered.push(data);
    //         }
    //     }
    //     setFilteredLoket(filtered);
    // };

    const dropdownValues = [
        { name: "A", code: "A" },
        { name: "B", code: "B" },
        { name: "C", code: "C" },
        { name: "D", code: "D" },
        { name: "E", code: "E" },
    ];

    const dropdownValuesShifts = [
        { name: "1", code: "1" },
        { name: "2", code: "2" },
        { name: "3", code: "3" },
    ];

    const searchJenisOrder = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < jenisOrders.length; i++) {
            const data = jenisOrders[i];

    const [lokets, setLokets] = useState([]);
    const [filteredLoket, setFilteredLoket] = useState(null);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const [value4, setValue4] = useState("");
    // const [dropdownValue, setDropdownValue] = useState(null);
    const [dropdownShift, setDropdownShift] = useState(null);
    const [dropdownJenisorder, setDropdownJenisorder] = useState(null);
    const dt = useRef(null);
    // const [checked1, setChecked1] = useState(false);

    const searchLoket = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < lokets.length; i++) {
            const data = lokets[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(data);
            }
        }

        setfilteredJenisOrder(filtered);
    };

    const searchNamaSTNK = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < namaSTNKs.length; i++) {
            const data = namaSTNKs[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(data);
            }
        }
        setfilterednamaSTNK(filtered);
    };

    const searchDriver = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < drivers.length; i++) {
            const data = drivers[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(data);
            }
        }
        setfilteredDriver(filtered);
    };

    const searchNamaRekening = (event) => {
        const filtered = [];
        const query = event.query;
        for (let i = 0; i < namaRekenings.length; i++) {
            const data = namaRekenings[i];
            if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(data);
            }
        }
        setfilterednamaRekening(filtered);
    };


    const dropdownValuesStatus = [
        { name: "Utama", code: "1" },
        { name: "Serep", code: "2" },
    ];

    const dropdownValuesShifts = [
        { name: "1", code: "1" },
        { name: "2", code: "2" },
        { name: "3", code: "3" },
    ];

    const dropdownValuesJO = [
        { name: "Dumptruck Dutro", code: "DTR" },
        { name: "Dumptruck Engkel", code: "DTE" },
        { name: "Dumptruck Tronton", code: "DTT" },
        { name: "Mixer", code: "MXR" },
        { name: "Wingbox", code: "WBB" },
        { name: "Trailer", code: "TRL" },
        { name: "Colt Diesel Double", code: "CDD" },
        { name: "Tronton Box", code: "TRB" },
        { name: "Crane", code: "CRN" },
    ];


    // const searchLoket = (event) => {
    //     const filtered = [];
    //     const query = event.query;
    //     for (let i = 0; i < lokets.length; i++) {
    //         const data = lokets[i];
    //         if (data.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
    //             filtered.push(data);
    //         }
    //     }
    //     setFilteredLoket(filtered);
    // };

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    // const CustomCiIcon = ({name}) => {
    //     const CircumIcons = CiIcons[name];
    //     if (!CircumIcons) return <p></p>
    //     return <CircumIcons/>;
    // };

    // const setIconMenu=(icon) =>{
    //     const iconType = icon.substring(0,2).toLowerCase();
    //     if (iconType === "pi"){
    //         return <i className={icon}></i>
    //     } else if (iconType === "ci"){
    //         return <CustomCiIcon name={icon}/>
    //     }
    // };

    // const ToastDemo = () => {
    //     const toastBC = useRef(null);

    // const showConfirm = () => {
    //     toastBC.current.show({ severity: 'warn', sticky: true, content: (
    //         <div className="flex flex-column" style={{flex: '1'}}>
    //             <div className="text-center">
    //                 <i className="pi pi-exclamation-triangle" style={{fontSize: '3rem'}}></i>
    //                 <h4>Are you sure?</h4>
    //                 <p>Confirm to proceed</p>
    //             </div>
    //             <div className="grid p-fluid">
    //                 <div className="col-6">
    //                     <Button type="button" label="Yes" className="p-button-success" />
    //                 </div>
    //                 <div className="col-6">
    //                     <Button type="button" label="No" className="p-button-secondary" />
    //                 </div>
    //             </div>
    //         </div>
    //     ) });
    // }

    // const createId = () => {
    //     let id = '';
    //     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     for (let i = 0; i < 5; i++) {
    //         id += chars.charAt(Math.floor(Math.random() * chars.length));
    //     }
    //     return id;
    // }

    // const importCSV = (e) => {
    //     const file = e.files[0];
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //         const csv = e.target.result;
    //         const data = csv.split('\n');

    //         // Prepare DataTable
    //         const cols = data[0].replace(/['"]+/g, '').split(',');
    //         data.shift();

    //         const importedData = data.map(d => {
    //             d = d.split(',');
    //             const processedData = cols.reduce((obj, c, i) => {
    //                 c = c === 'Status' ? 'inventoryStatus' : (c === 'Reviews' ? 'rating' : c.toLowerCase());
    //                 obj[c] = d[i].replace(/['"]+/g, '');
    //                 (c === 'price' || c === 'rating') && (obj[c] = parseFloat(obj[c]));
    //                 return obj;
    //             }, {});

    //             processedData['id'] = createId();
    //             return processedData;
    //         });

    //         const _products = [...products, ...importedData];

    //         setProducts(_products);
    //     };

    //     reader.readAsText(file, 'UTF-8');
    // }

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                {/* <div className="my-2 mr-4">
                <InputSwitch checked={checked1} onChange={(e) => setChecked1(e.value)} />
                </div> */}
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus-circle" className="p-button-raised p-button-success p-button-text" onClick={openNew} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div>
                    <Button label="Export" icon="pi pi-cloud-upload" className="p-button-raised p-button-info p-button-text mr-2" onClick={exportCSV} />
                </div>
            </React.Fragment>
        );
    };

    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </React.Fragment>
    );

    // const items = [
    //     { label: "Back", icon: "pi pi-chevron-left" },
    //     { label: "New", icon: "pi pi-fw pi-file" },
    //     { label: "Save", icon: "pi pi-fw pi-save" },
    //     { label: "Print", icon: "pi pi-fw pi-print" },
    //     { label: "Refresh", icon: "pi pi-fw pi-refresh" },
    // ];

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: "success", summary: "Successful", detail: "Product Deleted", life: 3000 });
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    // const hideDeleteProductsDialog = () => {
    //     setDeleteProductsDialog(false);
    // }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-text mb-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning p-button-text mb-2" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    const leftContents = (
        <React.Fragment>
            <Button label="Back" icon="pi pi-angle-left" className="p-button-secondary p-button-text mr-2" />
            <Button label="New" icon="pi pi-plus" className="p-button-secondary p-button-text" />
            <Button label="Save" icon="pi pi-save" className="p-button-secondary p-button-text" />
            <Button label="Print" icon="pi pi-print" className="p-button-secondary p-button-text mr-2" />
            <Button label="Refresh" icon="pi pi-refresh" className="p-button-secondary p-button-text" />
        </React.Fragment>
    );

    return (
        <div>
            <div className="card p-fluid">
                <Toolbar left={leftContents} />

                <Fieldset legend=" Input Surat Jalan" className="h-full mt-4">
                    <div className="field grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="name2">No. Schedule</label>
                            <InputText id="NoSchedule" value={NoSchedule} onChange={(e) => setNoSchedule(e.value)} type="text" />
                        </div>

                <h5>Form Surat Jalan</h5>
                <div className="field grid">
                    <div className="col-12 md:col-6">
                        <label htmlFor="name2">No. Schedule</label>
                        <InputText id="NoSchedule" value={value1} onChange={(e) => setValue1(e.value)} type="text" />
                    </div>


                    <div className="field grid">
                        <div className= " field col-12 md:col-3 ">
                            <label htmlFor= "calendar">Tanggal Schedule</label>
                            <Calendar inputId= "calendar" value={TglSchedule} onChange={(e) => setTglSchedule(e.value)} showIcon />
                        </div>
                        <div className= " field col-12 md:col-3 ">
                            <label htmlFor="calendar">Masa Berakhir Schedule</label>
                            <Calendar inputId="calendar" value={ExpSchedule} onChange={(e) => setExpSchedule(e.value)} showIcon />
                        </div>

                <div className="field grid">
                    <div className="col-12 md:col-3">
                        <label htmlFor="calendar">Tanggal Schedule</label>
                        <Calendar inputId="calendar" value={value2} onChange={(e) => setValue2(e.value)} showIcon />
                    </div>
                    <div className="col-12 md:col-3">
                        <label htmlFor="calendar">Masa Berakhir Schedule</label>
                        <Calendar inputId="calendar" value={value3} onChange={(e) => setValue3(e.value)} showIcon />
                    </div>

                    <div className="field grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="loket">Loket</label>
                            <Dropdown id="Loket" dropdown value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownValues} optionLabel="name" placeholder="A/B/C/D/E" />
                        </div>
                        
                <div className="field grid">
                    <div className="field col-6">
                        <label htmlFor="loket">Loket</label>
                        <AutoComplete id="loket" dropdown value={loket} onChange={(e) => setLoket(e.value)} suggestions={filteredLoket} completeMethod={searchLoket} field="name"></AutoComplete>
                        {/* <Dropdown id="Loket" dropdown value={dropdownValue} onChange={(e) => setDropdownValue(e.value)} options={dropdownValues} optionLabel="name" placeholder="A/B/C/D" /> */}
                        {/* <Dropdown id="Loket" dropdown value={value4} onChange={(e) => setValue4(e.value)} suggestions={filteredLoket} completeMethod={searchLoket} field="name" optionLabel="Business"></Dropdown> */}
                    </div>
                </div>

                <div className="field grid">
                    <div className="field col-6">
                        <label htmlFor="shift">Shift</label>
                        <Dropdown id="Shift" dropdown value={dropdownShift} onChange={(e) => setDropdownShift(e.value)} options={dropdownValuesShifts} optionLabel="name" placeholder="1/2/3" />
                        {/* <Dropdown id="Loket" optionLabel="Business"></Dropdown> */}
                    </div>
                    <div className="col-12 md:col-3">
                        <label htmlFor="calendar">Tanggal GPS</label>
                        <Calendar inputId="calendar" value={value3} onChange={(e) => setValue3(e.value)} showIcon />
                    </div>
                    <div className="col-12 md:col-3">
                        <label htmlFor="calendar">Pembaharuan GPS</label>
                        <Calendar inputId="calendar" value={value4} onChange={(e) => setValue4(e.value)} showIcon />
                    </div>

                    <div className="field grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="shift">Shift</label>
                            <Dropdown id="Shift" dropdown value={dropdownShift} onChange={(e) => setDropdownShift(e.value)} options={dropdownValuesShifts} optionLabel="name" placeholder="1/2/3" />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="calendar">Tanggal GPS</label>
                            <Calendar inputId="calendar" value={TglGPS} onChange={(e) => setTglGPS(e.value)} showIcon />
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="calendar">Pembaharuan GPS</label>
                            <Calendar inputId="calendar" value={UpdateGPS} onChange={(e) => setUpdateGPS(e.value)} showIcon />
                        </div>
                        
                <div className="field grid">
                    <div className="col-12 md:col-6">
                        <label htmlFor="jenisorder">Jenis Order</label>
                        <Dropdown id="Jenisorder" dropdown value={dropdownJenisorder} onChange={(e) => setDropdownJenisorder(e.value)} options={dropdownValuesJO} optionLabel="name" placeholder="Unit" />
                        {/* <Dropdown id="Jenisorder" optionLabel="Business"></Dropdown> */}
                    </div>
                    <div className="col-12 md:col-3">
                        <label htmlFor="loket">Driver</label>
                        <Dropdown id="Loket" optionLabel="Business"></Dropdown>
                    </div>
                    <div className="col-12 md:col-3">
                        <label htmlFor="loket">Status</label>
                        <Dropdown id="Loket" optionLabel="Business"></Dropdown>
                    </div>


                    <div className="field grid">
                        <div className="field col-12 md:col-6">
                            <label htmlFor="jenisorder">Jenis Order</label>
                            <AutoComplete id="autocomplete" dropdown value={jenisOrder} onChange={(e) => setjenisOrder(e.value)} suggestions={filteredJenisOrder} completeMethod={searchJenisOrder} field="name"></AutoComplete>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="loket">Driver</label>
                            <AutoComplete id="autocomplete" dropdown value={driver} onChange={(e) => setDriver(e.value)} suggestions={filtereddriver} completeMethod={searchDriver} field="name"></AutoComplete>
                        </div>
                        <div className="field col-12 md:col-3">
                            <label htmlFor="status">Status</label>
                            <Dropdown id="Status" dropdown value={dropdownStatus} onChange={(e) => setDropdownStatus(e.value)} options={dropdownValuesStatus} optionLabel="name" placeholder="Utama/Serep" />
                        </div>
                    </div>

                    <div className="field grid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="name3">Nama Pemilik STNK</label>
                            <AutoComplete id="autocomplete" dropdown value={namaSTNK} onChange={(e) => setnamaSTNK(e.value)} suggestions={filterednamaSTNK} completeMethod={searchNamaSTNK} field="name"></AutoComplete>
                        </div>
                        <div className="field col-12 md:col-2">
                            <label>Nomor Plat</label>
                            <InputText id="Plat No" type="text" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="reason">Nama Pemilik Rekening</label>
                            <AutoComplete id="autocomplete" dropdown value={namaRekening} onChange={(e) => setnamaRekening(e.value)} suggestions={filterednamaRekening} completeMethod={searchNamaRekening} field="name"></AutoComplete>
                            {/* <InputText id="reason" type="text" /> */}
                        </div>
                        <div className="field col-12 md:col-2">
                            <label htmlFor="reason">Nomor Rekening</label>
                            <InputText id="reason" type="text" />
                        </div>
                    </div>
                </Fieldset>
                
                <div className="field grid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="name3">Nama Pemilik</label>
                        <Dropdown id="Shift" optionLabel="Business"></Dropdown>
                    </div>
                    <div className="field col-2">
                        <label>Nomor Plat</label>
                        <InputText id="Plat No" type="text" />
                    </div>
                    <div className="field col-4">
                        <label htmlFor="reason">Nama Pemilik Rekening</label>
                        <InputText id="reason" type="text" />
                    </div>
                    <div className="field col-2">
                        <label htmlFor="reason">Nomor Rekening</label>
                        <InputText id="reason" type="text" />
                    </div>
                </div>
           </div>
            <Accordion activeIndex={0}>
                <AccordionTab header="Surat Jalan">
                    <Toolbar className="mb-2" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                    <DataTable
                        value={models}
                        scrollable
                        scrollHeight="400px"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        responsiveLayout="scroll"
                        stripedRows
                    >
                        <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: "%" }} />
                        <Column field="body" header="Body" headerStyle={{ width: "%" }} filter sortable></Column>
                        <Column body={actionBodyTemplate} exportable={true} style={{ minWidth: "8rem" }}></Column>
                    </DataTable>
                    <Dialog visible={deleteProductDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle mr- 3" style={{ fontSize: "2rem" }} />
                            {product && (
                                <span>
                                    Are you sure you want to delete <b>{product.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>
                </AccordionTab>
                <AccordionTab header="Produk">
                    <Toolbar className="mb-2" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                    <DataTable
                        value={models}
                        scrollable
                        scrollHeight="400px"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        responsiveLayout="scroll"
                    >
                        <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: "%" }} />
                        <Column field="body" header="Body" headerStyle={{ width: "%" }} filter sortable></Column>
                        <Column body={actionBodyTemplate} exportable={true} style={{ minWidth: "8rem" }}></Column>
                    </DataTable>
                    <Dialog visible={deleteProductDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                            {product && (
                                <span>
                                    Are you sure you want to delete <b>{product.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>
                </AccordionTab>
                <AccordionTab header="History Modal">
                    <Toolbar className="mb-2" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                    <DataTable
                        value={models}
                        scrollable
                        scrollHeight="400px"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        responsiveLayout="scroll"
                    >
                        <Column field="title" header="Title" filter filterPlaceholder="Search by title" style={{ minWidth: "%" }} />
                        <Column field="body" header="Body" headerStyle={{ width: "%" }} filter sortable></Column>
                        <Column body={actionBodyTemplate} exportable={true} style={{ minWidth: "8rem" }}></Column>
                    </DataTable>
                    <Dialog visible={deleteProductDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                            {product && (
                                <span>
                                    Are you sure you want to delete <b>{product.name}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>
                </AccordionTab>
            </Accordion>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(FormSuratJalan, comparisonFn);