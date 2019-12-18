import { Time } from '@angular/common';

export interface dummy{
    nama: string;
}

export interface Panti{
    panti_id: number;
    panti_nama: string;
    kontak_panti: string;
    jumlah_penghuni: number;
    kategori_panti: string;
    id_location: number;
    gambar_id: number;
    gambar_filepath: string;
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
    location_lat: string;
    location_long: string;
    location_city: string;
    location_state: string;
    location_postal_code: string;
}

export interface response{

}

export interface User{
    email: string;
    password: string;
}

export interface newOwner{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    telepon: string;
}

export interface newUser{
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

export interface Bookmarked{
    panti_id: string;
    panti_nama: string;
    kontak_panti: string;
}

export interface SearchSlug{
    search: string;
}

export interface SearchResult{
    panti_nama: string;
    kontak_panti: string;
    location_nama: string;
}

export interface SetBookmarked{
    id_user: string;
    id_panti: string;
}

export interface MyCoords{
    latitude: number;
    longitude: number;
    accuracy: string;
    timestamp: Time;
}