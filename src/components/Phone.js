function Phone(props) {
  return (
    <div className="flex justify-center bg-gray-200 py-10">
      <div className="w-[390px] h-[844px] rounded-lg bg-white">
        {props.children}
      </div>
    </div>
  );
}

export default Phone;
