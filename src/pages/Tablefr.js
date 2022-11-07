import React, { useState, useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { AutoComplete } from 'primereact/autocomplete';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { InputSwitch } from 'primereact/inputswitch';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Tablefr = () => {
    const [value6, setValue6] = useState('');
    const [switchValue, setSwitchValue] = useState(false);
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };

    const leftContents = (
        <React.Fragment>
            <Button label="Back" icon="pi pi-angle-left" className="p-button-secondary p-button-text mr-2" />
            <Button label="Save" icon="pi pi-save" className="p-button-secondary p-button-text" />
        </React.Fragment>
    );

    return (
        <div className="card">
            <div className="col-12 md:col-12 mb-4">
                <div>
                    <Toolbar left={leftContents} className="mb-3" />
                </div>
                <Accordion activeIndex={0}>
                    <AccordionTab header="Informasi Karyawan">
                    <div className="p-fluid">
                        <div className="formgrid grid">
                            <div className="field col-4">
                                <label htmlFor="name2">Nama</label>
                                <InputText id="name2" type="text"/>
                            </div>
                            <div className="field col-2">
                                <label htmlFor="internal">Jenis Kelamin</label>
                                <AutoComplete id="autocomplete" dropdown field="jenis kelamin"></AutoComplete>
                            </div>
                            <div className="field col-2">
                                <label htmlFor="internal">Agama</label>
                                <AutoComplete id="autocomplete" dropdown field="Agama"></AutoComplete>
                            </div>
                            <div className="field col-4">
                                <label htmlFor="name2">Nama Lengkap</label>
                                <InputText id="name2" type="text"/>
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="field col-2">
                                <label htmlFor="name2">Alias</label>
                                <InputText id="name2" type="text" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="email2">NIK</label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="email2">Tempat Lahir</label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="Tanggallahir">Tanggal Lahir</label>
                                <Calendar inputId="Tanggallahir" value={value6} onChange={(e) => setValue6(e.value)} />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="email2">Nomor Telepon</label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="email2">Hubungan</label>
                                <InputText id="email2" type="text" />
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="field col-3">
                                <label htmlFor="internal">Internal</label>
                                <AutoComplete id="autocomplete" dropdown field="internet"></AutoComplete>
                            </div>
                            <div className="field col-1">
                                <label htmlFor="jabatan">Jabatan</label>
                                <AutoComplete id="autocomplete" dropdown field="jabatan"></AutoComplete>
                            </div>
                            <div className="field col-4">
                                <label htmlFor="email2">Alamat</label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="internal">Tipe Lisensi</label>
                                <AutoComplete id="autocomplete" dropdown field="Tipelisensi"></AutoComplete>
                            </div>
                            <div className="field col-2">
                                <label htmlFor="email2">No. Lisensi</label>
                                <InputText id="email2" type="text" />
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="field col-2">
                                <label htmlFor="department">Department</label>
                                <AutoComplete id="autocomplete" dropdown field="department"></AutoComplete>
                            </div>
                            <div className="field col-2">
                                <label htmlFor="divisi">Divisi</label>
                                <AutoComplete id="autocomplete" dropdown field="divisi"></AutoComplete>
                            </div>
                            <div className="field col-2">
                                <label htmlFor="email2">Nomor Telepon</label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="divisi">Status</label>
                                <AutoComplete id="autocomplete" dropdown field="status"></AutoComplete>
                            </div>
                            <div className="field col-2">
                                <label htmlFor="Tanggaldibuat">Tanggal dibuat</label>
                                <Calendar inputId="Tanggalmasuk" value={value6} onChange={(e) => setValue6(e.value)} />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="Masaberlaku">Masa Berlaku</label>
                                <Calendar inputId="Tanggallahir" value={value6} onChange={(e) => setValue6(e.value)} />
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="field col-4">
                                <label htmlFor="kota">Kota</label>
                                <AutoComplete id="autocomplete" dropdown field="kota"></AutoComplete>
                            </div>
                            <div className="field col-3">
                                <label htmlFor="email2">No. KTP</label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field col-1">
                                <label>Status KTP</label>
                                <div>
                                    <InputSwitch checked={switchValue} onChange={(e) => setSwitchValue(e.value)} />
                                </div>
                            </div>
                            <div className="field col-2">
                                <label>Kartu Lisensi</label>
                                <div>
                                    <InputSwitch checked={switchValue} onChange={(e) => setSwitchValue(e.value)} />
                                </div>
                            </div>
                            <div className="field col-2">
                                <label>Lisensi Ditahan</label>
                                <div>
                                    <InputSwitch checked={switchValue} onChange={(e) => setSwitchValue(e.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="field col-2">
                                <label htmlFor="Tanggalmasuk">Tanggal Masuk</label>
                                <Calendar inputId="Tanggalmasuk" value={value6} onChange={(e) => setValue6(e.value)} />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="Tanggallahir">Tanggal Keluar</label>
                                <Calendar inputId="Tanggallahir" value={value6} onChange={(e) => setValue6(e.value)} />
                            </div>
                            <div className="field col-4">
                                <label htmlFor="reason">Alamat KTP</label>
                                <InputTextarea id="reason" rows="1" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="Tanggalserahterima">Tanggal Serah Terima</label>
                                <Calendar inputId="Tanggalmasuk" value={value6} onChange={(e) => setValue6(e.value)} />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="Masa Berakhir">Masa Berakhir</label>
                                <Calendar inputId="Tanggallahir" value={value6} onChange={(e) => setValue6(e.value)} />
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="field col-4">
                                <label htmlFor="reason">Alasan Keluar</label>
                                <InputTextarea id="reason" rows="1" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="email2">Nomor NPWP</label>
                                <InputText id="email2" type="text" />
                            </div>
                            <div className="field col-2">
                                <label htmlFor="divisi">Status NPWP</label>
                                <AutoComplete id="autocomplete" dropdown field="status"></AutoComplete>
                            </div>
                            <div className="field col-4">
                                <label htmlFor="divisi">Bank</label>
                                <AutoComplete id="autocomplete" dropdown field="status"></AutoComplete>
                            </div>
                        </div>
                        <div className="formgrid grid">
                            <div className="col-4">
                                <label htmlFor="photo">Upload Photo</label>
                                <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000} />
                            </div>
                            <div className='col-4'>

                            </div>
                            <div className="field col-4">
                                <label htmlFor="reason">Nomor Rekening</label>
                                <InputText id="reason" type="text"  />
                            </div>
                            {/* <div className="field col-4">
                                <label htmlFor="email2">Nama Bank</label>
                                <InputText id="email2" type="text" />
                            </div> */}
                        </div>
                    </div>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
};


export default Tablefr;