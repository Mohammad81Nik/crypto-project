const PersianTextEditor = ({
  unit,
  price,
}: {
  unit: string;
  price: string;
}) => {
  return (
    <>
      <span>{unit}</span>
      <span>{price}</span>
    </>
  );
};

export default PersianTextEditor;
