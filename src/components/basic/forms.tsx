// TatuajeForm.tsx
import { useState } from "react";

export interface Tatuajes {
  id: string;
  fecha: string;
  descripcion: string;
  precio: string;
  abono: string;
  fechaPago: string;
  tatuador: string;
  cliente: string;
  recepcion: string;
}

interface TatuajeFormProps {
  onSubmit: (data: Tatuajes) => void;
}

const TatuajeForm: React.FC<TatuajeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<Tatuajes>({
    id: "",
    fecha: "",
    descripcion: "",
    precio: "",
    abono: "",
    fechaPago: "",
    tatuador: "",
    cliente: "",
    recepcion: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      id: "",
      fecha: "",
      descripcion: "",
      precio: "",
      abono: "",
      fechaPago: "",
      tatuador: "",
      cliente: "",
      recepcion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <div>
        <label className="block mb-1 font-semibold">ID</label>
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Fecha</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-semibold">Precio</label>
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Abono</label>
          <input
            type="number"
            name="abono"
            value={formData.abono}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Fecha de Pago</label>
          <input
            type="date"
            name="fechaPago"
            value={formData.fechaPago}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-1 font-semibold">Tatuador</label>
          <input
            type="text"
            name="tatuador"
            value={formData.tatuador}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Cliente</label>
          <input
            type="text"
            name="cliente"
            value={formData.cliente}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Recepción</label>
          <input
            type="text"
            name="recepcion"
            value={formData.recepcion}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Guardar Tatuaje
      </button>
    </form>
  );
};

export default TatuajeForm;
