export type Currency = {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
};

export type ConversionRates = {
  [key: string]: number;
};
