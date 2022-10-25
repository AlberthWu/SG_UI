import React, { useState, useRef, useEffect } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Toast } from 'primereact/toast';
import { Ripple } from "primereact/ripple";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
// import { FileUpload } from 'primereact/fileupload';
import * as Service from "../../service/PostsService";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faTruck, faDashboard, faSignIn, faBuilding, faTrailer, faUserGear, faPrint, faMoneyBill, faCalendarDay, faDollar, faTruckPickup, faHelicopter, faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";

const FormSuratJalan = () => {
    const toast = useRef(null);
    const [models, setModels] = useState(null);

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

    useEffect(() => {
        GetAll();
    });

    const GetAll = async () => {
        const response = await Service.GetAll();

        setModels(response);
    };

    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState(emptyProduct);
    const [setSubmitted] = useState(null);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    // const [setDeleteProductsDialog] = useState(false);
    const [setProductDialog] = useState(false);
    const dt = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [value6, setValue6] = useState("");
    // const toast = useRef(null);

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

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


    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" className="p-button-raised p-button-text" aria-label="New" onClick={openNew} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div>
                    {/* <FileUpload mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" chooseLabel="Import" className="mr-2 inline-block" onUpload={importCSV} /> */}
                    <Button label="Export" icon="pi pi-cloud-upload" className="p-button-help mr-2" onClick={exportCSV} />
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

    const items = [
        { label: "Back", icon: "pi pi-angle-left" },
        { label: "New", icon: "pi pi-fw pi-file" },
        { label: "Save", icon: "pi pi-fw pi-save" },
        { label: "Delete", icon: "pi pi-fw pi-trash" },
        { label: "Print", icon: "pi pi-fw pi-print" },
        { label: "Refresh", icon: "pi pi-fw pi-refresh" },
    ];

    const template = (options) => {
        const toggleIcon = options.collapsed ? "pi pi-chevron-down" : "pi pi-chevron-up";
        const className = `${options.className} justify-content-start`;
        const titleClassName = `${options.titleClassName} pl-1`;

        return (
            <div className={className}>
                <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                    <span className={toggleIcon}></span>
                    <Ripple />
                </button>
                <span className={titleClassName}>Surat Jalan</span>
            </div>
        );
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter(val => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }

    // const hideDeleteProductsDialog = () => {
    //     setDeleteProductsDialog(false);
    // }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mb-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning mb-2" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };

    return (
        <div>
            <TabMenu model={items} className="mb-2" activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            <div className="card p-fluid">
                <h5>Form Surat Jalan</h5>
                <div className="field grid">
                    <label htmlFor="name3" className="col-12 mb-0 md:col-2 md:mb-0">
                        No. Schedule
                    </label>
                    <div className="col-12 md:col-3">
                        <InputText id="NoSchedule" type="text" />
                    </div>
                </div>

                <div className="field grid">
                    <label htmlFor="calendar" className="col-12 mb-0 md:col-2 md:mb-0">
                        Tgl. Schedule
                    </label>
                    <div className="col-12 md:col-3">
                        <Calendar inputId="calendar" value={value6} onChange={(e) => setValue6(e.value)} className="p-invalid" showIcon />
                    </div>
                </div>

                <div className="field grid">
                    <label htmlFor="loket" className="col-6 mb-0 md:col-2 md:mb-0">
                        Loket
                    </label>
                    <div className="col-12 md:col-3">
                        <Dropdown id="Loket" optionLabel="Business"></Dropdown>
                    </div>
                </div>
                <div className="field grid">
                    <label htmlFor="shift" className="col-6 mb-0 md:col-2 md:mb-0">
                        Shift
                    </label>
                    <div className="col-12 md:col-3">
                        <Dropdown id="Shift" optionLabel="Business"></Dropdown>
                    </div>
                </div>

                <div className="field grid">
                    <label htmlFor="shift" className="col-6 mb-2 md:col-2 md:mb-0">
                        Jenis Order
                    </label>
                    <div className="col-12 md:col-3">
                        <Dropdown id="Shift" optionLabel="Business"></Dropdown>
                    </div>
                </div>

                <div className="field grid">
                    <label htmlFor="name3" className="col-12 mb-2 md:col-2 md:mb-0">
                        No. Plat
                    </label>
                    <div className="col-12 md:col-7">
                        <Dropdown id="Shift" optionLabel="Business"></Dropdown>
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText id="Plat No" type="text" />
                    </div>
                    {/* <div><Button type="button" onClick={showConfirm} label="Confirm" className="ui-button-warning" /></div> */}
                </div>
            </div>
            <Panel headerTemplate={template} toggleable>
                <div className="grid crud-demo">
                    <div className="col-12">
                        <Toolbar className="mb-2" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                        <DataTable value={models} paginator rows={10}>
                            <Column field="title" header="Title" headerStyle={{ width: "%" }} filter sortable></Column>
                            <Column field="body" header="Body" headerStyle={{ width: "%" }} filter sortable></Column>
                            <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: "8rem" }}></Column>
                            {/* <Column field="No. SJ" header="No. SJ" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="No. PTO" header="No. PTO" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="No. DI" header="No. DI" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Tgl Kirim" header="Tgl Kirim" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Customer" header="Customer" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Gudang" header="Gudang" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Pabrik" header="Pabrik" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Produk" header="Produk" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="No. PO" header="No. PO" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Vol" header="Vol" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Tgl. Terima" header="Tgl. Terima" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="Status" header="Status" headerStyle={{ width: "14%" }}></Column>
                                    <Column field="UserID" header="UserID" headerStyle={{ width: "14%" }}></Column> */}
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
                    </div>
                </div>
            </Panel>
        </div>
    );
};
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(FormSuratJalan, comparisonFn);
