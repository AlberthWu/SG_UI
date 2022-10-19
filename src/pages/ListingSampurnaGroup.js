import React, { useState, useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const ListingSampurnaGroup = () => {
    let emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };
    
    const [setProduct] = useState(null);
    const [setSubmitted] = useState(null);
    const [setProductDialog] = useState(false);
    const dt = useRef(null);


     const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    }
    
    const exportCSV = () => {
        dt.current.exportCSV();
    }

    const leftToolbarTemplate = () => {
    return (
        <React.Fragment>
            <div className="my-2">
                <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
            </div>
        </React.Fragment>
    )
    }

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div> 
                  <Button label="Export" icon="pi pi-cloud-upload" className="p-button-help mr-2" onClick={exportCSV} />
                </div>
            </React.Fragment>
        )
    }

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <Toolbar className="mb-2" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable>
                        <Column field="code" header="Code" headerStyle={{ width: '14%'}}></Column>
                        <Column field="name" header="Name" headerStyle={{ width: '14%'}}></Column>
                    </DataTable>

                </div>
            </div>
        </div>
    );
}
const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(ListingSampurnaGroup, comparisonFn);