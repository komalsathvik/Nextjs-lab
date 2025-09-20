export default function Reviews({ params }) {
  const { productId } = params;
  return (
    <div>
      <h1>Reviews for product {productId}</h1>
    </div>
  );
}
