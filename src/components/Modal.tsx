import React, { ReactNode, useRef } from "react";
import Image from "next/image";
import LocationIconDesktop from "@/assets/desktop/icon-location.svg";
import { ModalLayout } from "./Layouts";

interface IModal {
  handleQueryString: (value: {
    title?: string;
    location?: string;
    fullTime?: boolean;
  }) => void;
  onClose: () => void;
  setValue: (value: { location: string; fullTime: boolean }) => void;
  defaultValue: { location: string; fullTime: boolean };
}

const Modal: React.FC<IModal> = ({
  handleQueryString,
  onClose,
  setValue,
  defaultValue,
}) => {
  const locationRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const timeRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <ModalLayout>
      <div className="flex w-full items-center gap-4 px-4 py-6">
        <span className="">
          <Image src={LocationIconDesktop} width={15} height={15} alt="" />
        </span>
        <input
          type="text"
          placeholder="Filter by location..."
          className="w-full bg-transparent outline-none"
          ref={locationRef}
          defaultValue={defaultValue.location}
        />
      </div>
      <div className="flex w-full items-center gap-4 px-4 py-6">
        <input
          type="checkbox"
          className=""
          ref={timeRef}
          defaultChecked={defaultValue.fullTime}
        />
        <span className="text-sm font-bold">Full Time</span>
      </div>
      <div className="flex w-full items-center px-4 py-3">
        <button
          className="w-full rounded-md bg-devops-primary-violet p-2"
          onClick={() => {
            setValue({
              location: locationRef.current.value,
              fullTime: timeRef.current.checked,
            });
            handleQueryString({
              location: locationRef.current.value,
              fullTime: timeRef.current.checked,
            });
            onClose();
          }}
        >
          <span className="w-full text-white">Search</span>
        </button>
      </div>
    </ModalLayout>
  );
};

export default Modal;
