type Props = {
  options: readonly string[]; // Necesitamos el readonly para evitar modificaciones externas
  // De otra forma, nos marcara error al usar el componente
  defaultMessage: string;
  label: string;
};

function Select({ options, defaultMessage, label }: Props) {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select className="form-select" aria-label="Default select example">
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
