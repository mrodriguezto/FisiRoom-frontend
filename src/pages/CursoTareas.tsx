import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';

const CursoTareas = () => {
  //logica
  //respuesta
  return (
    <div className="col-9 border border-light p-3">
      <div className="row ">
        <div className="d-flex justify-content-end py-3 border-bottom">
          <Link to="crear">
            <Button type="button" className="mx-1" color="primary" elevated>
              Crear nueva Tarea
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CursoTareas;