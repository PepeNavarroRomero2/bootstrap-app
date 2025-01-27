import "bootstrap/dist/css/bootstrap.min.css";
export default function Card() {
  return (
    <div className="card">
      <img
        src="https://i.imgur.com/CrjXZi3.jpeg"
        className="card-img-top"
        style={{ width: "150px", height: "auto" }}
      ></img>
      <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">
          Card description
        </p>
      </div>
      <div class="card-body">
        <a href="#" class="btn btn-primary">
          Boton
        </a>
      </div>
    </div>
  );
}
