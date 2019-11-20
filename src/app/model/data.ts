import { NumberValueAccessor } from '@angular/forms';

export interface dummy{
    nama: string;
}

export interface Panti{
    panti_id: number;
    panti_nama: string;
    jumlah_penghuni: number;
    kategori_panti: string;
    id_location: number;
    gambar_id: number;
    owner_kode: number;
    isboookmarked: boolean;
    summary: string;
    gambar: string;
}

export interface PantiOwner{
    panti_id: number;
    panti_nama: string;
    kontak_panti: string;
    jumlah_penghuni: number;
    kategori_panti: string;
    id_location: number;
    gambar_id: number;
    owner_kode: number;
    isboookmarked: boolean;
    summary: string;
    owner_alamat: string;
    owner_telepon: string;
    owner_firstname: string;
    owner_lastname: string;
    owner_email: string;
    owner_password: string;
}

export interface Kategori{
    panti_id: number;
    panti_nama: string;
    kontak_panti: string;
    jumlah_penghuni: string;
    kategori_panti: string;
    id_location: number;
    gambar_id: number;
    owner_kode: number;
    isbookmarked: boolean;
    summary: string;
}

export interface DetailPanti{
    panti_id: number;
    panti_nama: string;
    kontak_panti: string;
    jumlah_penghuni: number;
    kategori_panti: string;
    id_location: number;
    gambar_id: number;
    owner_kode: number;
    isboookmarked: boolean;
    summary: string;
    gambar_filepath: string;
    location_nama: string;
    location_lat: number;
    location_long: number;
    location_city: string;
    location_state: string;
    location_postal_code: string;
}

export interface response{

}