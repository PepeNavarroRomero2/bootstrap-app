import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
export default function Grid() {
  return (
    <div className="container text-center">
      <h2 className="text-center">Ejercicio 2 </h2>
      <div className="row">
        <div className='col'><Card/></div>
        <div className='col'><Card/></div>
        <div className='col'><Card/></div>
      </div>
      <div className="row">
        <div className="col-md-8">Columna 1 (8 columnas)</div>
        <div className="col-md-4">Columna 2 (4 columnas)</div>
      </div>
    </div>
  );
}
