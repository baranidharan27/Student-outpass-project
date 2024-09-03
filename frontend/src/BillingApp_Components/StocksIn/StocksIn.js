import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import Modal from 'react-modal';
import CreateStocks from './CreateStocks';
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import * as api from '../Configurations/Api_Details'
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import windowSize from 'react-window-size';
import { connect } from 'react-redux';
import * as actionTypes from "../../store/actions";
import QRCode from "react-qr-code";
import {
    Button,
} from 'react-bootstrap';
import Edit_Stocks_Data from './Edit_Stocks_Data';
const customStyles = {
    content: {
        top: '45%',
        left: '58%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '90%',

    },
    overlay: { zIndex: 1000 }
};

const customStyles2 = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '80%',

    },
    overlay: { zIndex: 1000 }
};

Modal.setAppElement('#root')

function CustomEditComponent(props) {

    const [loader, setloader] = useState(1);
    const [flag, setflag] = useState('');
    const [data, setdata] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [qropen, setqropen] = useState(false);
    const [editmodalIsOpen, seteditmodalIsOpen] = useState(false);
    const [editstockdata, seteditstockdata] = useState([]);
    const [student_name, setstudent_name] = useState('');
    const [collage, setcollage] = useState('');
    const [start_date, setstart_date] = useState('');
    const [end_date, setend_date] = useState('');
    const [start_time, setstart_time] = useState('');
    const [end_time, setend_time] = useState('');
    const [mobile_number, setmobile_number] = useState('');
    const [dep, setdep] = useState('');

    useEffect(() => {

        const getStocksDataid = {
            "client_id": localStorage.getItem("Client_Id")
        }
        const getStocksData = {
            url: localStorage.getItem('org_name') !== 'ADMIN' ? api.GETSTOCKS_BY_USER_ID : api.GETSTOCKS,
            method: localStorage.getItem('org_name') !== 'ADMIN' ? 'POST' : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            data: JSON.stringify(getStocksDataid)
        }

        axios(getStocksData)
            .then(response => {
                setdata(response.data)
                console.log(response.data)
            })
            .catch(function (e) {
                if (e.message === 'Network Error') {
                    alert("No Internet Found. Please check your internet connection")
                }
                else {
                    alert("Sorry, something went wrong. Please try again after sometime. If the issue still persists contact support.")
                }

            });




    }, [flag]

    )


    function closeModal() {
        setIsOpen(false);

    }

    function getResponse(result) {
        setIsOpen(false);
        seteditmodalIsOpen(false)
        setflag(!flag)
    }


    if (loader == 0) {

        return (
            <div>
                <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center" style={{ backgroundColor: 'white' }}>
                    <CircularProgress color="secondary" size={70} />
                    <h1 style={{ marginLeft: 40 }}>Loading...</h1>
                </Box>
            </div>
        )
    }

    else {
        return (
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={props.windowWidth >= 700 ? customStyles : customStyles2}
                    contentLabel="Example Modal"
                    backdrop="static"
                    shouldCloseOnOverlayClick={false}
                >
                    <CreateStocks
                        callback={getResponse}
                    />
                </Modal>

                <Modal
                    isOpen={editmodalIsOpen}
                    onRequestClose={closeModal}
                    style={props.windowWidth >= 700 ? customStyles : customStyles2}
                    contentLabel="Example Modal"
                    backdrop="static"
                    shouldCloseOnOverlayClick={false}
                >
                    <Edit_Stocks_Data
                        callback={getResponse}
                        data={editstockdata}
                    />
                </Modal>

                <Modal
                    isOpen={qropen}
                    onRequestClose={closeModal}
                    style={props.windowWidth >= 700 ? customStyles : customStyles2}
                    contentLabel="Example Modal"
                    backdrop="static"
                    shouldCloseOnOverlayClick={false}
                >
                    <div style={{ height: "auto", maxWidth: 500, width: "100%", margin: "0 auto" }}>
                        <p style={{ fontSize: '20px', fontWeight: 'bolder ', textAlign: 'center' }}>APPROVED QR</p>
                        <QRCode
                            size={500}
                            style={{ height: "auto", margin: "0 auto", maxWidth: "100%", width: "100%" }}
                            value={`NAME : ${student_name.toUpperCase()} , DEPARTMENT : ${dep} , MOBILE NUMBER : ${mobile_number} ,  COLLAGE : ${collage} , START DATE : ${start_date} , END DATE : ${end_date} , START TIME : ${start_time} , END TIME : ${end_time}`}
                            viewBox={`0 0 256 256`}
                        />

                        <Button
                            variant={"success"}
                            color="#08A045"
                            style={{ fontWeight: 'bold', fontSize: 17, marginLeft: '40%', marginRight: 'auto', marginTop: '20px' }}
                            onClick={(e) => {
                                setqropen(false)

                            }}
                        >
                            Close
                        </Button>
                    </div>
                </Modal>
                {
                    localStorage.getItem('org_name') !== 'ADMIN' ?
                        <div style={{ display: "flex", justifyContent: 'center' }}>
                            <Button
                                variant={"success"}
                                color="#08A045"
                                style={{ fontWeight: 'bold', fontSize: 17 }}
                                onClick={(e) => {
                                    setIsOpen(true);

                                }}
                            >
                                + ADD REQUEST
                            </Button>
                        </div>
                        : ''
                }
                <MaterialTable
                    title="STUDENT MANAGEMENT"
                    columns={[
                        { title: 'STUDENT NAME', field: 'student_name', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.student_name.toUpperCase()}</h5>) } },
                        { title: 'DEPARTMENT', field: 'department', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.department}</h5>) } },
                        { title: 'MOBILE NUMBER', field: 'mobile_number', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.mobile_number}</h5>) } },
                        { title: 'COLLAGE', field: 'collage', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.collage.toUpperCase()}</h5>) } },
                        { title: 'START DATE', field: 'start_date', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.start_date}</h5>) } },
                        { title: 'START TIME', field: 'start_time', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.start_time}</h5>) } },
                        { title: 'END DATE', field: 'end_date', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.end_date}</h5>) } },
                        { title: 'END TIME', field: 'end_time', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium' }}>{rowData.end_time}</h5>) } },
                        { title: 'STATUS', field: 'status', render: rowData => { return (<h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: rowData.status === 'false' ? 'red' : rowData.status === 'true' ? 'green' : 'blue' }}>{rowData.status === 'false' ? 'Rejected' : rowData.status === 'true' ? 'Accepted' : 'Pending'}</h5>) } },

                        {
                            title: 'QR', field: 'qr', render: rowData => {
                                return (
                                    rowData.status === 'false' ? <h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: 'red' }}>Rejected</h5> : rowData.status === 'true' ?
                                        <div style={{ height: "auto", maxWidth: 64, width: "100%", cursor: 'pointer' }} onClick={() => {
                                            setstudent_name(rowData.student_name)
                                            setdep(rowData.department)
                                            setmobile_number(rowData.mobile_number)
                                            setcollage(rowData.collage)
                                            setstart_date(rowData.start_date)
                                            setend_date(rowData.end_date)
                                            setstart_time(rowData.start_time)
                                            setend_time(rowData.end_time)
                                            setqropen(true)
                                        }}>
                                            <QRCode
                                                size={256}
                                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                                value={`NAME : ${rowData.student_name.toUpperCase()} , DEPARTMENT : ${rowData.department} , MOBILE NUMBER : ${rowData.mobile_number} ,  COLLAGE : ${rowData.collage} , START DATE : ${rowData.start_date} , END DATE : ${rowData.end_date} , START TIME : ${rowData.start_time} , END TIME : ${rowData.end_time}`}
                                                viewBox={`0 0 256 256`}
                                            />
                                        </div>
                                        :
                                        <h5 style={{ fontSize: 13, fontFamily: 'Poppins-Medium', color: 'blue' }}>Pending</h5>
                                )
                            }
                        },

                    ]}
                    data={data}
                    key={data._id}
                    actions={[
                        {
                            icon: 'edit',
                            tooltip: 'Edit Food',
                            iconProps: { style: { color: "#575580" } },
                            onClick: (event, rowData) => {
                                seteditstockdata(rowData)
                                seteditmodalIsOpen(true)
                            }
                        },
                        localStorage.getItem('org_name') !== 'ADMIN' ?
                            rowData => ({
                                icon: 'delete',
                                tooltip: 'Delete User',
                                iconProps: { style: { color: "#575580" } },
                                onClick: (event, rowData) => {
                                    confirmAlert({
                                        title: 'Delete',
                                        message: 'Are you want to remove ' + rowData["student_name"],
                                        buttons: [
                                            {
                                                label: 'Yes',
                                                onClick: () => {
                                                    const options = {
                                                        url: api.CREATE_STOCK + rowData._id,
                                                        method: 'DELETE',
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                            // 'Authorization': 'Bearer ' + window.localStorage.getItem('codeofauth')
                                                        }
                                                    };

                                                    axios(options)
                                                        .then(response => {
                                                            // console.log(response);
                                                            setflag(!flag)

                                                        })

                                                        .catch(function (e) {


                                                            if (e.message === 'Network Error') {
                                                                alert("No Internet Found. Please check your internet connection")
                                                            }

                                                            else {

                                                                alert("Sorry, something went wrong. Please try again after sometime. If the issue still persists contact support.")
                                                            }


                                                        });


                                                }
                                            },
                                            {
                                                label: 'No',
                                                onClick: () => {

                                                }
                                            }
                                        ]
                                    });

                                }
                            }) : ''
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        sorting: true,
                        exportButton: true,
                        pageSize: 10
                    }}
                    localization={{
                        header: {
                            actions: "ACTIONS"
                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login_indicator: state.loginIndicator
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onloginIndicatorChange: (loginIndicator) => dispatch({ type: actionTypes.BILLING_DATA, loginIndicator: loginIndicator }),

    }
};

export default windowSize(connect(mapStateToProps, mapDispatchToProps)(CustomEditComponent));

