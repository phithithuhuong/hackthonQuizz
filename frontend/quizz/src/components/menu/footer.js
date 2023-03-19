import React from 'react';
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Kết nối với chúng tôi trên các mạng xã hội:</span>
                </div>
                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f"/>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter"/>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google"/>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram"/>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin"/>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github"/>
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 style={{color: 'blueviolet'}} className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3"/>
                                Mô tả dự án
                            </h6>
                            <p>
                                Dự án này có tên "Ai thông minh hơn học viên CodeGym", mục đích là đưa người dùng một
                                trải nghiệm hết sức thú vị cũng như mang lại lợi ích cho người dùng như là xả
                                stress,kích thích não giúp cho thông minh hơn
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 style={{color: 'blueviolet'}} className='text-uppercase fw-bold mb-4'>Công nghệ</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    React
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Express
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    NodeJS
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    MonggoDB
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4' style={{color: 'blueviolet'}}>Nhóm Phát Triển</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Nguyễn Khắc Bảo Hưng

                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Phí Thị Thu Hường
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Mai Bảo Phước
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>

                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 style={{color: 'blueviolet'}} className='text-uppercase fw-bold mb-4'>Thông tin</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2"/>
                                Thanh Xuân, HN 2023, VN
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3"/>
                               codegym@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3"/> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3"/> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
                © 2023 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    CODEGYM.VN
                </a>
            </div>
        </MDBFooter>
    );
}