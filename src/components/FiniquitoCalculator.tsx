"use client";

import React, { useState, useEffect, useCallback } from "react";

type Result = {
  aguinaldo: number;
  vacaciones: number;
  primaVacacional: number;
  indemnizacion: number;
  total: number;
};

const currency = (v: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(v);

function yearsBetween(start: Date, end: Date) {
  const msPerYear = 365.25 * 24 * 60 * 60 * 1000; // account for leap years
  return Math.max(0, (end.getTime() - start.getTime()) / msPerYear);
}

export default function FiniquitoCalculator() {
  const [fechaIngreso, setFechaIngreso] = useState<string>("");
  const [fechaSalida, setFechaSalida] = useState<string>("");
  const [salarioMensual, setSalarioMensual] = useState<string>("");
  const [motivo, setMotivo] = useState<string>("Despido Injustificado");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  const validateAndCompute = useCallback((showError = true) => {
    setError(null);
    setResult(null);

    if (!fechaIngreso || !fechaSalida || !salarioMensual || !motivo) {
      if (showError) setError("Por favor completa todos los campos.");
      return;
    }

    const start = new Date(fechaIngreso);
    const end = new Date(fechaSalida);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      if (showError) setError("Fechas inválidas.");
      return;
    }

    if (end < start) {
      if (showError) setError("La fecha de salida no puede ser anterior a la de ingreso.");
      return;
    }

    const salarioNum = Number(salarioMensual);
    if (isNaN(salarioNum) || salarioNum <= 0) {
      if (showError) setError("Introduce un salario mensual válido mayor a 0.");
      return;
    }

    const antiguedad = yearsBetween(start, end);
    const salarioDiario = salarioNum / 30;

    const aguinaldo = salarioDiario * 15 * antiguedad;
    const vacaciones = salarioDiario * 12 * antiguedad;
    const primaVacacional = vacaciones * 0.25;

    let indemnizacion = 0;
    if (motivo === "Despido Injustificado") {
      // 90 días + 20 días por año trabajado
      indemnizacion = salarioDiario * (90 + 20 * antiguedad);
    }

    const total = aguinaldo + vacaciones + primaVacacional + indemnizacion;

    setResult({ aguinaldo, vacaciones, primaVacacional, indemnizacion, total });
  }, []);

  // Auto-calculate whenever any field changes
  useEffect(() => {
    validateAndCompute(false); // false = don't show error messages during auto-compute
  }, [fechaIngreso, fechaSalida, salarioMensual, motivo, validateAndCompute]);

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-navy-custom/5 rounded-xl blur-2xl" />
      <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="bg-navy-custom p-6 text-white">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <span className="material-icons">calculate</span>
            Calculadora de Finiquito 2026
          </h3>
          <p className="text-white/60 text-xs mt-1 bg-white/10 inline-block px-2 py-0.5 rounded">Estimación Legal Provisoria</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Fecha de Ingreso</label>
              <input value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="date" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Fecha de Salida</label>
              <input value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)} className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="date" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Salario Mensual Bruto (MXN)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input value={salarioMensual} onChange={(e) => {
                const val = e.target.value;
                // Allow only up to 6 digits (999999)
                if (val === "" || (Number(val) <= 999999 && val.length <= 6)) {
                  setSalarioMensual(val);
                }
              }} className="w-full pl-8 rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="0.00" type="number" step="0.01" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase">Motivo de Separación</label>
            <select value={motivo} onChange={(e) => setMotivo(e.target.value)} className="w-full rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
              <option>Despido Injustificado</option>
              <option>Renuncia Voluntaria</option>
              <option>Término de Contrato</option>
              <option>Rescisión con Causa</option>
            </select>
          </div>

          <div className="p-4 bg-background-light dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-700">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase">Total Estimado</p>
                <p className="text-3xl font-black text-navy-custom dark:text-white">{result ? currency(result.total) : "$ --,---.--"}</p>
              </div>
              <button onClick={() => validateAndCompute(true)} className="bg-primary hover:bg-red-700 text-white px-6 py-3 rounded-lg font-black transition-all shadow-lg">
                CALCULAR
              </button>
            </div>

            {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

            {result && (
              <div className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                <p><strong>Aguinaldo:</strong> {currency(result.aguinaldo)}</p>
                <p><strong>Vacaciones:</strong> {currency(result.vacaciones)}</p>
                <p><strong>Prima vacacional:</strong> {currency(result.primaVacacional)}</p>
                <p><strong>Indemnización:</strong> {currency(result.indemnizacion)}</p>
              </div>
            )}
          </div>

          <p className="text-[10px] text-slate-400 italic text-center">*Este cálculo es una aproximación y no constituye una opinión legal formal hasta ser revisado por un abogado de Cuatecontzi.</p>
        </div>
      </div>
    </div>
  );
}
