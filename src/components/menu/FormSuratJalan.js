import React, { useState, useRef, useEffect } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import * as Service from "../../service/PostsService";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faTruck, faDashboard, faSignIn, faBuilding, faTrailer, faUserGear, faPrint, faMoneyBill, faCalendarDay, faDollar, faTruckPickup, faHelicopter, faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";

const FormSuratJalan = () => {
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

    const GetAll = async() => {
        const response = await Service.GetAll();

        setModels(response);
    }

    const [setProduct] = useState(null);
    // const [product, setProducts] = useState(emptyProduct);
    const [setSubmitted] = useState(null);
    const [setDeleteProductDialog] = useState(false);
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

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div>
                    <Button label="Export" icon="pi pi-cloud-upload" className="p-button-help mr-2" onClick={exportCSV} />
                </div>
            </React.Fragment>
        );
    };

    const items = [
        { label: "Back", icon: "pi pi-angle-left" },
        { label: "New", icon: "pi pi-fw pi-file"  },
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
        setProduct({...product});
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    // const deleteProduct = () => {
    //     let _products = products.filter(val => val.id !== product.id);
    //     setProducts(_products);
    //     setDeleteProductDialog(false);
    //     setProduct(emptyProduct);
    //     toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    // }

    // const hideDeleteProductDialog = () => {
    //     setDeleteProductDialog(false);
    // }

    // const hideDeleteProductsDialog = () => {
    //     setDeleteProductsDialog(false);
    // }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }

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
                </div>

            </div>
            <Panel headerTemplate={template} toggleable>
                    <div className="grid crud-demo">
                        <div className="col-12">
                                <Toolbar className="mb-2" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                                <DataTable value={models} paginator rows={10}>
                                    <Column field="title" header="Title" headerStyle={{ width: "%" }} filter sortable></Column>
                                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
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
                        </div>
                    </div>
                </Panel>
        </div>
    );
}
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(FormSuratJalan, comparisonFn);
