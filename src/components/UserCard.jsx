
export default function UserCard({ image, name, role }) {
  return (
    <div className="bg-cardpeach rounded-tl-[60px] rounded-tr-2xl rounded-br-[60px] rounded-bl-2xl p-3 flex flex-col">
      <div className="w-full overflow-hidden rounded-tl-[50px] rounded-tr-xl rounded-br-[50px] rounded-bl-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover grayscale"
        />
      </div>

      <h3 className="mt-4 text-sm font-bold text-gray-900">{name}</h3>

      <p className="mt-1 text-[11px] text-gray-500 text-center pb-3">
        {role}
      </p>
    </div>
  );
}