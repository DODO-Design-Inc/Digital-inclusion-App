"use client";

import { useEffect, useState } from "react";
import StrategicCallModal from "./StrategicCallModal";

const StrategicCallWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrategicCallModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
    />
  );
};

export default StrategicCallWrapper;


