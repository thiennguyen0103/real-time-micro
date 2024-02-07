const Participants = () => {
  return (
    <div className="absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md">
      list of users
    </div>
  );
};

Participants.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute right-2 top-2 flex h-12 w-[100px] items-center rounded-md bg-white px-1.5 shadow-md" />
  );
};

export default Participants;
