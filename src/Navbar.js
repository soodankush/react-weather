import {useState} from "react";

const Navbar = ({handleSubmit}) => {
  const appName = useState('Weather App');
  const [locationName, setLocationName] = useState('');
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href>{ appName }</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Enter Location" aria-label="Search" value={ locationName } onChange={ (e) => setLocationName(e.target.value)} />
              <button type="button" className="btn btn-outline-success" onClick={() => handleSubmit(locationName)}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;