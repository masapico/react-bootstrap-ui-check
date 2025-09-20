import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdOutlineMenu } from "react-icons/md";

const App = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <Row className="flex-grow-1" style={{ minHeight: "100vh" }}>
        {/* PC表示用のサイドバー (左側) */}
        <Col
          md={{ span: 4, order: 1 }}
          lg={{ span: 3, order: 1 }}
          className="bg-dark text-white d-none d-md-block d-flex flex-column"
        >
          <h3>サイドバー</h3>
          <ul className="nav flex-column">
            <li className="nav-item">メニュー1</li>
            <li className="nav-item">メニュー2</li>
            <li className="nav-item">メニュー3</li>
          </ul>
        </Col>

        {/* メインコンテンツ (右側) */}
        <Col md={{ span: 8, order: 2 }} lg={{ span: 9, order: 2 }}>
          {" "}
          <div className="text-start d-md-none">
            <MdOutlineMenu
              onClick={handleShow}
              className="h3"
              style={{ cursor: "pointer" }}
            />
          </div>
          <h3>メインコンテンツ</h3>
          {/* ... メインコンテンツ ... */}
        </Col>
      </Row>

      {/* オフキャンバスサイドバー（小画面用） */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start" // 修正点: 左からスライド
        className="bg-dark"
      >
        <Offcanvas.Header
          closeButton
          closeVariant="white"
          className="text-white"
        >
          <Offcanvas.Title>サイドバー</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-white">
          <ul className="nav flex-column">
            <li className="nav-item">メニュー1</li>
            <li className="nav-item">メニュー2</li>
            <li className="nav-item">メニュー3</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default App;
