import { Time } from '@angular/common';
import { SafeResourceUrl } from '@angular/platform-browser';

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

export interface newOwner{
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    alamat_owner: string;
    telepon_owner: string;
    nama_panti: string;
    telepon_panti: string;
    jumlah_penghuni: string;
    kategori_panti: string;
    gambar_filepath: string;
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
    panti_id: string;
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

export interface LoginData{
    email: string;
    password: string;
}

export interface User{
    user_id: number;
    user_first_name: string;
    user_last_name: string;
    user_email: string;
    user_image: SafeResourceUrl;
}

export interface BookmarkInner{
    id_user: number;
    id_panti: number;
    panti_nama: string;
    kontak_panti: string;
    location_nama: string;
}

export interface BookmarkData{
    code: number;
    message: string;
    data: BookmarkInner[];
}

export interface Distance{
    lat: number;
    lng: number;
}

export interface EditProfile{
    id_user: string;
    name: string;
    email: string;
    gambar: string;
    password: string;
}