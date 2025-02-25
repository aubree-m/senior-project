class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="./index.html">Home</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Inks
                            </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="./inks/inks.html">Inks Overview</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="./inks/acrylic_inks.html">Acrylic Inks</a></li>
                            <li><a class="dropdown-item" href="./inks/alcohol_inks.html">Alcohol Inks</a></li>
                            <li><a class="dropdown-item" href="./inks/metallic_inks.html">Metallic Inks</a></li>
                            <li><a class="dropdown-item" href="./inks/solvent_inks.html">Solvent Inks</a></li>
                            <li><a class="dropdown-item" href="./inks/uv_cured_inks.html">UV-Cured Inks</a></li>
                            <li><a class="dropdown-item" href="./inks/water_basedinks.html">Water-based Inks</a></li>
                        </ul>
                    </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./materials/materials.html">Materials</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="./prints/prints.html">Printing Press</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `;
      }
  }

  customElements.define('header-component', Header);