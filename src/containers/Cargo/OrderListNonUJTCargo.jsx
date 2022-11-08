import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const OrderListNonUJTCargo = () => {
    const history = useHistory(); 
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
    const [products, setProducts] = useState(emptyProduct);

    const [setSubmitted] = useState(null);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [setProductDialog] = useState(false);

    const dt = useRef(null);

    // const openNew = () => {
    //     setProduct(emptyProduct);
    //     setSubmitted(false);
    //     setProductDialog(true);
    // };

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
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

    const openNew = () => {
        return history.push({
            pathname: "/sales/cargo/nonujt",
            state: {}
        });
    };

    const leftContents = (
        <React.Fragment>
            <Button label="Back" icon="pi pi-angle-left" className="p-button-secondary p-button-text mr-2" />
            <Button label="New" icon="pi pi-plus" className="p-button-secondary p-button-text" onClick={openNew}/>
            <Button label="Save" icon="pi pi-save" className="p-button-secondary p-button-text" />
            <Button label="Print" icon="pi pi-print" className="p-button-secondary p-button-text mr-2" />
            <Button label="Refresh" icon="pi pi-refresh" className="p-button-secondary p-button-text" />
        </React.Fragment>
    );

    return (
        <div>
            <div className="card p-fluid">
                <Toolbar className="mb-4" left={leftContents} />
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
                </Accordion>
            </div>
        </div>
    );

        
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(OrderListNonUJTCargo, comparisonFn);