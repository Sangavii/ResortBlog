import Section from "./Section";
import { useState } from "react";
import "../styles.css";
// import { Row, Col } from "react-foundation";
import logo from "../image/SV.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, NavDropdown, Row, Col } from "react-bootstrap";
const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [preview, setPreview] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // if (searchInput.length > 0) {
  //   countriesfilter((country) => {
  //     return country.name.match(searchInput);
  //   });
  // }

  return (
    <div>
      <Navbar bg="light" expand="md">
        <Container>
          <img src={logo} alt="logo" className="logo" />
          <Navbar.Brand href="#home">SV Resorts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>

              <NavDropdown title="Associates" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Themed Garden Party
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Conference Meetings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Weddings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* mega menu */}
          <NavDropdown
            className="pr-2 py-2 align-text-top"
            title="Events"
            id="basic-nav-dropdown"
          >
            <Container className="eventsNav pt-0 mt-0" title="Plans">
              <Row>
                <Col xs="12" md="6">
                  <h4>Events</h4>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Townhalls
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Weddings
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Party
                    </a>
                  </li>
                </Col>
                <Col xs="12" md="6">
                  <h4>OutDoors</h4>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Films
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Rituals
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Tours
                    </a>
                  </li>
                </Col>
                <Col xs="12" md="6">
                  <h4>Foods</h4>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Veg
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Non-Veg
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Chinese
                    </a>
                  </li>
                </Col>
                <Col xs="12" md="6">
                  <h4>OutDoors</h4>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Films
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Rituals
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Tours
                    </a>
                  </li>
                </Col>
              </Row>
            </Container>
          </NavDropdown>
          {/* Search menu */}
          <input
            type="text"
            placeholder="Search here"
            onChange={handleChange}
            value={searchInput}
          />
          {/* Preview Icon */}
          <Router>
            <Link to="/about">
              <button
                onClick={() => setPreview(true)}
                style={{ marginLeft: "5px" }}
              >
                <OpenInNewIcon />
              </button>
            </Link>
            <span>Preview</span>
          </Router>
        </Container>
      </Navbar>
      <Router>
        <Routes>
          {preview && <Route exact path="/about" element={<Section />}></Route>}
        </Routes>
      </Router>
    </div>
  );
};

export default Header;
