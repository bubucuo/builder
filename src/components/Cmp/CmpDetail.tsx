export function Text({value}: {value: string | undefined}) {
  return <>{value}</>;
}

export function Img({value}: {value: string | undefined}) {
  return <img src={value} alt="" />;
}

export function Input({
  inputType = "text",
  label,
  placeholder,
  formItemName,
  formKey,
}: any) {
  return (
    <>
      <input
        className={"input" + formKey}
        type={inputType}
        name={formItemName}
        placeholder={placeholder}
        style={{width: "100%", height: "100%"}}
        aria-label={label}
      />
    </>
  );
}

export function Button({value}: {value: string | undefined}) {
  return <>{value}</>;
}
