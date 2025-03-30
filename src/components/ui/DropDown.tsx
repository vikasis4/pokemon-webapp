import { useEffect, useRef } from "react";

interface CustomDropdownProps {
  options: number[];
  onChange: (value: number) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
}

function DropDown({
  options,
  onChange,
  isOpen,
  setIsOpen,
  buttonRef,
}: CustomDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute mt-1 w-24 bg-gray-800 rounded-md shadow-lg z-10"
      ref={dropdownRef}
    >
      {options.map((option) => (
        <button
          key={option}
          className="block w-full text-left px-4 py-2 text-white hover:bg-purple-600"
          onClick={() => {
            onChange(option);
            setIsOpen(false);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default DropDown;
