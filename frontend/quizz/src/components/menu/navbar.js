import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup, MDBNavbarLink, MDBNavbarItem
} from 'mdb-react-ui-kit';

export default function Navbars() {
    return (
        <MDBNavbar light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand><img style={{width:100, borderRadius: 50}} src="https://www.sangia.vn/uploads/Image/2020/12/25/C%C3%A1c%20c%C3%A2u%20%C4%91%E1%BB%91%20vui%20h%E1%BA%A1i%20n%C3%A3o.jpg"/></MDBNavbarBrand>

                    {/*<MDBNavbarLink style={{textAlign:'left'}} active aria-current='page' href=''>*/}
                    {/*    Login*/}
                    {/*</MDBNavbarLink>*/}

                <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
                    <input className='form-control' placeholder="Enter category" aria-label="Search" type='Search' />
                    <MDBBtn style={{border:' 3px solid blueviolet', background:'blueviolet', color:'white', width:100, height:50}} outline>Search</MDBBtn>
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>
    );
}