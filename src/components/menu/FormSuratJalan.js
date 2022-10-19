import React, { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import { Ripple } from "primereact/ripple";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faTruck, faDashboard, faSignIn, faBuilding, faTrailer, faUserGear, faPrint, faMoneyBill, faCalendarDay, faDollar, faTruckPickup, faHelicopter, faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";

const FormSuratJalan = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [value6, setValue6] = useState("");

    const items = [
        { label: "Back", icon: "pi pi-angle-left" },
        { label: "New", icon: "pi pi-fw pi-file" },
        { label: "Save", icon: "pi pi-fw pi-save" },
        { label: "Delete", icon: "pi pi-fw pi-trash" },
        { label: "Print", icon: "pi pi-fw pi-print" },
        { label: "Print Preview", icon: "pi pi-fw pi-eye" },
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

                <div className="grid">
                    <div className="col-12 md:col-12 lg-6">
                        <div className="field grid">
                            <label htmlFor="loket" className="col-6 mb-0 md:col-2 md:mb-0">
                                Loket
                            </label>
                            <div className="col-12 md:col-3">
                                <Dropdown id="Loket" optionLabel="Business"></Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg-6">
                        <div className="field grid">
                            <label htmlFor="shift" className="col-6 mb-0 md:col-2 md:mb-0">
                                Shift
                            </label>
                            <div className="col-12 md:col-3">
                                <Dropdown id="Shift" optionLabel="Business"></Dropdown>
                            </div>
                        </div>
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

                <Panel headerTemplate={template} toggleable>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Panel>
            </div>
        </div>
    );
};

export default FormSuratJalan;
