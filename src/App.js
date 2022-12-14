import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Route, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { AppTopbar } from './AppTopbar';
import { AppFooter } from './AppFooter';
import { AppMenu } from './AppMenu';
import { AppConfig } from './AppConfig';

import Dashboard from './components/Dashboard';
import ButtonDemo from './components/ButtonDemo';
import ChartDemo from './components/ChartDemo';
import Documentation from './components/Documentation';
import FileDemo from './components/FileDemo';
import FloatLabelDemo from './components/FloatLabelDemo';
import FormLayoutDemo from './components/FormLayoutDemo';
import InputDemo from './components/InputDemo';
import ListDemo from './components/ListDemo';
import MenuDemo from './components/MenuDemo';
import MessagesDemo from './components/MessagesDemo';
import MiscDemo from './components/MiscDemo';
import OverlayDemo from './components/OverlayDemo';
import MediaDemo from './components/MediaDemo';
import PanelDemo from './components/PanelDemo';
import TableDemo from './components/TableDemo';
import TreeDemo from './components/TreeDemo';
import InvalidStateDemo from './components/InvalidStateDemo';
import BlocksDemo from './components/BlocksDemo';
import IconsDemo from './components/IconsDemo';
import Bank from './components/menu/FormSampurna';
import FormSuratJalan from './components/menu/FormSuratJalan';

import OrderListUJTCargo from './containers/Cargo/OrderListUJTCargo';
import OrderDetailUJTCargo from './containers/Cargo/OrderDetailUJTCargo';
import OrderListNonUJTCargo from './containers/Cargo/OrderListNonUJTCargo';
import OrderDetailNonUJTCargo from './containers/Cargo/OrderDetailNonUJTCargo';

import Crud from './pages/Crud';
import TimelineDemo from './pages/TimelineDemo';
import ListingSampurnaGroup from './pages/ListingSampurnaGroup';
import Tablefr from './pages/Tablefr'

import PrimeReact from 'primereact/api';
import { Tooltip } from 'primereact/tooltip';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core"
// import { faFile, faBuilding } from "@fortawesome/free-regular-svg-icons";

import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import './assets/demo/flags/flags.css';
import './assets/demo/Demos.scss';
import './assets/layout/layout.scss';
import './App.scss';

