export function Text({value}: {value: string}) {
  return <>{value}</>;
}

export function Img({value}: {value: string}) {
  return <img src={value} alt="" />;
}
