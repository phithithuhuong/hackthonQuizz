import React from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";

function Register() {
    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <label style={{textAlign:"left"}}>Nhập tên </label>
            <MDBInput wrapperClass='mb-4' id='form1' type='email'/>
            <label style={{textAlign:"left"}}>Nhập mật khẩu</label>
            <MDBInput wrapperClass='mb-4' id='form2' type='password'/>

            <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Nhớ thông tin' />
                <a href="!#">Quên mật khẩu ?</a>
            </div>

            <MDBBtn style={{background:"blueviolet", height:40}} className="mb-4">Đăng kí</MDBBtn>

            <div className="text-center">
                <p> <Link to={'/'} > Quay lại đăng nhâp </Link></p>
                <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='facebook-f' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='twitter' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='google' size="sm"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                        <MDBIcon fab icon='github' size="sm"/>
                    </MDBBtn>

                </div>
            </div>

        </MDBContainer>
    );
}

export default Register;