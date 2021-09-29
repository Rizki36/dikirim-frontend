import Image from "next/image";

const ProfileCard = ({ className = "", ...props }) => {
  const amount = "100000";
  return (
    <div
      className={`py-5 px-4 rounded-xl flex items-center bg-primary w-full ${className}`}
      {...props}
    >
      <div className="relative w-[54px] h-[54px] rounded-full overflow-hidden">
        <Image
          layout="fill"
          src="https://randomuser.me/api/portraits/men/18.jpg"
          alt="User Image"
        />
      </div>
      <div className="ml-4">
        <h5 className="font-bold text-white">Rizki Fitra</h5>
        <h6 className="font-medium text-white opacity-60">{amount}</h6>
      </div>
    </div>
  );
};

export default ProfileCard;
