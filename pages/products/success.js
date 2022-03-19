import { CheckCircleIcon } from "@heroicons/react/solid";

function Success() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center">
        <CheckCircleIcon className="h-14 w-14 text-blue-500" />
        <div>
          <h2 className="font-medium">Thank You!</h2>
          <p>Payment received! Your order is being processed.</p>
        </div>
      </div>
    </div>
  );
}

export default Success;
