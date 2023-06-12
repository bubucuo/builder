export function Text({value}: {value: string | undefined}) {
  return <>{value}</>;
}

export function Img({value}: {value: string | undefined}) {
  return <img src={value} alt="" />;
}

export function Input({
  label,
  style,
  labelStyle,
  cmpStyle,
  placeholder,
  value,
}: any) {
  return (
    <>
      <label style={labelStyle}>{label}</label>
      <input
        placeholder={placeholder}
        style={cmpStyle}
        // value={value}
        // onChange={() => {}}
        aria-label={label}
      />
    </>
  );
}

export function Button({value}: {value: string | undefined}) {
  return <>{value}</>;
}
