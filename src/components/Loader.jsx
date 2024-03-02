import React,{ useState, useEffect} from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="spinner-container bg-[#111827] py-25 h-150">
      <div className="flex justify-center items-center">
        <HashLoader
          size={250}
          color="#ea4d67"
          speedMultiplier={2.1}
          loading={loading}
          className="mt-10 py-40 h-50 mb-25"
        />
      </div>
    </div>
  );
};

export default Loader;
