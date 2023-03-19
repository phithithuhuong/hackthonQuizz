import react, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Timer = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [second, setSecond] = useState(500);
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const restartGame = () => {
        props.onData("Data use restartgame");
    };
    useEffect(() => {
        console.log(second);
        let timeCount = null
        if (second === 0) {
            setShowModal(true);
            clearInterval(timeCount);
        } else {
            if (props.timerStart) {
                timeCount = setInterval(() => {
                    setSecond(second - 1);
                }, 1000)
            } else {
                clearInterval(timeCount);
            }
        }
        return () => clearInterval(timeCount);
    }, [second, props.timerStart]);

    return (
        <>
            <h1
                style={{
                    color: 'black',
                    position: 'fixed',
                    top: '15%'
                }}
            >{second}</h1>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn đã thua rồi!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={restartGame}>
                        Chơi Lại
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Timer;