const App = () => {
    const [layoutMode, setLayoutMode] = useState('static');
    const [layoutColorMode, setLayoutColorMode] = useState('light')
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const copyTooltipRef = useRef();
    const location = useLocation();
    
    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    }

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value)
    }

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode)
    }

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode)
    }

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    }

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === 'overlay') {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            }
            else if (layoutMode === 'static') {
                setStaticMenuInactive((prevState) => !prevState);
            }
        }
        else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    }

    const onSidebarClick = () => {
        menuClick = true;
    }

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    }

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    }

    const onMenuItemClick = (event) => {
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    }
    const isDesktop = () => {
        return window.innerWidth >= 992;
    }

    const menu = [
            {
                "label": "Home",
                "items": [
                    {
                        "label": "Dashboard",
                        "icon": "HiOutlineChartBarSquare",
                        "to": "/"
                    }
                ]
            },
            {
                "label": "Sales",
                "items": [
                    {
                        "label": "Master",
                        "icon": "HiOutlineSquaresPlus",
                        "items": [
                            {
                                "label": "Pool",
                                "icon": "HiOutlineHome",
                                "to": "/FormSuratJalan"
                            },
                            {
                                "label": "Product",
                                "icon": "HiOutlineShoppingCart",
                                "to": "/bank"
                            },
                            {
                                "label": "Customer",
                                "icon": "HiOutlineUserGroup",
                                "to": "/layoutdesign"
                            },
                            {
                                "label": "Price List",
                                "icon": "HiOutlineCurrencyDollar",
                                "to": "/tablefr"
                            },
                            {
                                "label": "Ujt List",
                                "icon": "HiOutlineCreditCard",
                                "to": "/sales/master/ujt/list"
                            }
                        ]
                    },
                    {
                        "label": "Office",
                        "icon": "HiOutlineBuildingOffice2",
                        "items": [
                            {
                                "label": "PO Customer",
                                "icon": "HiOutlineClipboardDocumentList",
                                "to": "/sales/office/po/list"
                            },
                            {
                                "label": "Invoice",
                                "icon": "HiOutlineDocumentText",
                                "to": "/sales/office/invoice/list"
                            },
                            {
                                "label": "Invoice (Manual)",
                                "icon": "HiOutlineDocumentPlus",
                                "to": "/sales/office/invoice-manual/list"
                            },
                            {
                                "label": "Order Manual Number",
                                "icon": "HiOutlineCalculator",
                                "to": "/sales/office/order-manual-number/list"
                            }
                        ]
                    },
                    {
                        "label": "Dump Truck",
                        "icon": "HiOutlineTruck",
                        "items": [
                            {
                                "label": "Order Ujt",
                                "icon": "HiOutlineBanknotes",
                                "to": "/sales/dumptruck/order-ujt/list"
                            },
                            {
                                "label": "Order Non Ujt",
                                "icon": "HiOutlineCreditCard",
                                "to": "/sales/dumptruck/order-nonujt/list"
                            }
                        ]
                    },
                    {
                        "label": "Cargo",
                        "icon": "HiOutlineCube",
                        "items": [
                            {
                                "label": "Order Ujt",
                                "icon": "HiOutlineBanknotes",

                                "to": "/sales/cargo/ListUJTCargo"

                            },
                            {
                                "label": "Order Non Ujt",
                                "icon": "HiOutlineCreditCard",
                                "to": "/sales/cargo/nonujt"
                            }
                        ]
                    },
                    {
                        "label": "Mixer",
                        "icon": "HiOutlineBeaker",
                        "items": [
                            {
                                "label": "Order Ujt",
                                "icon": "HiOutlineBanknotes",
                                "to": "/sales/mixer/order-ujt/list"
                            },
                            {
                                "label": "Order Non Ujt",
                                "icon": "HiOutlineCreditCard",
                                "to": "/sales/order/order-nonujt/list"
                            }
                        ]
                    }
                ]
            },
            {
                "label": "Purchase",
                "items": [
                    {
                        "label": "Master",
                        "icon": "HiOutlineSquaresPlus",
                        "items": [
                            {
                                "label": "Origin",
                                "icon": "HiOutlineHomeModern",
                                "to": "/purchase/master/origin/list"
                            },
                            {
                                "label": "Transporter",
                                "icon": "HiOutlineTruck",
                                "to": "/purchase/master/transporter/list"
                            },
                            {
                                "label": "Supplier",
                                "icon": "HiOutlineShoppingCart",
                                "to": "/purchase/master/supplier/list"
                            },
                            {
                                "label": "Sparepart",
                                "icon": "HiOutlineWrenchScrewdriver",
                                "to": "/purchase/master/sparepart/list"
                            },
                            {
                                "label": "Cost List",
                                "icon": "HiOutlineDocumentText",
                                "to": "/purchase/master/cost/list"
                            }
                        ]
                    },
                    {
                        "label": "Office",
                        "icon": "HiOutlineBuildingOffice2",
                        "items": [
                            {
                                "label": "DO Origin",
                                "icon": "HiOutlineDocumentDuplicate",
                                "to": "/purchase/office/do-origin/list"
                            },
                            {
                                "label": "Invoice",
                                "icon": "HiOutlineDocumentText",
                                "to": "/purchase/master/invoice/list"
                            }
                        ]
                    }
                ]
            },
            {
                "label": "Inventory",
                // "icons": "HiOutlineClipboardDocumentList"
            },
            {
                "label": "Finance",
                // "icons": "HiOutlineChartBar"
            },
            {
                "label": "Payroll",
                // "icon": "HiOutlineIdentification",
                "items": [
                    {
                        "label": "Master",
                        "icon": "HiOutlineSquaresPlus",
                        "items": [
                            {
                                "label": "Department",
                                "icon": "HiOutlineBuildingOffice2",
                                "to": "/"
                            },
                            {
                                "label": "Division",
                                "icon": "HiOutlineUserGroup",
                                "to": "/"
                            },
                            {
                                "label": "Occupation",
                                "icon": "HiOutlineUsers",
                                "to": "/"
                            },
                            {
                                "label": "Bank",
                                "icon": "HiOutlineBuildingLibrary",
                                "to": "/bank/list"
                            },
                            {
                                "label": "Fleet",
                                "icon": "HiOutlineTruck",
                                "to": "/fleet/list"
                            },
                            {
                                "label": "UJT",
                                "icon": "HiOutlineBanknotes",
                                "to": "/ujt/list"
                            },
                            {
                                "label": "Employee",
                                "icon": "HiOutlineUser",
                                "to": "/employee-list"
                            }
                        ]
                    },
                    {
                        "label": "Office",
                        "icon": "HiOutlineBuildingOffice2",
                        "to": "/office"
                    },
                    {
                        "label": "Driver",
                        "icon": "HiOutlineUserCircle",
                        "items": [
                            {
                                "label": "Dump Truck",
                                "icon": "HiOutlineTruck",
                                "to": "/dumptruck"
                            },
                            {
                                "label": "Cargo",
                                "icon": "HiOutlineCube",
                                "to": "/cargo"
                            },
                            {
                                "label": "Mixer",
                                "icon": "HiOutlineBeaker",
                                "to": "/mixer"
                            }
                        ]
                    },
                    {
                        "label": "Report",
                        "icon": "HiOutlineDocumentChartBar",
                        "items": [
                            {
                                "label": "Payslip",
                                "icon": "HiOutlineCreditCard",
                                "to": "/payslip"
                            },
                            {
                                "label": "Attendance",
                                "icon": "HiOutlineCalendarDays",
                                "to": "/attendance"
                            },
                            {
                                "label": "Overtime",
                                "icon": "HiOutlineClock",
                                "to": "/overtime"
                            }
                        ]
                    }
                ]
            },
        ]
    
    // const menu = [
    //     {
    //         label: 'Home',
    //         items: [{
    //             label: 'Dashboard', icon: 'pi pi-home', to: '/'
    //         }]
    //     },

    //     {
    //         label: 'Sampurna Group',
    //         items: [
    //             { label: 'Bank', icon: 'pi pi-fw pi-building', to: "/bank"},
    //             { label: 'LayoutDesign', icon: 'pi pi-fw pi-building', to: "/layoutdesign"},
    //             { label: 'FormSuratJalan', icon: 'pi pi-fw pi-id-card', to: "/FormSuratJalan"},
    //         ]
    //     },

    //     {
    //         label: 'SALES',
    //         items: [
    //             {
    //                 label: 'Master', icon: "CiGlobe",
    //                 items: [
    //                     {
    //                         label: 'Pool', icon: 'CiHome', to: "/FormSuratJalan",
    //                     },
    //                     {
    //                         label: 'Product', icon: 'CiBoxes',
    //                     },
    //                     {
    //                         label: 'Customer', icon: 'CiUser',
    //                     },
    //                     {
    //                         label: 'Price', icon: 'CiMoneyCheck1',
    //                     },
    //                     {
    //                         label: 'UJT', icon: 'CiMoneyBill',
    //                     },
    //                 ]},
    //                 {
    //                 label: 'Office', icon: 'pi pi-building',
    //                 items: [
    //                     {
    //                         label: 'Invoice Penjualan', icon: 'CiFileOn',
    //                     },
    //                     {
    //                         label: 'Generate Nomor Manual', icon: 'CiEdit',
    //                     },
    //                     {
    //                         label: 'Invoice Manual', icon: 'CiFileOn',
    //                     },
    //                     {
    //                         label: 'Report', icon: 'pi pi-fw pi-file',
    //                     },
    //                 ]},
    //                 {
    //                 label: 'Dumptruck', icon: 'CiDeliveryTruck',
    //                 items: [
    //                     {
    //                         label: 'UJT', icon: 'CiMoneyBill',
    //                     },
    //                     {
    //                         label: 'NON UJT', icon: 'CiCreditCardOff',
    //                     },
    //                     {
    //                         label: 'Report', icon: 'pi pi-fw pi-file',
    //                     },
    //                 ]},
    //                 {
    //                 label: 'Cargo', icon: 'CiDeliveryTruck',
    //                 items: [
    //                     {
    //                         label: 'UJT', icon: 'CiMoneyBill',
    //                     },
    //                     {
    //                         label: 'NON UJT', icon: 'CiCreditCardOff',
    //                     },
    //                     {
    //                         label: 'Report', icon: 'pi pi-fw pi-file',
    //                     },
    //                 ]},
    //                 {
    //                 label: 'Mixer', icon: 'CiDeliveryTruck',
    //                 items: [
    //                     {
    //                         label: 'UJT', icon: 'CiMoneyBill',
    //                     },
    //                     {
    //                         label: 'NON UJT', icon: 'CiCreditCardOff',
    //                     },
    //                     {
    //                         label: 'Report', icon: 'pi pi-fw pi-file',
    //                     },
    //                 ]
    //             },
    //         ]
    //     },

    //     {
    //         label: 'FLEET',
    //         items: [
    //             {
    //                 label: 'Master', icon: 'CiGlobe',
    //                 items: [
    //                     {
    //                         label: 'Jenis Truk', icon: 'CiDeliveryTruck',
    //                     },
    //                     {
    //                         label: 'Truk', icon: 'CiDeliveryTruck',
    //                     },
    //                 ]},
    //                 {
    //                 label: 'Pool', icon: 'CiHome',
    //                 items: [
    //                     {
    //                         label: 'Formasi Truk', icon: 'CiDeliveryTruck',
    //                     },
    //                 ]
    //             },
    //         ]
    //     },
        
    //     {
    //         label: 'FINANCE',
    //         items: [
    //             {
    //                 label: 'Office', icon: 'pi pi-building',
    //                 items: [
    //                     {
    //                         label: 'Invoice Finance', icon: 'CiFileOn',
    //                     },
    //                     {
    //                         label: 'Input Kas', icon: 'CiCoinInsert',
    //                     },
    //                     {
    //                         label: 'Kasir', icon: 'CiMoneyBill',
    //                     },
    //                     {
    //                         label: 'Report', icon: 'pi pi-fw pi-file',
    //                     },
    //                 ]},
    //                 {
    //                 label: 'Pool', icon: 'CiHome',
    //                 items: [
    //                     {
    //                         label: 'Kasir', icon: 'CiMoneyBill',
    //                     },
    //                     {
    //                         label: 'Report', icon: 'pi pi-fw pi-file',
    //                     },
    //                 ]
    //             },
    //         ]
    //     },

    //     {
    //         label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
    //         items: [
    //             { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
    //             { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input' },
    //             { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
    //             { label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate" },
    //             { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button' },
    //             { label: 'Table', icon: 'pi pi-fw pi-table', to: '/table' },
    //             { label: 'List', icon: 'pi pi-fw pi-list', to: '/list' },
    //             { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
    //             { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel' },
    //             { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay' },
    //             { label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
    //             { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu' },
    //             { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages' },
    //             { label: 'File', icon: 'pi pi-fw pi-file', to: '/file' },
    //             { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
    //             { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc' },
    //         ]
    //     },
    //     {
    //         label: 'UI Blocks',
    //         items: [
    //             { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: "NEW" },
    //             { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react' }
    //         ]
    //     },
    //     {
    //         label: 'Icons',
    //         items: [
    //             { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/icons' }
    //         ]
    //     },
    //     {
    //         label: 'Pages', icon: 'pi pi-fw pi-clone',
    //         items: [
    //             { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud' },
    //             { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline' },
    //         ]
    //     },
    //     {
    //         label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
    //         items: [
    //             {
    //                 label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
    //                 items: [
    //                     {
    //                         label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
    //                         items: [
    //                             { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                             { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                             { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
    //                         ]
    //                     },
    //                     {
    //                         label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
    //                         items: [
    //                             { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
    //                             { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
    //                         ]
    //                     },
    //                 ]
    //             },
    //             {
    //                 label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
    //                 items: [
    //                     {
    //                         label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
    //                         items: [
    //                             { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
    //                             { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
    //                             { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
    //                         ]
    //                     },
    //                     {
    //                         label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
    //                         items: [
    //                             { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
    //                             { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ];

    const addClass = (element, className) => {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    const removeClass = (element, className) => {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': layoutMode === 'overlay',
        'layout-static': layoutMode === 'static',
        'layout-static-sidebar-inactive': staticMenuInactive && layoutMode === 'static',
        'layout-overlay-sidebar-active': overlayMenuActive && layoutMode === 'overlay',
        'layout-mobile-sidebar-active': mobileMenuActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-theme-light': layoutColorMode === 'light'
    });

    return (
        <div className={wrapperClass} onClick={onWrapperClick}>
            <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

            <AppTopbar onToggleMenuClick={onToggleMenuClick} layoutColorMode={layoutColorMode}
                mobileTopbarMenuActive={mobileTopbarMenuActive} onMobileTopbarMenuClick={onMobileTopbarMenuClick} onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick} />

            <div className="layout-sidebar" onClick={onSidebarClick}>
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
            </div>

            <div className="layout-main-container">
                <div className="layout-main">
                    <Route path="/" exact render={() => <Dashboard colorMode={layoutColorMode} location={location} />} />
                    <Route path="/formlayout" component={FormLayoutDemo} />
                    <Route path="/input" component={InputDemo} />
                    <Route path="/floatlabel" component={FloatLabelDemo} />
                    <Route path="/invalidstate" component={InvalidStateDemo} />
                    <Route path="/button" component={ButtonDemo} />
                    <Route path="/table" component={TableDemo} />
                    <Route path="/list" component={ListDemo} />
                    <Route path="/tree" component={TreeDemo} />
                    <Route path="/panel" component={PanelDemo} />
                    <Route path="/overlay" component={OverlayDemo} />
                    <Route path="/media" component={MediaDemo} />
                    <Route path="/menu" component={MenuDemo} />
                    <Route path="/messages" component={MessagesDemo} />
                    <Route path="/blocks" component={BlocksDemo} />
                    <Route path="/icons" component={IconsDemo} />
                    <Route path="/file" component={FileDemo} />
                    <Route path="/chart" render={() => <ChartDemo colorMode={layoutColorMode} location={location} />} />
                    <Route path="/misc" component={MiscDemo} />
                    <Route path="/timeline" component={TimelineDemo} />
                    <Route path="/crud" component={Crud} />
                    <Route path="/documentation" component={Documentation} />
                    <Route path="/bank" component={Bank} />
                    <Route path="/FormSuratJalan" component={FormSuratJalan} />
                    <Route path="/layoutdesign" component={ListingSampurnaGroup} />
                    <Route path="/tablefr" component={Tablefr} />

                    <Route path="/sales/cargo/ujt" component={OrderDetailUJTCargo}/>
                    <Route path="/sales/cargo/nonujt" component={OrderDetailNonUJTCargo}/>
                    <Route path="/sales/cargo/ListUJTCargo" component={OrderListUJTCargo}/>
                    <Route path="/sales/cargo/ListNonUJTCargo" component={OrderListNonUJTCargo}/>
                    <Route path="/login" component={LoginPage}/>
                </div>

                <AppFooter layoutColorMode={layoutColorMode} />
            </div>

            <AppConfig rippleEffect={ripple} onRippleEffect={onRipple} inputStyle={inputStyle} onInputStyleChange={onInputStyleChange}
                layoutMode={layoutMode} onLayoutModeChange={onLayoutModeChange} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} />

            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>

        </div>
    );

}

export default App;
