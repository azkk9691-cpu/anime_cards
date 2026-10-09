
export default function InfoCard({ image, title, description, buttonLabel }) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col">
      <img src={image} alt={title} className="w-full h-24 object-cover" />

      <div className="p-3 flex-1 flex flex-col">
        <h4 className="text-[11px] font-bold text-infonavy leading-tight">
          {title}
        </h4>

        <p className="mt-2 text-[9px] text-gray-500 leading-snug flex-1">
          {description}
        </p>

        <button className="mt-3 self-start bg-infoblue text-white text-[9px] font-semibold px-3 py-1 rounded">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}